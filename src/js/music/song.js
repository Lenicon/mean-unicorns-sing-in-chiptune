const SONGS = [songOne];
currentSongIdx = 0;
const setSong = (idx) => currentSongIdx = idx;
const getSong = () => SONGS[currentSongIdx];
const getSongName = () => getSong()[0];
const getSongPattern = () => getSong()[1];
const getSongMusic = () => getSong()[2];