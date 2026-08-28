SONGS = [songTwo, songOne, songThree, songFour, songFive, songSix];
currentSongIdx = 0;
const setSong = (idx) => {
    currentSongIdx = (idx + SONGS.length) % SONGS.length;
    if (typeof STAGES !== 'undefined' && typeof SECTIONS !== 'undefined') {
        STAGES = getSongPattern();
        SECTIONS = getSongMusic();
        GAME_DURATION_SECONDS = getSongTime();
        BAR = (60 / getSongBPM()) * 4;
        STEP_DUR = BAR / 16;
        WARN_BEATS = getSongWarn() ?? 1;

    }
    updateSongDisplay();
};

const nextSong = () => setSong(currentSongIdx + 1);
const prevSong = () => setSong(currentSongIdx - 1);

const getSong = () => SONGS[currentSongIdx];
const getSongName = () => getSong()[0].name;
const getSongTime = () => getSong()[0].time;
const getSongBPM = () => getSong()[0].bpm;
const getSongWarn = () => getSong()[0].warn;
const getSongPattern = () => getSong()[1];
const getSongMusic = () => getSong()[2];

function updateSongDisplay() {
    if (songTitle && SONGS[currentSongIdx]) {
        songTitle.textContent = getSongName();
        startMusic();
    }
}

function initSongPicker() {


    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    prevBtn.addEventListener('click', sfxButtonClick);
    nextBtn.addEventListener('click', sfxButtonClick);
    prevBtn.addEventListener('hover', sfxButtonHover);
    nextBtn.addEventListener('hover', sfxButtonHover);

    updateSongDisplay();
}

window.addEventListener('DOMContentLoaded', initSongPicker);

function keyToPattern(p) {
    const list = [];
    const toArr = (val) => Array.isArray(val) ? val : (val !== undefined ? [val] : []);
    if (p.t === 'row') { const rows = toArr(p.i ?? p.r); rows.forEach(r => { for (let c = 0; c < N; c++) list.push([r, c]); }); }
    else if (p.t === 'col') { const cols = toArr(p.i ?? p.c); cols.forEach(c => { for (let r = 0; r < N; r++) list.push([r, c]); }); }
    else if (p.t === 'cross') { const rows = toArr(p.r); const cols = toArr(p.c); rows.forEach(r => { for (let c = 0; c < N; c++) list.push([r, c]); }); cols.forEach(c => { for (let r = 0; r < N; r++) list.push([r, c]); }); }
    else if (p.t === 'area') { const rows = toArr(p.r); const cols = toArr(p.c); rows.forEach(r => { cols.forEach(c => { list.push([r, c]); }) }); }
    else if (p.t === 'corners') { list.push([0, 0], [0, 4], [4, 0], [4, 4]); }
    else if (p.t === 'center') { list.push([2, 2]); }
    else if (p.t === 'checker') { for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) { if (((r + c) % 2 === 0) === !!p.odd) list.push([r, c]); } }
    else if (p.t === 'dots') { const cells = toArr(p.i); for (let c = 0; c < cells.length; c++) { list.push([Math.floor(cells[c] / N), Math.floor(cells[c] % N)]) } }
    else if (p.t === 'random') { list.push(...keyToPattern({ t: "dots", i: Array.from({ length: 25 }, (_, i) => i).sort(() => Math.random() - 0.5).slice(0, p.i) })); }
    else if (p.t === 'pos') { list.push([player.r, player.c]); }
    return list;
}