#!/usr/bin/env node
'use strict';
/**
 * bin/tool.js: add a tool to the toolbox with its README, and keep what GitHub
 * owns up to date.
 *
 *   bin/tool.js add <repo>... [--to <folder>]
 *   bin/tool.js refresh [<file-or-folder>...]
 *
 * add writes owner_repo.readme.md, then owner_repo.md, into inbox/, or into the
 * folder --to names. The folder must already exist in the toolbox. A tool whose
 * owner_repo.md sits anywhere in the toolbox, in any case, is skipped. type is
 * left empty for whoever files the tool.
 *
 * refresh rewrites stars, language, pushed, archived and the README of every
 * tool file under the paths given, or under the whole toolbox. A tool typed
 * collection also gets a ## Contents list: its skills, plugins and subagents.
 * description, type and the notes are never touched. A file whose url points
 * inside a repo was written by hand, and is skipped.
 *
 * <repo> is owner/repo, an https URL, a git@ remote, or a link into a repo.
 * Needs the gh command, logged in. The toolbox is found from this script's own
 * location, so it runs from any folder.
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ME = 'bin/tool.js';
const ROOT = path.resolve(__dirname, '..');
const INBOX = path.join(ROOT, 'inbox');
const GROUPS = ['agent-tools', 'software', 'inbox'];

const USAGE = `${ME} add <repo>... [--to <folder>]
${ME} refresh [<file-or-folder>...]`;

function usageError(message) {
  process.stderr.write(`${ME}: ${message}\n  ${USAGE.replace(/\n/g, '\n  ')}\n`);
  process.exit(64);
}

const warn = (message) => process.stderr.write(`${ME}: ${message}\n`);
const shown = (file) => path.relative(ROOT, file);

// GitHub

/** `gh api <endpoint>`, parsed. null when GitHub answers 404. */
function api(endpoint) {
  const run = spawnSync('gh', ['api', endpoint], { encoding: 'utf8', maxBuffer: 512 * 1024 * 1024 });
  if (run.status === 0) return JSON.parse(run.stdout);
  if (/HTTP 404/.test(run.stderr)) return null;
  throw new Error(run.stderr.trim() || `gh api ${endpoint} failed`);
}

/** A file's text from a contents or readme answer. Empty for a file too large to be sent inline. */
const decoded = (answer) =>
  answer && answer.encoding === 'base64' ? Buffer.from(answer.content, 'base64').toString('utf8') : '';

function readRepoFile(slug, file) {
  return decoded(api(`repos/${slug}/contents/${file.split('/').map(encodeURIComponent).join('/')}`));
}

function slugOf(raw) {
  const [owner, repo = ''] = raw
    .replace(/^git@github\.com:/, '')
    .replace(/^https?:\/\/(www\.)?github\.com\//, '')
    .split('/');
  const name = repo.replace(/\.git$/, '');
  return /^[\w.-]+$/.test(owner) && /^[\w.-]+$/.test(name) ? `${owner}/${name}` : null;
}

/** Below 100k one decimal, above it whole thousands, so the width stays the same. */
function stars(count) {
  if (count >= 100000) return `${Math.floor(count / 1000)}k`;
  if (count >= 1000) return `${String(Math.round(count / 100) / 10).replace(/\.0$/, '')}k`;
  return String(count);
}

function facts(repo) {
  return {
    name: repo.full_name,
    url: repo.html_url,
    stars: stars(repo.stargazers_count),
    language: repo.language || '',
    pushed: repo.pushed_at.split('T')[0],
    archived: repo.archived === true,
    description: (repo.description || '').replace(/\s+/g, ' ').trim(),
  };
}

// The README

const FENCE = /^\s*(`{3,}|~{3,})/;

// Inline code comes first and is kept, so nothing inside backticks is removed.
// Then HTML comments, badges (an image inside a link), images, the lines
// defining an image named by reference, and HTML tags.
const NOISE = new RegExp([
  /(`+)[^`\n]*?\1/.source,
  /<!--[\s\S]*?-->/.source,
  /\[!\[[^\]]*\](\([^)]*\)|\[[^\]]*\])\](\([^)]*\)|\[[^\]]*\])/.source,
  /!\[[^\]]*\](\([^)]*\)|\[[^\]]*\])/.source,
  /^[ \t]*\[[^\]\n]+\]:[ \t]*\S*(shields\.io|badge|data:image|\.(svg|png|gif|jpe?g|webp)\b)[^\n]*/.source,
  /<\/?[a-zA-Z][\w-]*(\s[^<>]*)?\/?>/.source,
].join('|'), 'gim');

const ENTITIES = {
  nbsp: ' ', emsp: ' ', ensp: ' ', amp: '&', lt: '<', gt: '>', quot: '"', apos: "'",
  middot: '·', bull: '•', rarr: '→', larr: '←', hellip: '…', copy: '©', mdash: '—', ndash: '–',
};

function cleanProse(text) {
  return text
    .replace(NOISE, (match) => (match.startsWith('`') ? match : ''))
    .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, name) => {
      if (name[0] !== '#') return ENTITIES[name.toLowerCase()] ?? entity;
      const code = name[1].toLowerCase() === 'x' ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
      return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : entity;
    })
    .split('\n')
    .map((line) => (line.trim() ? line.trimEnd() : ''))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n');
}

