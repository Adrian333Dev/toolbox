---
description: "HeadTTS: Free neural text-to-speech (Kokoro) with timestamps and visemes for lip-sync. Runs in-browser (WebGPU/WASM) or on local Node.js WebSocket/REST server (WebGPU/CPU)."
type: library
url: https://github.com/met4citizen/HeadTTS
stars: 172
language: JavaScript
pushed: 2026-04-03
---

## Notes

### 2026-08-06, from research

- Text to speech with a timestamp per sound and Oculus mouth shapes, so the audio comes out already synced to a face.
- Use when: lip-sync for avatars, talking heads, animated characters. Most text to speech gives audio and leaves the syncing to you.
- Model: Kokoro-82M-v1.0-ONNX-timestamped.
- Runs in the browser through WebGPU (a slower WASM fallback), or on a Node server through WebGPU or CPU. Clone and `npm install`. Node 20+ for the server.
- MIT, and avoids eSpeak and other GPL modules, so it can go in a closed product.
