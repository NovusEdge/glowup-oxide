# oxide

A [glowup](https://github.com/NovusEdge/glowup) pack: bone text and red oxide on warm ink. Every pane frame and card border is oxide, context shows as an HP bar, tool rows use a dither ramp (`░ ▒ ▓ █`), and the dotted `orb-states` spinner cycles words like "annealing" and "etching". Tool colors are the riso blue, ochre, olive and goggle teal from the reference images, tuned until each one reads at 3:1 or better on the background.

## Install

The glyphs, hearts and spinner words live in a theme file, which a pack cannot carry, so install the theme first:

```
/glowup theme add https://raw.githubusercontent.com/NovusEdge/glowup-oxide/main/themes/oxide.json
/glowup pack https://raw.githubusercontent.com/NovusEdge/glowup-oxide/main/oxide.json
```

### The renderer plugin

This repo is also a Claude Code plugin that draws the parts a pack file cannot: a warp-dithered field that drifts through the docked pane's open rows, dithered 5-hour and weekly meters in place of the HP bar, and a numbered `░▒▓━━ 03 ━━━▓▒░` rule above each of your prompts. It answers only while the `oxide` pack is on and needs glowup 0.6.0 or later.

```
/plugin marketplace add NovusEdge/glowup-oxide
/plugin install glowup-oxide@glowup-oxide
```

The field runs on glowup's timer and holds still under `/glowup motion reduced`.

### Light variant

`oxide` works on any dark terminal. `oxide-paper` is the light inverse, ink on bone, and needs the terminal background set to `#ddd6c8`, because glowup colors text and never paints a background. In Konsole, `/glowup export konsole` writes a matching scheme.

```
/glowup pack https://raw.githubusercontent.com/NovusEdge/glowup-oxide/main/oxide-paper.json
```

## Palette

| Role | oxide | oxide-paper |
| --- | --- | --- |
| background | `#15110e` ink | `#ddd6c8` bone |
| text | `#e8dcc4` bone | `#17120f` ink |
| accent, borders | `#e0703a` red oxide | `#9a3a1c` red oxide |
| read | `#5b8cf0` riso blue | `#1652b0` riso blue |
| edit | `#c9973f` ochre | `#7a5518` ochre |
| shell, pass | `#9aa55a` olive | `#56602a` olive |
| agent | `#4fb3a5` teal | `#2a6b63` teal |
| fail | `#e2343c` brain red | `#a51d34` carmine |
