down = {};
M = { KeyW:38, KeyZ:38, ArrowUp:38, KeyA:37, KeyQ:37, ArrowLeft:37, KeyS:40, ArrowDown:40, KeyD:39, ArrowRight:39 };

document.onkeydown = e => {
    const k = M[e.code];
    if (k) {
        e.preventDefault();
        down[k] = 1;

        if (!gameStarted) {
            if (k==37) prevSong();
            else if (k == 39) nextSong();
        }
        else {
            if (k === 37) move(0, -1);          // Left
            else if (k === 38) move(-1, 0);     // Up
            else if (k === 39) move(0, 1);      // Right
            else if (k === 40) move(1, 0);      // Down
        }
    }
    if (e.code === 'KeyM'){
        e.preventDefault();
        returnToMenu();
        return;
    }
    if (e.code === 'Enter') {
        e.preventDefault();
        if (!gameStarted) hideMenu();
        else resetGame();
        return;
    }
};

document.onkeyup = e => { if (M[e.code]) down[M[e.code]] = 0; };
document.onblur = () => down = {};