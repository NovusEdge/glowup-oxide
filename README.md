# oxide

A [glowup](https://github.com/NovusEdge/glowup) pack: bone text and red oxide on warm ink. A simplex-dithered field drifts through the docked pane's open rows, the 5-hour and weekly usage show as dithered bars, and a numbered `░▒▓━━ 03 ━━━▓▒░` rule sits above each of your prompts. Every pane frame and card border is oxide, tool rows use a dither ramp (`░ ▒ ▓ █`), and the dotted `orb-states` spinner cycles words like "annealing" and "etching". Tool colors are the riso blue, ochre, olive and goggle teal from the reference images, tuned until each one reads at 3:1 or better on the background.

## Install

Needs glowup 0.8.1 or later, which draws the field, meters and dividers the pack switches on. The glyphs, hearts and spinner words live in a theme file, which a pack cannot carry, so install the theme first:

```
/glowup theme add https://raw.githubusercontent.com/NovusEdge/glowup-oxide/main/themes/oxide.json
/glowup pack https://raw.githubusercontent.com/NovusEdge/glowup-oxide/main/oxide.json
```

Both land in `~/.claude/glowup/`. The field shows while the pane is docked and holds still under `/glowup motion reduced`.

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
