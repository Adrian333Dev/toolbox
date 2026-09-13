'use strict';
// Run with `node --test bin/tool.test.js`. Each test builds a toolbox of its
// own under tmp/tests/, with this script copied into its bin/ and a gh that
// answers from files, so nothing reaches the network.

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const SCRATCH = path.join(__dirname, '..', 'tmp', 'tests');

function write(file, text) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text);
}

const base64 = (text) => ({ encoding: 'base64', content: Buffer.from(text).toString('base64') });

/** `api` maps an endpoint to GitHub's answer. An endpoint missing from it answers 404. */
function toolbox(name, api) {
  const root = path.join(SCRATCH, name);
  fs.rmSync(root, { recursive: true, force: true });
  write(path.join(root, 'bin/tool.js'), fs.readFileSync(path.join(__dirname, 'tool.js'), 'utf8'));
  write(path.join(root, 'inbox/.info'), 'New tools, waiting to be filed\n');

  const gh = path.join(root, 'fake/gh');
  write(gh, [
    '#!/usr/bin/env bash',
    '[ "$1" = --version ] && exit 0',
    'answer="$(dirname "$0")/api/${2//\\?/_}.json"',
    '[ -f "$answer" ] && exec cat "$answer"',
    'echo "gh: Not Found (HTTP 404)" >&2',
    'exit 1',
    '',
  ].join('\n'));
  fs.chmodSync(gh, 0o755);
  for (const [endpoint, answer] of Object.entries(api)) {
    write(path.join(root, 'fake/api', `${endpoint.replace(/\?/g, '_')}.json`), JSON.stringify(answer));
  }

  return {
    root,
    file: (relative) => path.join(root, relative),
    read: (relative) => fs.readFileSync(path.join(root, relative), 'utf8'),
    write: (relative, text) => write(path.join(root, relative), text),
    run: (args, cwd = SCRATCH) => spawnSync(process.execPath, [path.join(root, 'bin/tool.js'), ...args], {
      cwd,
      encoding: 'utf8',
      env: { ...process.env, PATH: `${path.dirname(gh)}:${process.env.PATH}` },
    }),
  };
}

const MEM0 = {
  full_name: 'mem0ai/mem0',
  html_url: 'https://github.com/mem0ai/mem0',
  stargazers_count: 64712,
  language: 'Python',
  pushed_at: '2026-09-03T10:00:00Z',
  archived: false,
  description: 'The Memory Layer: "drop-in"   memory\nfor agents',
};

const OLD_SKILL = {
  full_name: 'someone/old-skill',
  html_url: 'https://github.com/someone/old-skill',
  stargazers_count: 340,
  language: null,
  pushed_at: '2024-01-02T00:00:00Z',
  archived: true,
  description: null,
};

const README = [
  '<!-- a note for contributors -->',
  '<p align="center"><img src="logo.png" width="200"></p>',
  '',
  '# mem0 [![npm](https://img.shields.io/npm/v/mem0.svg)](https://npmjs.com/mem0) [![CI][ci-badge]][ci]',
  '',
  '![demo](demo.gif)',
  '',
  'Memory for <b>agents</b>. Run `mem0 <command>` to start.',
  '',
  'Fast &middot; small &amp; safe &#8594; [docs][ci]',
  '',
  '[ci-badge]: https://img.shields.io/github/actions/workflow/status/mem0ai/mem0/ci.yml',
  '[ci]: https://github.com/mem0ai/mem0/actions',
  '',
  '',
  '',
  '```html',
  '<div>kept inside code</div>',
  '![kept](too.png)',
  '```',
  '',
].join('\n');

const README_CLEANED = [
  '# mem0',
  '',
  'Memory for agents. Run `mem0 <command>` to start.',
  '',
  'Fast · small & safe → [docs][ci]',
  '',
  '[ci]: https://github.com/mem0ai/mem0/actions',
  '',
  '```html',
  '<div>kept inside code</div>',
  '![kept](too.png)',
  '```',
  '',
].join('\n');

