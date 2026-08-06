# Voice

Text-to-speech, speech-to-text, dictation and lip-sync.

Several tools in [video.md](./video.md) depend on this layer — `video-use` runs on ElevenLabs Scribe for word-level transcription, and `claude-code-video-toolkit` uses Qwen3-TTS for narration.

## Dictation

- **[Handy](https://handy.computer/)** `[App]` — free, open source, extensible speech-to-text that works fully offline.
  - *Use when:* you want to talk to your agent instead of typing. Offline matters here — dictation captures everything you say, including the parts you didn't mean to send anywhere.

## Text to speech

- **[HeadTTS](https://github.com/met4citizen/HeadTTS)** `[Library]` (167★) — neural TTS with phoneme-level timestamps and Oculus-standard visemes, so audio comes out already synchronized to facial animation.
  - *Use when:* you need lip-sync — avatars, talking heads, character animation. The timestamps are the point; most TTS gives you audio and leaves you to align it.
  - *Model:* Kokoro-82M-v1.0-ONNX-timestamped.
  - *Runs:* fully in-browser via WebGPU (WASM fallback, slower), or on a Node WebSocket/REST server via WebGPU or CPU.
  - *Needs:* clone and `npm install`; Node 20+ for the server.
  - *Note:* MIT, and deliberately avoids eSpeak and other GPL modules — so it's usable in a closed product without license contamination.

- **[Coqui TTS](https://github.com/coqui-ai/TTS)** `[Library]` (45.9k★) — deep learning TTS toolkit; XTTSv2 was the standout open voice-cloning model of its era.
  - **Stale: last push 2024-08-16.** Coqui the company wound down and the repo has been effectively frozen for roughly two years. Listed because it still turns up first in searches and the pretrained models remain usable, but don't start a new project on it.
  - *Instead:* Kokoro-based options like HeadTTS above for modern quality at a fraction of the size, or check current open TTS leaderboards — this space moves fast.
  - *License:* MPL-2.0.
