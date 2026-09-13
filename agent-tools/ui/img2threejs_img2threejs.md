---
description: "Rebuild the object in a reference image as a code-only, procedural, quality-gated, animation-ready Three.js model. Token-efficient image-to-3D."
type: skill
url: https://github.com/img2threejs/img2threejs
stars: 15.9k
language: Python
pushed: 2026-09-07
---

## Notes

### 2026-08-06, from research

- Rebuilds an object from a reference image as Three.js code made of primitives and shaders, not a downloaded mesh. Works in passes, with a quality check after each.
- Use when: you want a 3D object that lives in your repo as code you can edit and diff.
- Outputs an `ObjectSculptSpec` JSON, a TypeScript function returning a `THREE.Group`, and reference-against-render sheets for each pass.
- Python 3.10+, standard library only. `git clone https://github.com/img2threejs/img2threejs.git ~/.claude/skills/img2threejs`
- Python does the checking, so the model spends tokens only on judging the picture and writing code.
