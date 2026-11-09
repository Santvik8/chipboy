# chipboy

A retro console emulator that runs in the browser, written in TypeScript.

It starts with a complete **CHIP-8** interpreter — the classic first emulator project — and then grows into a **Nintendo Game Boy (DMG)** emulator: Sharp LR35902 CPU, memory bus, PPU (graphics), timers, input and, eventually, sound.

> Status: early development. See [ROADMAP.md](ROADMAP.md).

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev      # start the dev server, then open the printed URL
npm test         # run the test suite
npm run build    # production build into dist/
```

ROMs are **not** included. Use public-domain / homebrew ROMs and load them from the page.

## Project layout

```
src/            # emulator cores and browser frontend
tests/          # Vitest test suite
index.html      # app entry page
```

## License

[MIT](LICENSE) © 2026 Santiago López
