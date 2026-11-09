# Roadmap

## Phase 1 — CHIP-8 core
- [ ] Memory (4 KB), registers V0–VF, I, PC, stack, timers
- [ ] Fetch/decode/execute loop for all 35 opcodes
- [ ] Built-in hex font sprites
- [ ] Unit tests per opcode

## Phase 2 — CHIP-8 frontend
- [ ] Render the 64×32 display to a `<canvas>`
- [ ] Keyboard mapping for the 16-key keypad
- [ ] Load ROMs from a file picker / drag and drop
- [ ] Beep sound via Web Audio
- [ ] Pause, reset, speed control
- [ ] Pass community CHIP-8 test ROMs

## Phase 3 — CHIP-8 extras
- [ ] Debugger panel: registers, memory view, step-by-step execution
- [ ] Configurable quirks (shift, load/store, jump)
- [ ] SUPER-CHIP (128×64) support

## Phase 4 — Game Boy CPU
- [ ] Memory bus and cartridge loading (ROM-only, MBC1)
- [ ] LR35902 instruction set, including CB-prefixed opcodes
- [ ] Interrupts and timers
- [ ] Pass Blargg's `cpu_instrs` test ROMs

## Phase 5 — Game Boy graphics & input
- [ ] PPU modes and timing
- [ ] Background, window and sprite rendering
- [ ] Joypad input
- [ ] Run homebrew games

## Phase 6 — Polish
- [ ] MBC3/MBC5 cartridges and battery saves
- [ ] APU (sound channels)
- [ ] Save states
- [ ] Deploy to GitHub Pages