/** Badges, images, HTML tags and HTML comments removed. Text and code blocks kept as written. */
function cleanReadme(text) {
  const out = [];
  let prose = [];
  let fence = null;
  for (const line of text.replace(/\r\n/g, '\n').split('\n')) {
    const mark = FENCE.exec(line);
    if (fence) {
      out.push(line);
      if (mark && mark[1][0] === fence[0] && mark[1].length >= fence.length && !line.trim().slice(mark[1].length)) fence = null;
    } else if (mark) {
      out.push(cleanProse(prose.join('\n')), line);
      prose = [];
      fence = mark[1];
    } else {
      prose.push(line);
    }
  }
  out.push(cleanProse(prose.join('\n')));
  const cleaned = out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
  return cleaned ? `${cleaned}\n` : '';
}

function readme(slug) {
  const answer = api(`repos/${slug}/readme`);
  return answer ? cleanReadme(decoded(answer)) : '';
}

// Tool files

/** Written whole beside the old file, then moved over it, so a stopped run never loses notes. */
function writeWhole(file, text) {
  const temporary = path.join(path.dirname(file), `.${path.basename(file)}.tmp`);
  fs.writeFileSync(temporary, text);
  fs.renameSync(temporary, file);
}

const quoted = (text) => `"${text.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;

function newToolFile(tool) {
  return [
    '---',
    `description: ${quoted(tool.description)}`,
    'type: ""',
    `url: ${tool.url}`,
    `stars: ${tool.stars}`,
    `language: ${tool.language || '""'}`,
    `pushed: ${tool.pushed}`,
    ...(tool.archived ? ['archived: true'] : []),
    '---',
    '',
    '## Notes',
    '',
  ].join('\n');
}

function splitToolFile(text) {
  const match = /^---\n([\s\S]*?)\n---\n/.exec(text);
  return match && { fields: match[1].split('\n'), body: text.slice(match[0].length) };
}

const fieldAt = (fields, key) => fields.findIndex((line) => line.startsWith(`${key}:`));

function fieldValue(fields, key) {
  const at = fieldAt(fields, key);
  return at === -1 ? '' : fields[at].slice(key.length + 1).trim();
}

/** Replaces the field, or adds it under the field named in `after`. null removes it. */
function setField(fields, key, value, after) {
  const at = fieldAt(fields, key);
  if (value === null) {
    if (at !== -1) fields.splice(at, 1);
  } else if (at !== -1) {
    fields[at] = `${key}: ${value}`;
  } else {
    fields.splice(fieldAt(fields, after) + 1, 0, `${key}: ${value}`);
  }
}

const readmeBeside = (file) => file.replace(/\.md$/, '.readme.md');

/** The file of that name anywhere in the toolbox, in any case, or null. */
function findTool(name) {
  const wanted = name.toLowerCase();
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
      if (dir === ROOT && ['bin', 'tmp'].includes(entry.name)) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        const found = walk(full);
        if (found) return found;
      } else if (entry.name.toLowerCase() === wanted) {
        return full;
      }
    }
    return null;
  };
  return walk(ROOT);
}

/** A path from the folder you stand in, or else from the toolbox. Never one outside the toolbox. */
function inToolbox(given) {
  const candidates = path.isAbsolute(given) ? [given] : [path.resolve(given), path.resolve(ROOT, given)];
  return candidates.find((candidate) => {
    const relative = path.relative(ROOT, candidate);
    return fs.existsSync(candidate) && relative && !relative.startsWith('..') && !path.isAbsolute(relative);
  }) || null;
}

// A collection's list

/** name and description from a file's frontmatter, or null when it has none. */
function frontmatter(text) {
  const match = /^﻿?---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  if (!match) return null;
  const lines = match[1].split(/\r?\n/);
  const read = (key) => {
    const at = lines.findIndex((line) => line.startsWith(`${key}:`));
    if (at === -1) return '';
    let value = lines[at].slice(key.length + 1).trim();
    if (value === '' || /^[>|][-+]?$/.test(value)) {
      const block = [];
      for (let i = at + 1; i < lines.length && /^\s+\S|^\s*$/.test(lines[i]); i++) block.push(lines[i].trim());
      value = block.join(' ');
    } else if (/^"(?:[^"\\]|\\.)*"$/.test(value)) {
      value = value.slice(1, -1).replace(/\\(.)/g, '$1');
    } else if (/^'(?:[^']|'')*'$/.test(value)) {
      value = value.slice(1, -1).replace(/''/g, "'");
    }
    return value.replace(/\s+/g, ' ').trim();
  };
  return { name: read('name'), description: read('description') };
}

/** The rest of a description is usually when to use it. */
function firstSentence(text) {
  const match = /^.*?[.!?](?=\s+[A-Z"'(`[]|$)/.exec(text);
  return match ? match[0] : text;
}

