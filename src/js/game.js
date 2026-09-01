STAGES = getSongPattern();

let elapsedSeconds = () => (Date.now() - startTime) / 1000;
let stopTimers = () => { clearTimeout(timer); clearInterval(clockTimer); };
let setEndButtons = (show) => {
    restartBtn.style.display = show ? 'inline-block' : 'none';
    menuBtn.style.display = show ? 'inline-block' : 'none';
};
let stageForTime = (t) => {
    let idx = 0;
    for (let i = 0; i < STAGES.length; i++) { if (t >= STAGES[i].start) idx = i; }
    return idx;
};
let clearCells = () => {
    cells.forEach(row => row.forEach(cell => {
        cell.classList.remove('fire', 'warn');
        cell.style.background = '';
        cell.querySelector('.cd').textContent = '';
    }));
};
let checkLastSecondDodges = () => {
    const now = elapsedSeconds();
    pending.forEach(p => {
        if (p.lastSecond) return;
        const remaining = p.fireTime - now;
        const window = Math.min(1.0, (p.warnDuration || 1) * 0.2);
        if (remaining > 0 && remaining <= window) {
            if (p.cells.some(([r, c]) => player.r === r && player.c === c)) p.lastSecond = true;
        }
    });
};
let tick = () => {
    if (!running) return;
    const elapsed = elapsedSeconds();
    if (elapsed >= GAME_DURATION_SECONDS) { endGame(true); return; }
    const stageIdx = stageForTime(elapsed);
    if (stageIdx !== currentStageIdx) { currentStageIdx = stageIdx; stageBeatCounter = 0; }
    const stage = STAGES[stageIdx];
    const bpm = stage.bpm;
    if (!stage.patterns || stage.patterns.length === 0) { clearCells(); timer = setTimeout(tick, 60000 / bpm); return; }
    const pattern = stage.patterns[stageBeatCounter % stage.patterns.length];
    stageBeatCounter++;
    checkLastSecondDodges();
    let firingGroups = [];
    pending = pending.filter(p => {
        const remaining = p.fireTime - elapsed;
        if (remaining <= 0.05) {
            firingGroups.push(p);
            return false;
        }
        return true;
    });
    let hit = false;
    let clutch = false;
    firingGroups.forEach(group => {
        let groupHit = false;
        group.cells.forEach(([r, c]) => {
            const cell = cells[r][c];
            cell.classList.remove('warn');
            cell.style.background = '';
            cell.querySelector('.cd').textContent = '';
            cell.classList.add('fire');
            if (player.r === r && player.c === c) groupHit = true;
        });
        if (groupHit) {
            screenshake(200);
            hit = true;
        }
        else {
            const pts = (10 + (5 * (lives - 1)));
            score += pts;
            popScore(pts);
            if (group.lastSecond) {
                score += CLUTCH_BONUS; clutch = true;
                setTimeout(() => popScore(CLUTCH_BONUS, true), 150);
            }
        }
    });
    if (firingGroups.length) {
        sfxPew();
        unicornWrap.classList.add('blast');
        setTimeout(() => unicornWrap.classList.remove('blast'), 150);
        const allFiring = firingGroups.flatMap(g => g.cells);
        const clearDelay = Math.min(300, (60000 / bpm) * 0.5);
        setTimeout(() => {
            allFiring.forEach(([r, c]) => {
                cells[r][c].classList.remove('fire');
                cells[r][c].style.background = '';
            });
            updateCellVisuals();
        }, clearDelay);
    }
    scoreEl.textContent = score;
    if (hit) {
        lives--;
        const hearts = [...heartsEl.children];
        hearts.forEach((h, i) => h.classList.toggle('lost', i >= lives));
        if (lives <= 0) { endGame(false); return; }
    } else if (clutch) {
        flashMsg('+' + CLUTCH_BONUS + ' CLUTCH DODGE!', 'clutch', DEFAULT_MSG);
    }
    const warnDurationSeconds = WARN_BEATS * (60 / bpm);
    pending.push({
        cells: keyToPattern(pattern),
        fireTime: elapsed + warnDurationSeconds,
        warnDuration: warnDurationSeconds,
        lastSecond: false
    });
    updateCellVisuals();
    drawPlayer();
    timer = setTimeout(tick, 60000 / bpm);
};
let updateClock = () => {
    if (!running) return;
    timeValEl.textContent = Math.min(elapsedSeconds(), GAME_DURATION_SECONDS).toFixed(1);
    checkLastSecondDodges();
    updateCellVisuals();
};
let move = (dr, dc) => {
    if (!gameStarted || !canMove) return;
    const nr = player.r + dr, nc = player.c + dc;
    if (nr < 0 || nr >= N || nc < 0 || nc >= N) return;
    player.r = nr; player.c = nc;
    if (dc < 0) player.facingLeft = true;
    if (dc > 0) player.facingLeft = false;
    drawPlayer();
    if (!introDone && [0, 1].includes(player.r) && [1, 2, 3].includes(player.c)) triggerIntroFlyOut();
};
let endGame = (survived) => {
    clearCells();
    canMove = false;
    running = false;
    stopTimers();
    timeValEl.textContent = Math.min(elapsedSeconds(), GAME_DURATION_SECONDS).toFixed(1);
    msgEl.classList.remove('clutch');
    msgEl.textContent = survived ? 'Unicorn Likes You!' : 'Game Over';
    setEndButtons(true);
    stopMusic();
    setTouchControlsActive(false);

    const songName = getSongName();
    const isNewHigh = setScore(songName, score);
    if (highScoreVal) highScoreVal.textContent = getHighScore(songName);
    updateStatsDisplay();
    if (isNewHigh) {
        const baseMsg = msgEl.textContent;
        flashMsg('NEW HIGH SCORE!', 'clutch', baseMsg);
    }

    if (survived) playOutro();
    else { playerCanvas.style.transform = 'rotate(-90deg)'; stopAllAudio(); }
};
let resetAll = () => {
    hud.style.display = 'flex';
    canMove = true;
    stopTimers();
    pending = [];
    score = 0;
    lives = 3;
    currentStageIdx = -1;
    stageBeatCounter = 0;
    running = false;
    scoreEl.textContent = '0';
    timeValEl.textContent = '0.0';
    if (highScoreVal) highScoreVal.textContent = getHighScore(getSongName());
    msgEl.classList.remove('clutch');
    msgEl.textContent = DEFAULT_MSG;
    setEndButtons(false);
    clearCells();
    resetHearts();
};
let resetGame = () => {
    sfxButtonClick();
    resetAll();
    setupGameplay();
    stopAllAudio();
    launchGame();
    setTouchControlsActive(true);
};
let launchGame = () => {
    if (running) return;
    running = true;
    initAudio();
    startTime = Date.now();
    startMusic();
    clockTimer = setInterval(updateClock, 100);
    timer = setTimeout(tick, 60000 / STAGES[0].bpm);
};
let hideMenu = () => {
    if (gameStarted) return;
    sfxPlay();
    setSong(currentSongIdx);
    hudSongTitle.textContent = getSongName();
    initAudio();
    resetAll();
    setupIntro();
    gameStarted = true;
    startOverlay.style.display = 'none';
    stopAllAudio();
    setTouchControlsActive(true);
};
let returnToMenu = () => {
    running = false;
    gameStarted = false;
    canMove = false;
    stopTimers();
    stopAllAudio();
    clearCells();
    setupIntro();
    sfxButtonClick();
    startOverlay.style.display = 'flex';
    setEndButtons(false);
    startMusic();
    updatePreviewButton();
    updateStatsDisplay();
    setTouchControlsActive(false);
};
[[startBtn, hideMenu], [restartBtn, resetGame], [menuBtn, returnToMenu]].forEach(([btn, fn]) => btn.addEventListener('click', fn));
buildGrid();