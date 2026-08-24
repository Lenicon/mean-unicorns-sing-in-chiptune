let STAGES = getSongPattern();

function popScore(pts, isClutch = false) {
    const floatScore = document.getElementById('floatScore');
    if (!floatScore) return;
    const pop = document.createElement('div');
    pop.className = 'score-pop' + (isClutch ? ' clutch-pop' : '');
    pop.textContent = '+' + pts;
    if (isClutch) pop.style.marginRight = (Math.random() * 20 - 10) + 'px';
    floatScore.appendChild(pop);
    setTimeout(() => pop.remove(), 800);
}
function buildGrid() {
    gridEl.innerHTML = '';
    cells = [];
    for (let r = 0; r < N; r++) {
        let row = [];
        for (let c = 0; c < N; c++) {
            const div = document.createElement('div');
            div.className = 'cell';
            const cd = document.createElement('span');
            cd.className = 'cd';
            div.appendChild(cd);
            gridEl.appendChild(div);
            row.push(div);
        }
        cells.push(row);
    }
    playerCanvas = document.createElement('canvas');
    playerCanvas.id = 'playerCanvas';
    playerCanvas.style.transition = 'left .1s, top .1s, transform .25s ease-out';
    gridEl.appendChild(playerCanvas);
    drawSprite(playerCanvas, GIRL_BMP, GIRL_PAL, PLAYER_PX);
    uniFlyCanvas = document.createElement('canvas');
    uniFlyCanvas.id = 'uniFly';
    gridEl.appendChild(uniFlyCanvas);
    drawSprite(uniFlyCanvas, UNI_BMP, UNI_PAL, UNI_PX);
    drawSprite(unicornCanvas, UNI_BMP, UNI_PAL, UNI_PX);
    heartsEl.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const h = document.createElement('span');
        h.className = 'heart';
        heartsEl.appendChild(h);
    }
    setupIntro();
}
function setupIntro() {
    hud.style.display = 'none';
    introDone = false;
    player = { r: 4, c: 2, facingLeft: false };
    unicornWrap.style.display = 'none';
    uniFlyCanvas.style.transition = 'none';
    uniFlyCanvas.style.opacity = '1';
    positionUniFlyAt(0, 2);
    void uniFlyCanvas.offsetWidth;
    uniFlyCanvas.style.transition = '';
    playerCanvas.style.transform = '';
    drawPlayer();
}
function setupGameplay() {
    introDone = true;
    player = { r: 2, c: 2, facingLeft: false };
    unicornWrap.style.display = '';
    drawSprite(unicornCanvas, UNI_BMP, UNI_PAL, UNI_PX);
    uniFlyCanvas.style.transition = 'none';
    uniFlyCanvas.style.opacity = '0';
    void uniFlyCanvas.offsetWidth;
    uniFlyCanvas.style.transition = '';
    playerCanvas.style.transform = '';
    drawPlayer();
}
function screenshake(d) {
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), d);
}
function positionUniFlyAt(r, c) {
    uniFlyCanvas.style.left = (PAD + c * (CELL + GAP) + (CELL - uniFlyCanvas.width) / 2) + 'px';
    uniFlyCanvas.style.top = (PAD + r * (CELL + GAP) + (CELL - uniFlyCanvas.height) / 2) + 'px';
}
function triggerIntroFlyOut() {
    introDone = true;
    launchGame();
    screenshake(400);
    uniFlyCanvas.style.left = UNI_DOCK_LEFT + 'px';
    uniFlyCanvas.style.top = UNI_DOCK_TOP + 'px';
    setTimeout(() => {
        uniFlyCanvas.style.opacity = '0';
        unicornWrap.style.display = '';
        drawUnicorn();
        hud.style.display = 'flex';
    }, 650);
}
function playOutro() {
    unicornWrap.style.display = 'none';
    uniFlyCanvas.style.transition = 'none';
    uniFlyCanvas.style.left = UNI_DOCK_LEFT + 'px';
    uniFlyCanvas.style.top = UNI_DOCK_TOP + 'px';
    uniFlyCanvas.style.opacity = '1';
    void uniFlyCanvas.offsetWidth;
    uniFlyCanvas.style.transition = '';
    positionUniFlyAt(1, 2);
    player.r = 2; player.c = 2; player.facingLeft = false;
    drawPlayer();
}
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
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}
function flashMsg(text, cls, revertTo) {
    msgEl.textContent = text;
    if (cls) msgEl.classList.add(cls);
    setTimeout(() => {
        if (cls) msgEl.classList.remove(cls);
        if (running) msgEl.textContent = revertTo;
    }, 650);
}
function elapsedSeconds() {
    return (Date.now() - startTime) / 1000;
}
function stageForTime(t) {
    let idx = 0;
    for (let i = 0; i < STAGES.length; i++) { if (t >= STAGES[i].start) idx = i; }
    return idx;
}
function clearCells() {
    cells.forEach(row => row.forEach(cell => {
        cell.classList.remove('fire', 'warn');
        cell.style.background = '';
        cell.querySelector('.cd').textContent = '';
    }));
}
function updateCellVisuals() {
    const elapsed = elapsedSeconds();
    const activeWarnings = new Map();
    pending.forEach(p => {
        const remSec = Math.max(0, p.fireTime - elapsed);
        p.cells.forEach(([r, c]) => {
            const key = `${r},${c}`;
            if (!activeWarnings.has(key) || remSec < activeWarnings.get(key)) {
                activeWarnings.set(key, remSec);
            }
        });
    });
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            const cell = cells[r][c];
            const key = `${r},${c}`;
            if (!cell.classList.contains('fire')) {
                if (activeWarnings.has(key)) {
                    const remSec = activeWarnings.get(key);
                    const displayCd = Math.ceil(remSec);
                    cell.classList.add('warn');
                    cell.querySelector('.cd').textContent = displayCd;
                    let color = '#ffd23f70';
                    if (remSec <= 1.2 && remSec > 0.6) color = '#ff9d0070';
                    if (remSec <= 0.6) color = '#ff004d70';
                    cell.style.background = `repeating-linear-gradient(45deg, ${color} 0 10px, #241a3d70 10px 20px)`;
                } else {
                    cell.classList.remove('warn');
                    cell.style.background = '';
                    cell.querySelector('.cd').textContent = '';
                }
            } else {
                cell.style.background = '';
            }
        }
    }
}
function checkLastSecondDodges() {
    const now = elapsedSeconds();
    pending.forEach(p => {
        if (p.lastSecond) return;
        const remaining = p.fireTime - now;
        const window = Math.min(1.0, (p.warnDuration || 1) * 0.2);
        if (remaining > 0 && remaining <= window) {
            if (p.cells.some(([r, c]) => player.r === r && player.c === c)) p.lastSecond = true;
        }
    });
}
function tick() {
    if (!running) return;
    const elapsed = elapsedSeconds();
    if (elapsed >= GAME_DURATION_SECONDS) { endGame(true); return; }
    const stageIdx = stageForTime(elapsed);
    if (stageIdx !== currentStageIdx) { currentStageIdx = stageIdx; stageBeatCounter = 0; }
    const stage = STAGES[stageIdx];
    const bpm = stage.bpm;
    stageNumEl.textContent = stageIdx + 1;
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
        pew();
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
}
function updateClock() {
    if (!running) return;
    timeValEl.textContent = Math.min(elapsedSeconds(), GAME_DURATION_SECONDS).toFixed(1);
    checkLastSecondDodges();
    updateCellVisuals();
}
function endGame(survived) {
    clearCells();
    canMove = false;
    running = false;
    clearTimeout(timer);
    clearInterval(clockTimer);
    timeValEl.textContent = Math.min(elapsedSeconds(), GAME_DURATION_SECONDS).toFixed(1);
    msgEl.classList.remove('clutch');
    msgEl.textContent = survived ? 'Unicorn Likes You!' : 'Game Over';
    restartBtn.style.display = 'inline-block';
    stopMusic();
    if (survived) playOutro();
    else { playerCanvas.style.transform = 'rotate(-90deg)'; }
}
function resetGame() {
    canMove = true;
    clearTimeout(timer);
    clearInterval(clockTimer);
    pending = [];
    score = 0;
    lives = 3;
    currentStageIdx = -1;
    stageBeatCounter = 0;
    running = false;
    scoreEl.textContent = '0';
    timeValEl.textContent = '0.0';
    stageNumEl.textContent = '1';
    msgEl.classList.remove('clutch');
    msgEl.textContent = DEFAULT_MSG;
    restartBtn.style.display = 'none';
    clearCells();
    heartsEl.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const h = document.createElement('span');
        h.className = 'heart';
        heartsEl.appendChild(h);
    }
    setupGameplay();
    stopMusic();
    launchGame();
}
function move(dr, dc) {
    if (!gameStarted || !canMove) return;
    const nr = player.r + dr, nc = player.c + dc;
    if (nr < 0 || nr >= N || nc < 0 || nc >= N) return;
    player.r = nr; player.c = nc;
    if (dc < 0) player.facingLeft = true;
    if (dc > 0) player.facingLeft = false;
    drawPlayer();
    if (!introDone && [0, 1].includes(player.r) && [1, 2, 3].includes(player.c)) { triggerIntroFlyOut(); }
}
function hideMenu() {
    if (gameStarted) return;
    gameStarted = true;
    initAudio();
    startOverlay.style.display = 'none';
}
function showMenu(){
    if (!gameStarted) return;
    gameStarted = false;
    startOverlay.style.display = 'none';
}

function launchGame() {
    if (running) return;
    running = true;
    initAudio();
    startTime = Date.now();
    startMusic();
    clockTimer = setInterval(updateClock, 100);
    timer = setTimeout(tick, 60000 / STAGES[0].bpm);
}
startBtn.addEventListener('click', hideMenu);
restartBtn.addEventListener('click', resetGame);
buildGrid();