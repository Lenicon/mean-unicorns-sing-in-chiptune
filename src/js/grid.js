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
    canMove = true;
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