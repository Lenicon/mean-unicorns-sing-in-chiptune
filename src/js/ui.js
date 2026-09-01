let popScore=(pts, isClutch = false)=> {
    const floatScore = document.getElementById('floatScore');
    if (!floatScore) return;
    const pop = document.createElement('div');
    pop.className = 'score-pop' + (isClutch ? ' clutch-pop' : '');
    pop.textContent = '+' + pts;
    if (isClutch) pop.style.marginRight = (Math.random() * 20 - 10) + 'px';
    floatScore.appendChild(pop);
    setTimeout(() => pop.remove(), 800);
}
let screenshake=(d)=> {
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), d);
}
let flashMsg=(text, cls, revertTo)=> {
    msgEl.textContent = text;
    if (cls) msgEl.classList.add(cls);
    setTimeout(() => {
        if (cls) msgEl.classList.remove(cls);
        if (running) msgEl.textContent = revertTo;
    }, 650);
}

let initTabs=()=>{
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b === btn));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === 'tab-' + target));
            sfxButtonClick();
        });
    });
}
window.addEventListener('DOMContentLoaded', initTabs);