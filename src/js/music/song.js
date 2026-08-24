const SONGS = [songOne];
currentSongIdx = 0;
const setSong = (idx) => currentSongIdx = idx;
const getSong = () => SONGS[currentSongIdx];
const getSongName = () => getSong()[0];
const getSongPattern = () => getSong()[1];
const getSongMusic = () => getSong()[2];
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