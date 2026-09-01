const STORAGE_PREFIX = 'Mean-Unicorns-Sing-In-Chiptune_';
const VOLUME_KEY = STORAGE_PREFIX + 'volume';

let statsKeyFor = (s, k) => STORAGE_PREFIX + k + '_' + String(s).trim().toLowerCase().replace(/\s+/g, '_');

let getScore=(s, k)=> {
    const v = localStorage.getItem(statsKeyFor(s, k));
    const n = v !== null ? parseInt(v, 10) : 0;
    return Number.isFinite(n) ? n : 0;
}

let getHighScore = (s) => getScore(s, 'highscore');
let getLastScore = (s) => getScore(s, 'lastscore');

let setScore=(s, sc)=> {
    const current = getHighScore(s);
    localStorage.setItem(statsKeyFor(s, 'lastscore'), String(sc));
    if (sc > current) {
        localStorage.setItem(statsKeyFor(s, 'highscore'), String(sc));
        return true;
    }
    return false;
}


function getStoredVolume() {
    const v = localStorage.getItem(VOLUME_KEY);
    const n = v !== null ? parseFloat(v) : 0.7;
    return Number.isFinite(n) ? Math.min(1, Math.max(0, n)) : 0.7;
}

let setStoredVolume = (v) => localStorage.setItem(VOLUME_KEY, String(Math.min(1, Math.max(0, v))));

function formatTime(ts) {
    const s = Math.max(0, Math.floor(ts || 0));
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return m + ':' + String(sec).padStart(2, '0');
}

function updateStatsDisplay() {
    if (typeof getSongName !== 'function') return;
    const name = getSongName();
    if (statsLength) statsLength.textContent = formatTime(getSongTime());
    if (statsLastScore) statsLastScore.textContent = getLastScore(name);
    if (statsHighScore) statsHighScore.textContent = getHighScore(name);
}