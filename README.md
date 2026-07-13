# 🎭 AIRMASK

**Wear any face.** Your webcam drives a 3D avatar in real time — head pose,
blinks, gaze, and expressions — with the face tracking running **100% on-device
in the browser** (MediaPipe Face Landmarker + WebGPU). Nothing about your camera
is uploaded.

A sibling project to [AIRSLICE](https://airslice.dorkalev.com): the same
"heavy ML in the browser, no server for the fun part" architecture, with a
different model (face instead of hands) and a different output (a rigged
avatar instead of a game).

▶️ **Live:** _coming soon_

## How it works

```
webcam ─▶ MediaPipe Face Landmarker (on-device, WebGPU)
       ─▶ 52 ARKit-style blendshapes + a 4×4 head transform
       ─▶ mapped onto a VRM avatar's expressions + head bone
       ─▶ rendered with three.js + @pixiv/three-vrm
```

- **On-device inference** — no frames leave the tab; the model runs on your GPU.
- **Blendshape → VRM mapping** — jaw/smile/frown/brows drive `aa`/`happy`/`sad`/
  `surprised`, per-eye blinks drive `blinkLeft`/`blinkRight`, eye-look drives
  gaze; the head transform rotates the avatar's head bone (mirrored, smoothed).
- **Bring your own avatar** — drop any `.vrm` (make one free at
  [VRoid](https://vroid.com/en/studio)), or start with the bundled sample.

## Run it

The core demo is pure client-side — no backend needed. Serve `public/` over
`http://localhost` (a webcam needs a secure context; `localhost` counts):

```bash
npx serve public
# open the printed http://localhost:… in a Chromium-based browser with a webcam
```

Best on **desktop Chrome/Edge** with WebGPU. Give the page camera permission,
then move your head / make faces — the avatar mirrors you.

## Roadmap

- **Stage 1 (this):** live face → VRM avatar, fully on-device. ✅
- **Stage 2:** record a performance + share it on a no-database gallery
  (the AIRSLICE Firebase-Storage-as-index pattern). Needs your own Firebase
  project; fill in `public/config.js`.
- **Stage 3 (maybe):** viseme/TTS-driven speech and an LLM, to turn the mirror
  into a talking avatar.

## License

[MIT](LICENSE). Uses three.js, [@pixiv/three-vrm](https://github.com/pixiv/three-vrm),
and Google's MediaPipe Tasks under their respective licenses. VRM avatars have
their own licenses — check the model you load.
