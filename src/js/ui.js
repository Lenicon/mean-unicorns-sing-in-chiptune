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
function screenshake(d) {
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), d);
}
function flashMsg(text, cls, revertTo) {
    msgEl.textContent = text;
    if (cls) msgEl.classList.add(cls);
    setTimeout(() => {
        if (cls) msgEl.classList.remove(cls);
        if (running) msgEl.textContent = revertTo;
    }, 650);
}