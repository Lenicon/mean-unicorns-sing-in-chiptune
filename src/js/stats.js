// Persistent settings & per-song stats, all namespaced under STORAGE_PREFIX.
const STORAGE_PREFIX = 'Mean-Unicorns-Sing-In-Chiptune_';
const VOLUME_KEY = STORAGE_PREFIX + 'volume';

function statsKeyFor(songName, kind) {
    const safe = String(songName).trim().toLowerCase().replace(/\s+/g, '_');
    return STORAGE_PREFIX + kind + '_' + safe;
}

function getHighScore(songName) {
    const v = localStorage.getItem(statsKeyFor(songName, 'highscore'));
    const n = v !== null ? parseInt(v, 10) : 0;
    return Number.isFinite(n) ? n : 0;
}

function setHighScoreIfBetter(songName, score) {
    const current = getHighScore(songName);
    if (score > current) {
        localStorage.setItem(statsKeyFor(songName, 'highscore'), String(score));
        return true;
    }
    return false;
}

function getLastScore(songName) {
    const v = localStorage.getItem(statsKeyFor(songName, 'lastscore'));
    const n = v !== null ? parseInt(v, 10) : 0;
    return Number.isFinite(n) ? n : 0;
}

function setLastScore(songName, score) {
    localStorage.setItem(statsKeyFor(songName, 'lastscore'), String(score));
}

function getStoredVolume() {
    const v = localStorage.getItem(VOLUME_KEY);
    const n = v !== null ? parseFloat(v) : 0.7;
    return Number.isFinite(n) ? Math.min(1, Math.max(0, n)) : 0.7;
}

function setStoredVolume(v) {
    localStorage.setItem(VOLUME_KEY, String(Math.min(1, Math.max(0, v))));
}

function formatTime(totalSeconds) {
    const s = Math.max(0, Math.floor(totalSeconds || 0));
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