test('add writes the README, then the tool file, into the inbox from any folder', () => {
  const box = toolbox('add', {
    'repos/mem0ai/mem0': MEM0,
    'repos/mem0ai/mem0/readme': base64(README),
    'repos/someone/old-skill': OLD_SKILL,
  });

  const result = box.run(['add', 'https://github.com/mem0ai/mem0/tree/main/docs', 'git@github.com:someone/old-skill.git']);
  assert.strictEqual(result.status, 0, result.stderr);
  assert.strictEqual(result.stdout, 'inbox/mem0ai_mem0.md\ninbox/someone_old-skill.md\n');

  assert.strictEqual(box.read('inbox/mem0ai_mem0.md'), [
    '---',
    'description: "The Memory Layer: \\"drop-in\\" memory for agents"',
    'type: ""',
    'url: https://github.com/mem0ai/mem0',
    'stars: 64.7k',
    'language: Python',
    'pushed: 2026-09-03',
    '---',
    '',
    '## Notes',
    '',
  ].join('\n'));
  assert.strictEqual(box.read('inbox/mem0ai_mem0.readme.md'), README_CLEANED);

  const bare = box.read('inbox/someone_old-skill.md');
  assert.match(bare, /^description: ""$/m, 'no description is an empty value, never a made-up one');
  assert.match(bare, /^language: ""$/m);
  assert.match(bare, /^archived: true$/m);
  assert.ok(!fs.existsSync(box.file('inbox/someone_old-skill.readme.md')), 'a repo with no README gets the tool file alone');
});

test('add skips a tool filed anywhere in the toolbox, and refuses a folder the toolbox lacks', () => {
  const box = toolbox('add-refuse', {
    'repos/mem0ai/mem0': MEM0,
    'repos/someone/old-skill': OLD_SKILL,
  });
  box.write('agent-tools/memory/MEM0AI_mem0.md', '---\ndescription: "mine"\n---\n\n## Notes\n\n- used it\n');

  const skipped = box.run(['add', 'mem0ai/mem0']);
  assert.strictEqual(skipped.status, 0, 'a skip is not a failure');
  assert.match(skipped.stderr, /mem0ai\/mem0 is already at agent-tools\/memory\/MEM0AI_mem0\.md, skipped/);
  assert.ok(!fs.existsSync(box.file('inbox/mem0ai_mem0.md')));
  assert.match(box.read('agent-tools/memory/MEM0AI_mem0.md'), /used it/);

  const typo = box.run(['add', 'someone/old-skill', '--to', 'agent-tools/memroy']);
  assert.strictEqual(typo.status, 64);
  assert.match(typo.stderr, /the toolbox has no folder "agent-tools\/memroy"/);
  assert.ok(!fs.existsSync(box.file('agent-tools/memroy')), 'a typo never creates a folder');

  const filed = box.run(['add', 'someone/old-skill', '--to', 'agent-tools/memory']);
  assert.strictEqual(filed.status, 0, filed.stderr);
  assert.ok(fs.existsSync(box.file('agent-tools/memory/someone_old-skill.md')), 'a folder is read from the toolbox too');
});

const SKILL = (name, description) => base64(`---\nname: ${name}\ndescription: ${description}\n---\n\n# ${name}\n`);

const COLLECTION_API = {
  'repos/acme/skills': {
    full_name: 'acme/skills',
    html_url: 'https://github.com/acme/skills',
    stargazers_count: 150321,
    language: 'JavaScript',
    pushed_at: '2026-09-12T08:00:00Z',
    archived: false,
    description: 'GitHub text that must not replace mine',
  },
  'repos/acme/skills/readme': base64('# Acme skills\n'),
  'repos/acme/skills/git/trees/HEAD?recursive=1': {
    truncated: false,
    tree: [
      'skills/deploy/SKILL.md',
      'dist/skills/deploy/SKILL.md',
      '.claude/skills/deploy/SKILL.md',
      'apps/discord/access/SKILL.md',
      'apps/telegram/access/SKILL.md',
      'agents/reviewer.md',
      'agents/README.md',
      '.claude-plugin/marketplace.json',
    ].map((file) => ({ path: file, type: 'blob' })).concat({ path: 'skills', type: 'tree' }),
  },
  'repos/acme/skills/contents/skills/deploy/SKILL.md': base64(
    '---\nname: deploy-to-vercel\ndescription: >-\n  Deploy apps to Vercel. Use when the user\n  asks to ship.\n---\n'),
  'repos/acme/skills/contents/dist/skills/deploy/SKILL.md': base64(
    '---\nname: deploy-to-vercel\ndescription: >-\n  Deploy apps to Vercel. Use when the user\n  asks to ship.\n---\n'),
  'repos/acme/skills/contents/.claude/skills/deploy/SKILL.md': base64(
    '---\nname: deploy-to-vercel\ndescription: >-\n  Deploy apps to Vercel. Use when the user\n  asks to ship.\n---\n'),
  'repos/acme/skills/contents/apps/discord/access/SKILL.md': SKILL('access', '"Manage Discord access: who may message."'),
  'repos/acme/skills/contents/apps/telegram/access/SKILL.md': SKILL('access', 'Manage Telegram access'),
  'repos/acme/skills/contents/agents/reviewer.md': SKILL('reviewer', 'Reviews a diff for bugs. Use after every change.'),
  'repos/acme/skills/contents/agents/README.md': base64('# Agents\n'),
  'repos/acme/skills/contents/.claude-plugin/marketplace.json': base64(JSON.stringify({
    metadata: { pluginRoot: './plugins' },
    plugins: [
      { name: 'formatter', source: 'formatter', description: 'Formats code on save. Needs prettier.' },
      { name: 'remote', source: { source: 'github', repo: 'other/remote' }, description: 'Lives elsewhere' },
    ],
  })),
};

