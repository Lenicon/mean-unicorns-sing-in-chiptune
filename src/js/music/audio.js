let SECTIONS = getSongMusic();

let ac;
const ac_ = () => ac || (ac = new (window.AudioContext || window.webkitAudioContext)());
let noiseBuf;
const noiseBuf_ = () => {
    if (noiseBuf) return noiseBuf;
    const c = ac_(), len = c.sampleRate * 0.3;
    noiseBuf = c.createBuffer(1, len, c.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return noiseBuf;
}
let comp, shaperNode, cleanGain;
const ensureBus_ = () => {
    if (comp) return;
    const c = ac_();
    comp = c.createDynamicsCompressor();
    comp.threshold.value = -22; comp.knee.value = 4; comp.ratio.value = 12; comp.attack.value = 0.002; comp.release.value = 0.1;
    comp.connect(c.destination);
    shaperNode = c.createWaveShaper();
    const n = 256, curve = new Float32Array(n), amt = 7;
    for (let i = 0; i < n; i++) { const x = i * 2 / n - 1; curve[i] = (1 + amt) * x / (1 + amt * Math.abs(x)); }
    shaperNode.curve = curve; shaperNode.oversample = '2x';
    shaperNode.connect(comp);
    cleanGain = c.createGain(); cleanGain.gain.value = 1;
    cleanGain.connect(comp);
}
function bus_() { ensureBus_(); return shaperNode; }
function busClean_() { ensureBus_(); return cleanGain; }
function pew() {
    const c = ac_(), t = c.currentTime;
    const o = c.createOscillator(), g = c.createGain();
    o.type = 'square';
    o.frequency.setValueAtTime(900, t);
    o.frequency.exponentialRampToValueAtTime(120, t + 0.12);
    g.gain.setValueAtTime(0.15, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.13);
    o.connect(g); g.connect(c.destination);
    o.start(t); o.stop(t + 0.14);
}
function tone(freq, t, dur, type, vol) {
    if (!freq) return;
    const c = ac_(), o = c.createOscillator(), g = c.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(bus_());
    o.start(t); o.stop(t + dur + 0.02);
}
function kick(t, vol) {
    const c = ac_(), o = c.createOscillator(), g = c.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(165, t);
    o.frequency.exponentialRampToValueAtTime(38, t + 0.11);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.17);
    o.connect(g); g.connect(bus_());
    o.start(t); o.stop(t + 0.18);
}
function hat(t, vol) {
    const c = ac_(), src = c.createBufferSource(), g = c.createGain(), f = c.createBiquadFilter();
    src.buffer = noiseBuf_();
    f.type = 'highpass'; f.frequency.value = 6000;
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);
    src.connect(f); f.connect(g); g.connect(bus_());
    src.start(t); src.stop(t + 0.05);
}
function pad(freqs, t, dur, vol) {
    const c = ac_();
    freqs.forEach(f => {
        if (!f) return;
        const o1 = c.createOscillator(), o2 = c.createOscillator(), g = c.createGain(), filt = c.createBiquadFilter();
        o1.type = 'sawtooth'; o1.frequency.value = f; o1.detune.value = -6;
        o2.type = 'sine'; o2.frequency.value = f * 2; o2.detune.value = 5;
        filt.type = 'lowpass'; filt.frequency.value = 1800; filt.Q.value = 0.6;
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(vol, t + Math.min(1.2, dur * 0.3));
        g.gain.setValueAtTime(vol, t + dur * 0.7);
        g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        o1.connect(filt); o2.connect(filt); filt.connect(g); g.connect(busClean_());
        o1.start(t); o1.stop(t + dur + 0.1);
        o2.start(t); o2.stop(t + dur + 0.1);
    });
}
function stab(freqs, t, vol) {
    const c = ac_();
    freqs.forEach(f => {
        if (!f) return;
        const o = c.createOscillator(), g = c.createGain();
        o.type = 'sawtooth'; o.frequency.value = f;
        g.gain.setValueAtTime(vol, t);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);
        o.connect(g); g.connect(bus_());
        o.start(t); o.stop(t + 0.5);
    });
}
function bell(freq, t, vol) {
    const c = ac_();
    const o1 = c.createOscillator(), o2 = c.createOscillator(), g = c.createGain(), g2 = c.createGain();
    o1.type = 'sine'; o1.frequency.value = freq;
    o2.type = 'sine'; o2.frequency.value = freq * 2.41; o2.detune.value = 3;
    g2.gain.value = 0.35;
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);
    o1.connect(g); o2.connect(g2); g2.connect(g); g.connect(busClean_());
    o1.start(t); o1.stop(t + 1.5);
    o2.start(t); o2.stop(t + 1.5);
}
function startRiser(sec) {
    const c = ac_(), t = c.currentTime;
    const o = c.createOscillator(), g = c.createGain(), f = c.createBiquadFilter();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(60, t);
    o.frequency.exponentialRampToValueAtTime(500, t + sec.dur);
    f.type = 'lowpass';
    f.frequency.setValueAtTime(200, t);
    f.frequency.exponentialRampToValueAtTime(4000, t + sec.dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.03, t + sec.dur * 0.9);
    g.gain.exponentialRampToValueAtTime(0.0001, t + sec.dur);
    o.connect(f); f.connect(g); g.connect(c.destination);
    o.start(t); o.stop(t + sec.dur + 0.1);
    riserOsc = o;
}

