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
At the `<script>` section, you will find the following:

```js
  const WARN_BEATS = 2;
  const MUSIC_URL = '';
  const STAGES = [
    { start: 0, bpm: 85,  patterns: [ ... ] },   // stage 1 - easy
    { start: 40, bpm: 105, patterns: [ ... ] },   // stage 2 - medium
    { start: 100, bpm: 130, patterns: [ ... ] },   // stage 3 - hard
  ];
```

- **WARN_BEATS:** how many beats of warning (the countdown number)
  before the rainbow fires. Increase for easier gameplay,
  lower it (minimum 1) for a harder one.
- **STAGES:** add, remove, or reorder stages freely. Each stage has its
  own bpm and its own "patterns" list, played in order. Match each
  stage's bpm to that section of your song so the beat lines up.

  Pattern types you can use inside a stage's "patterns" array:

  ```js
    {t:'row',    i:0-4}             // whole row
    {t:'col',    i:0-4}             // whole column
    {t:'cross',  r:0-4, c:0-4}      // a row + a column
    {t:'single', r:0-4, c:0-4}      // one cell
    {t:'corners'}                   // all four corners
    {t:'center'}                    // just the center cell
    {t:'checker', odd:true/false}   // checkerboard cells
  ```

  **Grid coordinates:** r and c both go from 0 (top/left) to 4 (bottom/right).


## HOW TO ADD YOUR OWN MUSIC
1. Drop an mp3 or ogg file in the same folder as index.html.
2. Set `MUSIC_URL` to that filename, e.g.: `const MUSIC_URL = 'music.mp3';`
3. Set each stage's bpm to match the actual tempo of that section of your song.

I also added a small BEEP sound with NO sound file, cool right?

## THE PIXEL ART
The girl and unicorn are drawn from tiny bitmaps, also near the top
of the `<script>` section:

```js
  const MAN_BMP = ["...KKK..","...BSS..","..BBSS..","..BBKB..","...KKK..","..KKKKK.","...S.S.."];
  const MAN_PAL = {K:'#d77bba',S:'#ffdebf',B:'#fbc036'};
  const UNI_BMP = ["H........","HH...R..",".HPP.OO.",".SSP..YY",".SSPPCGG","..SSSPC.","..SSSS..","..S..S.."];
  const UNI_PAL = {H:"#f5d151",P:"#d77bba",S:"#ffe1f6",R:'#ff004d',O:'#ff9d00',Y:'#fff700',G:'#3dff5c',C:'#00e5ff'};
```

Each string in *_BMP is one row of pixels, each character is one
pixel. "." means transparent, any other letter looks up a color in
the matching *_PAL object. Change a letter's color in the palette,
or edit the bitmap strings (keep every row the same length) to
redesign the sprite. They're drawn onto <canvas> elements at load
time, so a saved file just needs a page refresh to see changes. (genius ik)

