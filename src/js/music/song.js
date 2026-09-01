SONGS = [songOne,songTwo,songFive,songSix];
currentSongIdx = 0;
let setSong=(idx)=>{
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
let nextSong=()=>setSong(currentSongIdx + 1);
let prevSong =()=>setSong(currentSongIdx - 1);
let getSong=()=>SONGS[currentSongIdx];
let getSongName=()=> getSong()[0].name;
let getSongTime=()=> getSong()[0].time;
let getSongBPM=()=> getSong()[0].bpm;
let getSongWarn=()=> getSong()[0].warn;
let getSongPattern=()=> getSong()[1];
let getSongMusic=()=> getSong()[2];

let updateSongDisplay=()=>{
    if (songTitle && SONGS[currentSongIdx]) {
        songTitle.textContent = getSongName();
        const wasPlaying = musicOn;
        resetMusicPosition();
        if (wasPlaying) {
            musicOn = true;
            scheduler();
        }
        updatePreviewButton();
        updateStatsDisplay();
    }
}

let updatePreviewButton=()=> {if (previewPlayBtn) previewPlayBtn.innerHTML = musicOn ? '&#10074;&#10074;' : '&#9654;';}

let togglePreview=()=>{
    initAudio();
    if (musicOn) stopMusic();
    else resumeMusic();
    updatePreviewButton();
}

let initSongPicker=()=>{
    setSong(0);
    nextBtn.addEventListener('click', nextSong);
    nextBtn.addEventListener('click', sfxButtonClick);
    prevBtn.addEventListener('click', prevSong);
    prevBtn.addEventListener('click', sfxButtonClick);
    if (previewPlayBtn) previewPlayBtn.addEventListener('click', togglePreview);
    songTitle.textContent = getSongName();
    startMusic();
    updatePreviewButton();
    updateStatsDisplay();
}
window.addEventListener('DOMContentLoaded', initSongPicker);
let keyToPattern=(p)=>{
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