function F(n) { return n == null ? 0 : 440 * Math.pow(2, n / 12); }

let musicOn = false, musicTimer = null, stepIdx = 0, elapsedAtSection = 0, sectionIdx = 0, riserOsc = null, padStarted = false;

function musicStep() {
    if (!musicOn) return;
    const c = ac_(), t = c.currentTime;
    let sec = SECTIONS[sectionIdx];
    const localStep = stepIdx % 16;
    const lph = Math.floor(elapsedAtSection / 16) % sec.lead.length;
    const bph = Math.floor(elapsedAtSection / 16) % sec.bass.length;
    const ld = sec.lead[lph][localStep], bs = sec.bass[bph][localStep];
    if (localStep === 0 && !padStarted) {
        if (sec.riser && !riserOsc) startRiser(sec);
        if (sec.chord) pad(sec.chord.map(F), t, sec.dur, sec.chordVol || 0.1);
        padStarted = true;
    }
    if (sec.stabAt && sec.stabAt.includes(localStep) && sec.chord) stab(sec.chord.map(F), t, sec.vol * 0.8);
    if (sec.bell) { const bn = sec.bell[localStep]; if (bn != null) bell(F(bn), t, sec.vol * 0.55); }
    let vol = sec.vol;
    if (sec.drums === 'fade') {
        const secElapsed = elapsedAtSection * STEP_DUR;
        const frac = Math.max(0, 1 - secElapsed / sec.dur);
        vol = sec.vol * Math.min(1, frac + 0.15);
    }
    tone(F(ld), t, STEP_DUR * 0.9, sec.wave, vol);
    tone(F(bs), t, STEP_DUR * 1.6, 'triangle', vol * 1.1);
    if (sec.echo && ld) tone(F(ld + 12), t, STEP_DUR * 0.7, sec.wave, vol * 0.35);
    if (sec.drums === 'light' && localStep % 4 === 2) hat(t, 0.03);
    if (sec.drums === 'roll') { if (localStep % 2 === 0) hat(t, 0.03 + 0.05 * (elapsedAtSection / (sec.dur / STEP_DUR))); }
    if (sec.drums === 'full') {
        if (localStep % 4 === 0) kick(t, 0.12);
        if (localStep % 2 === 0) hat(t, 0.05);
    }
    if (sec.drums === 'half') {
        if (localStep % 8 === 0) kick(t, 0.1);
        if (localStep % 4 === 2) hat(t, 0.035);
    }
    if (sec.drums === 'fade' && localStep % 4 === 0) kick(t, vol * 1.3);
    stepIdx++;
    elapsedAtSection++;
    if (elapsedAtSection * STEP_DUR >= sec.dur) {
        sectionIdx = (sectionIdx + 1) % SECTIONS.length;
        elapsedAtSection = 0;
        riserOsc = null;
        padStarted = false;
    }
    musicTimer = setTimeout(musicStep, STEP_DUR * 1000);
}

function startMusic() {
    if (musicOn) return;
    musicOn = true;
    stepIdx = 0; elapsedAtSection = 0; sectionIdx = 0; riserOsc = null; padStarted = false;
    musicStep();
}

function stopMusic() {
    musicOn = false;
    clearTimeout(musicTimer);
}

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}