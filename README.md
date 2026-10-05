# oxide

A [glowup](https://github.com/NovusEdge/glowup) pack: bone text and red oxide on warm ink, with the dotted `orb-states` spinner standing in for a dither shader. Tool colors are the riso blue, ochre, olive and goggle teal from the reference images, tuned until each one reads at 3:1 or better on the background.

## Install

```
/glowup pack https://raw.githubusercontent.com/NovusEdge/glowup-oxide/main/oxide.json
```

`oxide` works on any dark terminal. `oxide-paper` is the same look inverted, ink on bone, and needs the terminal background set to `#ddd6c8`, because glowup colors text and never paints a background. In Konsole, `/glowup export konsole` writes a matching scheme.

```
/glowup pack https://raw.githubusercontent.com/NovusEdge/glowup-oxide/main/oxide-paper.json
```

## Palette

| Role | oxide | oxide-paper |
| --- | --- | --- |
| background | `#15110e` ink | `#ddd6c8` bone |
| text | `#ddd6c8` bone | `#17120f` ink |
| accent | `#d0573a` red oxide | `#9a3a1c` red oxide |
| read | `#6a95e0` riso blue | `#1652b0` riso blue |
| edit | `#c9973f` ochre | `#7a5518` ochre |
| shell, pass | `#9aa55a` olive | `#56602a` olive |
| agent | `#4fb3a5` teal | `#2a6b63` teal |
| fail | `#e0485f` carmine | `#a51d34` carmine |
