down = {};
M = { KeyW:38, KeyZ:38, ArrowUp:38, KeyA:37, KeyQ:37, ArrowLeft:37, KeyS:40, ArrowDown:40, KeyD:39, ArrowRight:39 };

document.onkeydown = e => {
    if (e.code === 'Enter' || e.code === 'Space') {
        e.preventDefault();
        if (!gameStarted) hideMenu();
        else if (!running) resetGame();
        return;
    }
    const k = M[e.code];
    if (k) {
        e.preventDefault();
        down[k] = 1;
        if (!gameStarted) hideMenu();
        if (k === 38) move(-1, 0);      // Up
        else if (k === 40) move(1, 0);  // Down
        else if (k === 37) move(0, -1); // Left
        else if (k === 39) move(0, 1);  // Right
    }
};

document.onkeyup = e => { if (M[e.code]) down[M[e.code]] = 0; };
document.onblur = () => down = {};