test('refresh rewrites what GitHub owns, keeps what a person wrote, and lists a collection', () => {
  const box = toolbox('refresh', COLLECTION_API);
  const before = [
    '---',
    'description: "Mine, written by hand"',
    'type: collection',
    'url: https://github.com/acme/skills',
    'stars: 90k',
    'language: ""',
    'pushed: 2025-01-01',
    'archived: true',
    '---',
    '',
    '## Contents',
    '',
    '### Skills',
    '',
    '- **gone** `/skills/gone/`: A skill removed upstream.',
    '',
    '## Notes',
    '',
    '### 2026-09-20, used in a project',
    '',
    '- Worth keeping.',
    '',
  ].join('\n');
  box.write('agent-tools/collections/acme_skills.md', before);
  const handWritten = '---\ndescription: "A plugin"\ntype: plugin\nurl: https://github.com/acme/plugins/tree/main/review\n---\n\n## Notes\n';
  box.write('agent-tools/code/acme_review.md', handWritten);

  const result = box.run(['refresh']);
  assert.strictEqual(result.status, 0, result.stderr);
  assert.match(result.stderr, /agent-tools\/code\/acme_review\.md points inside a repo or off GitHub, skipped/);
  assert.strictEqual(box.read('agent-tools/code/acme_review.md'), handWritten);
  assert.strictEqual(box.read('agent-tools/collections/acme_skills.readme.md'), '# Acme skills\n');

  const after = [
    '---',
    'description: "Mine, written by hand"',
    'type: collection',
    'url: https://github.com/acme/skills',
    'stars: 150k',
    'language: JavaScript',
    'pushed: 2026-09-12',
    '---',
    '',
    '## Contents',
    '',
    '### Skills',
    '',
    '- **access** `/apps/discord/access/`: Manage Discord access: who may message.',
    '- **access** `/apps/telegram/access/`: Manage Telegram access',
    '- **deploy-to-vercel** `/skills/deploy/`: Deploy apps to Vercel.',
    '',
    '### Plugins',
    '',
    '- **formatter** `/plugins/formatter/`: Formats code on save.',
    '- **remote** `https://github.com/other/remote`: Lives elsewhere',
    '',
    '### Subagents',
    '',
    '- **reviewer** `/agents/reviewer.md`: Reviews a diff for bugs.',
    '',
    '## Notes',
    '',
    '### 2026-09-20, used in a project',
    '',
    '- Worth keeping.',
    '',
  ].join('\n');
  assert.strictEqual(box.read('agent-tools/collections/acme_skills.md'), after);

  const again = box.run(['refresh', 'agent-tools/collections/acme_skills.md']);
  assert.strictEqual(again.status, 0, again.stderr);
  assert.strictEqual(box.read('agent-tools/collections/acme_skills.md'), after, 'a second run changes nothing');
});

test('refresh drops the list from a tool no longer typed collection, and names a missing path', () => {
  const box = toolbox('refresh-type', COLLECTION_API);
  box.write('software/acme_skills.md',
    '---\ndescription: ""\ntype: library\nurl: https://github.com/acme/skills\n---\n\n## Contents\n\n### Skills\n\n- **x** `/x/`\n\n## Notes\n');

  const result = box.run(['refresh', 'software']);
  assert.strictEqual(result.status, 0, result.stderr);
  assert.strictEqual(box.read('software/acme_skills.md'), [
    '---',
    'description: ""',
    'type: library',
    'url: https://github.com/acme/skills',
    'stars: 150k',
    'language: JavaScript',
    'pushed: 2026-09-12',
    '---',
    '',
    '## Notes',
    '',
  ].join('\n'));

  const missing = box.run(['refresh', 'software/nope']);
  assert.strictEqual(missing.status, 64);
  assert.match(missing.stderr, /the toolbox has no file or folder "software\/nope"/);
});
