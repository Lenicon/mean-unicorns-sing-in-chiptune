function isTouchDevice() {
    return ('ontouchstart' in window) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
        (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
}

function setTouchControlsActive(active) {
    document.body.classList.toggle('in-game', !!active);
}

function initTouchControls() {
    if (isTouchDevice()) document.body.classList.add('touch-device');

    const bindings = [
        ['tcUp', -1, 0],
        ['tcDown', 1, 0],
        ['tcLeft', 0, -1],
        ['tcRight', 0, 1],
    ];

    bindings.forEach(([id, dr, dc]) => {
        const btn = document.getElementById(id);
        if (!btn) return;
        btn.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            move(dr, dc);
        });
        btn.addEventListener('contextmenu', (e) => e.preventDefault());
    });
}

window.addEventListener('DOMContentLoaded', initTouchControls);