const folderOf = (file) => {
  const dir = path.posix.dirname(file);
  return dir === '.' ? '/' : `/${dir}/`;
};

const inHiddenFolder = (where) => where.split('/').some((part) => part.startsWith('.'));

/** Copies with the same name and description count once, at the shortest path outside hidden folders. */
function merged(items) {
  const kept = new Map();
  for (const item of items) {
    const key = `${item.name}\n${item.description}`;
    const current = kept.get(key);
    const better = !current
      || (inHiddenFolder(current.where) && !inHiddenFolder(item.where))
      || (inHiddenFolder(current.where) === inHiddenFolder(item.where) && item.where.length < current.where.length);
    if (better) kept.set(key, item);
  }
  return [...kept.values()].sort((a, b) =>
    a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }) || a.where.localeCompare(b.where));
}

/** The plugin's folder in this repo, or a full link when it lives somewhere else. */
function pluginWhere(source, slug, pluginRoot) {
  const folder = (relative) => {
    const clean = relative.replace(/^\.\//, '').replace(/\/+$/, '');
    return clean && clean !== '.' ? `/${clean}/` : '/';
  };
  const web = (url) => url.replace(/^git@github\.com:/, 'https://github.com/').replace(/\.git$/, '');

  if (typeof source === 'string') {
    const bare = !source.startsWith('./') && !source.includes('/');
    return folder(bare && pluginRoot ? path.posix.join(pluginRoot, source) : source);
  }
  if (!source || typeof source !== 'object') return '';
  switch (source.source) {
    case 'github':
      return `https://github.com/${source.repo}`;
    case 'url':
    case 'archive':
      return web(source.url || '');
    case 'npm':
      return `https://www.npmjs.com/package/${source.package}`;
    case 'git-subdir': {
      const base = /^[\w.-]+\/[\w.-]+$/.test(source.url) ? `https://github.com/${source.url}` : web(source.url || '');
      if (base.toLowerCase() === `https://github.com/${slug}`.toLowerCase()) return folder(source.path);
      return base.startsWith('https://github.com/') ? `${base}/tree/HEAD/${source.path}` : base;
    }
    default:
      return '';
  }
}

function listCollection(slug) {
  const tree = api(`repos/${slug}/git/trees/HEAD?recursive=1`);
  if (!tree) return [];
  if (tree.truncated) warn(`${slug} has more files than GitHub lists at once, so its contents may be incomplete`);
  const files = tree.tree.filter((entry) => entry.type === 'blob').map((entry) => entry.path);

  const skills = [];
  for (const file of files.filter((f) => path.posix.basename(f) === 'SKILL.md')) {
    const meta = frontmatter(readRepoFile(slug, file));
    if (!meta) continue;
    const dir = path.posix.dirname(file);
    const name = meta.name || (dir === '.' ? slug.split('/')[1] : path.posix.basename(dir));
    skills.push({ name, description: meta.description, where: folderOf(file) });
  }

  const subagents = [];
  for (const file of files.filter((f) => f.endsWith('.md') && path.posix.basename(path.posix.dirname(f)) === 'agents')) {
    const meta = frontmatter(readRepoFile(slug, file));
    if (meta && meta.name) subagents.push({ name: meta.name, description: meta.description, where: `/${file}` });
  }

  const plugins = [];
  if (files.includes('.claude-plugin/marketplace.json')) {
    try {
      const marketplace = JSON.parse(readRepoFile(slug, '.claude-plugin/marketplace.json'));
      const pluginRoot = marketplace.metadata && marketplace.metadata.pluginRoot;
      for (const plugin of marketplace.plugins || []) {
        if (!plugin || !plugin.name) continue;
        const description = (plugin.description || '').replace(/\s+/g, ' ').trim();
        plugins.push({ name: plugin.name, description, where: pluginWhere(plugin.source, slug, pluginRoot) });
      }
    } catch (error) {
      warn(`${slug}: .claude-plugin/marketplace.json could not be read, so its plugins are left out: ${error.message}`);
    }
  }

  return [['Skills', skills], ['Plugins', plugins], ['Subagents', subagents]]
    .map(([heading, items]) => ({ heading, items: merged(items) }))
    .filter((group) => group.items.length);
}

function contentsSection(groups) {
  if (!groups.length) return '';
  const lines = ['## Contents', ''];
  for (const { heading, items } of groups) {
    lines.push(`### ${heading}`, '');
    for (const { name, description, where } of items) {
      const sentence = firstSentence(description);
      lines.push(`- **${name}**${where ? ` \`${where}\`` : ''}${sentence ? `: ${sentence}` : ''}`);
    }
    lines.push('');
  }
  return lines.join('\n');
}

/** The body with its old ## Contents dropped, and the new one written above ## Notes. */
function withContents(body, section) {
  const lines = body.split('\n');
  const start = lines.indexOf('## Contents');
  if (start !== -1) {
    const next = lines.findIndex((line, i) => i > start && line.startsWith('## '));
    lines.splice(start, (next === -1 ? lines.length : next) - start);
  }
  const text = lines.join('\n');
  if (!section) return text;
  const notes = /^## Notes$/m.exec(text);
  if (!notes) return `${text.replace(/\n*$/, '\n\n')}${section}`;
  return `${text.slice(0, notes.index)}${section}\n${text.slice(notes.index)}`;
}

// Commands

function add(repos, to) {
  let folder = INBOX;
  if (to !== undefined) {
    folder = inToolbox(to);
    if (!folder || !fs.statSync(folder).isDirectory()) usageError(`--to: the toolbox has no folder "${to}"`);
  }
  fs.mkdirSync(folder, { recursive: true });

  let failed = false;
  for (const raw of repos) {
    const slug = slugOf(raw);
    if (!slug) {
      warn(`not a repo "${raw}"`);
      failed = true;
      continue;
    }
    try {
      const repo = api(`repos/${slug}`);
      if (!repo) throw new Error(`${slug} is not on GitHub`);
      const tool = facts(repo);
      const name = `${tool.name.replace('/', '_')}.md`;
      const existing = findTool(name);
      if (existing) {
        warn(`${tool.name} is already at ${shown(existing)}, skipped`);
        continue;
      }
      const file = path.join(folder, name);
      const text = readme(tool.name);
      if (text) writeWhole(readmeBeside(file), text);
      writeWhole(file, newToolFile(tool));
      console.log(shown(file));
    } catch (error) {
      warn(`failed on ${slug}: ${error.message}`);
      failed = true;
    }
  }
  return failed;
}

function toolFilesUnder(target) {
  if (fs.statSync(target).isFile()) return [target];
  return fs.readdirSync(target, { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith('.'))
    .sort((a, b) => a.name.localeCompare(b.name))
    .flatMap((entry) => {
      const full = path.join(target, entry.name);
      if (entry.isDirectory()) return toolFilesUnder(full);
      return entry.name.endsWith('.md') && !entry.name.endsWith('.readme.md') ? [full] : [];
    });
}

function refreshOne(file) {
  const tool = splitToolFile(fs.readFileSync(file, 'utf8'));
  if (!tool) return warn(`${shown(file)} has no fields at the top, skipped`);
  const match = /^https:\/\/github\.com\/([\w.-]+)\/([\w.-]+?)\/?$/.exec(fieldValue(tool.fields, 'url'));
  if (!match) return warn(`${shown(file)} points inside a repo or off GitHub, skipped`);

  const slug = `${match[1]}/${match[2]}`;
  const repo = api(`repos/${slug}`);
  if (!repo) throw new Error(`${slug} is not on GitHub`);
  const now = facts(repo);
  if (now.name.toLowerCase() !== slug.toLowerCase()) warn(`${slug} is now ${now.name}: its url and file name are yours to change`);

  const { fields } = tool;
  setField(fields, 'stars', now.stars, 'url');
  setField(fields, 'language', now.language || '""', 'stars');
  setField(fields, 'pushed', now.pushed, 'language');
  setField(fields, 'archived', now.archived ? 'true' : null, 'pushed');

  const types = fieldValue(fields, 'type').replace(/"/g, '').split(',').map((type) => type.trim());
  const section = types.includes('collection') ? contentsSection(listCollection(now.name)) : '';

  const text = readme(now.name);
  if (text) writeWhole(readmeBeside(file), text);
  writeWhole(file, `---\n${fields.join('\n')}\n---\n${withContents(tool.body, section)}`);
  console.log(shown(file));
}

function refresh(paths) {
  const targets = paths.length
    ? paths.map((given) => inToolbox(given) || usageError(`the toolbox has no file or folder "${given}"`))
    : GROUPS.map((group) => path.join(ROOT, group)).filter((dir) => fs.existsSync(dir));

  let failed = false;
  for (const file of targets.flatMap(toolFilesUnder)) {
    try {
      refreshOne(file);
    } catch (error) {
      warn(`failed on ${shown(file)}: ${error.message}`);
      failed = true;
    }
  }
  return failed;
}

function main(argv) {
  const [command, ...rest] = argv;
  if (command === '-h' || command === '--help') {
    console.log(USAGE);
    return 0;
  }
  if (command !== 'add' && command !== 'refresh') {
    usageError(command ? `unknown command "${command}"` : 'name a command: add or refresh');
  }

  const given = [];
  let to;
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] === '-h' || rest[i] === '--help') {
      console.log(USAGE);
      return 0;
    } else if (rest[i] === '--to' && command === 'add') {
      if (rest[i + 1] === undefined) usageError('--to needs a folder');
      to = rest[++i];
    } else if (rest[i].startsWith('-')) {
      usageError(`unknown flag "${rest[i]}"`);
    } else {
      given.push(rest[i]);
    }
  }

  if (command === 'add' && !given.length) usageError('name at least one repo');
  if (spawnSync('gh', ['--version']).error) {
    warn('needs the gh CLI: https://cli.github.com');
    return 1;
  }
  const failed = command === 'add' ? add(given, to) : refresh(given);
  return failed ? 1 : 0;
}

process.exitCode = main(process.argv.slice(2));
