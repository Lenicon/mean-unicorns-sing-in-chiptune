Here is the updated README with the `stages.js` separation reflected:

# Mean Unicorns Sing In Chiptune (M.U.S.I.C.)
A rhythm game where you dodge a mean unicorn's rainbow attacks for **js13kGames 2026**!

## CREDITS
- **Music:** [Tampered by HeXXel](https://pixabay.com/music/video-games-tampered-532260/)
- **Everything:** [Len.icon](https://lenicondev.web.app)


## HOW TO PLAY
- Open index.html in any browser
- Move with arrow keys or WASD (no diagonals).
- Squares that are about to be hit flash yellow with a countdown
  number on them (2, then 1). When the number runs out, that
  pattern turns into a rainbow laser for one beat. Get off those
  cells before then. The rainbow clears again shortly after, before the laser of course.
- 3 hearts. Survive the whole song!!!
- The song is split into stages that get progressively harder.


## HOW TO MODIFY (hello github viewers :D)

### Stages Configuration (`stages.js`)

Stages are stored in `stages.js` (loaded via `<script src="./stages.js"></script>` in `index.html`) to allow playing directly from local files (`file://`) without CORS errors:

```js
// stages.js
const STAGES = [
  { start: 0, bpm: 65, patterns: [ ... ] },   // stage 1 - easy
  { start: 6, bpm: 65, patterns: [ ... ] },   // stage 2 - medium
  { start: 30, bpm: 32.5, patterns: [ ... ] } // stage 3 - hard
];

```

In here you can add, remove, or reorder stages freely. Each stage has its
own `bpm` and its own `patterns` list, played in order. Match each
stage's `bpm` to that section of your song so the beat lines up.

Pattern types you can use inside a stage's `patterns` array:

```js
  { t: "row", i: [0] }              // whole row (index 0-4)
  { t: "col", i: [2] }              // whole column (index 0-4)
  { t: "area", r: [1,2], c: [2] }     // from here to there
  { t: "corners" }                  // all four corners
  { t: "center" }                   // just the center cell
  { t: "checker", odd: true/false } // checkerboard cells

```

**Grid coordinates:** `r` (row) and `c` (column) both go from 0 (top/left) to 4 (bottom/right).

## HOW TO ADD YOUR OWN MUSIC

1. Drop an mp3 or ogg file in the same folder as `index.html`.
2. Set `MUSIC_URL` in `index.html` to that filename, e.g.: `const MUSIC_URL = 'music.mp3';`
3. Set each stage's `bpm` in `stages.js` to match the actual tempo of that section of your song.

I also created a small BEEP sound with NO sound file, cool right?

## THE PIXEL ART

The girl and unicorn are drawn from tiny bitmaps, also near the top
of the `<script>` section in `index.html`:

```js
  const GIRL_BMP = ["...KKK..","...BSS..","..BBSS..","..BBKB..","...KKK..","..KKKKK.","...S.S.."];
  const GIRL_PAL = {K:'#d77bba',S:'#ffdebf',B:'#fbc036'};
  const UNI_BMP = ["H........","HH...R..",".HPP.OO.",".SSP..YY",".SSPPCGG","..SSSPC.","..SSSS..","..S..S.."];
  const UNI_PAL = {H:"#f5d151",P:"#d77bba",S:"#ffe1f6",R:'#ff004d',O:'#ff9d00',Y:'#fff700',G:'#3dff5c',C:'#00e5ff'};

```

Each string in `*_BMP` is one row of pixels, each character is one
pixel. `"."` means transparent, any other letter looks up a color in
the matching `*_PAL` object. Change a letter's color in the palette,
or edit the bitmap strings (keep every row the same length) to
redesign the sprite. They're drawn onto `<canvas>` elements at load
time, so a saved file just needs a page refresh to see changes. (genius ik)
