let musicOn = false;
let musicTimer = null;
let stepIdx = 0;
let elapsedAtSection = 0;
let sectionIdx = 0;
let riserOsc = null;
let padStarted = false;

let nextStepTime = 0;
const LOOKAHEAD = 20; 
const SCHEDULE_AHEAD_TIME = 0.1;

function getSectionSteps(sec) {
    if (!sec) return 128;
    const REF_BAR = (60 / 130) * 4; 
    const targetBars = Math.max(1, Math.round(sec.dur / REF_BAR));
    return targetBars * 16;
}

let ac;
const ac_ = () => ac || (ac = new (window.AudioContext || window.webkitAudioContext)());

let noiseBuf;
function noiseBuf_() {
    if (noiseBuf) return noiseBuf;
    const c = ac_(), len = c.sampleRate * 0.3;
    noiseBuf = c.createBuffer(1, len, c.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return noiseBuf;
}

let masterVolume = getStoredVolume();
let masterGain = null;

let comp, shaperNode, cleanGain;
function ensureBus_() {
    if (comp) return;
    const c = ac_();

    masterGain = c.createGain();
    masterGain.gain.value = masterVolume;
    masterGain.connect(c.destination);

    comp = c.createDynamicsCompressor();
    comp.threshold.value = -22; 
    comp.knee.value = 4; 
    comp.ratio.value = 12; 
    comp.attack.value = 0.002; 
    comp.release.value = 0.1;
    comp.connect(masterGain);
    
    shaperNode = c.createWaveShaper();
    const n = 256, curve = new Float32Array(n), amt = 7;
    for (let i = 0; i < n; i++) { 
        const x = i * 2 / n - 1; 
        curve[i] = (1 + amt) * x / (1 + amt * Math.abs(x)); 
    }
    shaperNode.curve = curve; 
    shaperNode.oversample = '2x';
    shaperNode.connect(comp);
    
    cleanGain = c.createGain(); 
    cleanGain.gain.value = 1;
    cleanGain.connect(comp);
}

function bus_() { ensureBus_(); return shaperNode; }
function busClean_() { ensureBus_(); return cleanGain; }
function master_() { ensureBus_(); return masterGain; }

function setMasterVolume(v) {
    masterVolume = Math.min(1, Math.max(0, v));
    setStoredVolume(masterVolume);
    if (masterGain) masterGain.gain.value = masterVolume;
}

function F(n) { return n == null ? 0 : 440 * Math.pow(2, n / 12); }

// SFX
// for some reason it starts acting weird so i have this
function safeTime(t, context) {return (typeof t === 'number' && isFinite(t)) ? t : context.currentTime;}
function sfxPew(t) {
    const c = ac_();
    const time = safeTime(t,c);
    const o = c.createOscillator(), g = c.createGain();
    o.type = 'square';
    o.frequency.setValueAtTime(900, time);
    o.frequency.exponentialRampToValueAtTime(120, time + 0.12);
    g.gain.setValueAtTime(0.15, time);
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.13);
    o.connect(g); g.connect(master_());
    o.start(time); o.stop(time + 0.14);
}

function sfxPlay(t) {
    const c = ac_();
    const time = safeTime(t,c);
    
    const o1 = c.createOscillator(), o2 = c.createOscillator();
    const g1 = c.createGain(), g2 = c.createGain();
    
    o1.type = 'sine';
    o1.frequency.setValueAtTime(1318.51, time);
    o1.frequency.exponentialRampToValueAtTime(1046.50, time + 0.12);
    
    o2.type = 'triangle';
    o2.frequency.setValueAtTime(2637.02, time);
    o2.frequency.exponentialRampToValueAtTime(2093.00, time + 0.08);
    g1.gain.setValueAtTime(0.22, time);
    g1.gain.exponentialRampToValueAtTime(0.0001, time + 0.32);
    
    g2.gain.setValueAtTime(0.12, time);
    g2.gain.exponentialRampToValueAtTime(0.0001, time + 0.18);
    
    o1.connect(g1); g1.connect(busClean_());
    o2.connect(g2); g2.connect(busClean_());
    
    o1.start(time); o1.stop(time + 0.33);
    o2.start(time); o2.stop(time + 0.19);
}

function sfxButtonClick(t) {
    const c = ac_();
    const time = safeTime(t,c);
    
    const o = c.createOscillator(), g = c.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(900, time);
    o.frequency.exponentialRampToValueAtTime(150, time + 0.035);
    
    g.gain.setValueAtTime(0.16, time);
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.035);
    
    const n = c.createBufferSource(), ng = c.createGain(), nf = c.createBiquadFilter();
    n.buffer = noiseBuf_();
    nf.type = 'highpass';
    nf.frequency.value = 4000;
    ng.gain.setValueAtTime(0.04, time);
    ng.gain.exponentialRampToValueAtTime(0.0001, time + 0.02);
    
    o.connect(g); g.connect(busClean_());
    n.connect(nf); nf.connect(ng); ng.connect(busClean_());
    
    o.start(time); o.stop(time + 0.04);
    n.start(time); n.stop(time + 0.025);
}

function sfxButtonHover(t) {
    const c = ac_();
    const time = safeTime(t,c);
    const o = c.createOscillator(), g = c.createGain();
    
    o.type = 'sine';
    o.frequency.setValueAtTime(523.25, time); // C5
    o.frequency.exponentialRampToValueAtTime(659.25, time + 0.03); // E5
    
    g.gain.setValueAtTime(0.05, time);
    g.gain.exponentialRampToValueAtTime(0.0001, time + 0.035);
    
    o.connect(g); g.connect(busClean_());
    o.start(time); o.stop(time + 0.04);
}

function sfxNeigh(t) {
    const c = ac_();
    const time = safeTime(t,c);
    
    const voice = c.createOscillator();
    const vibrato = c.createOscillator();
    const vibratoGain = c.createGain();
    const voiceGain = c.createGain();
    const filter = c.createBiquadFilter();
    
    voice.type = 'sawtooth';
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1100, time);
    filter.Q.value = 3.5;

    voice.frequency.setValueAtTime(600, time);
    voice.frequency.exponentialRampToValueAtTime(1150, time + 0.18);
    voice.frequency.exponentialRampToValueAtTime(800, time + 0.45);
    voice.frequency.exponentialRampToValueAtTime(350, time + 0.7);
    
    vibrato.type = 'sine';
    vibrato.frequency.value = 16;
    vibratoGain.gain.setValueAtTime(30, time);
    vibratoGain.gain.exponentialRampToValueAtTime(80, time + 0.2);
    vibratoGain.gain.exponentialRampToValueAtTime(10, time + 0.65);
    
    vibrato.connect(voice.frequency);
    
    voiceGain.gain.setValueAtTime(0.001, time);
    voiceGain.gain.exponentialRampToValueAtTime(0.18, time + 0.08);
    voiceGain.gain.setValueAtTime(0.18, time + 0.4);
    voiceGain.gain.exponentialRampToValueAtTime(0.0001, time + 0.72);
    
    voice.connect(filter);
    filter.connect(voiceGain);
    voiceGain.connect(bus_());
    
    voice.start(time); voice.stop(time + 0.73);
    vibrato.start(time); vibrato.stop(time + 0.73);
    
    const snort = c.createBufferSource();
    const snortFilter = c.createBiquadFilter();
    const snortGain = c.createGain();
    
    snort.buffer = noiseBuf_();
    snortFilter.type = 'lowpass';
    snortFilter.frequency.setValueAtTime(1600, time + 0.4);
    snortFilter.frequency.exponentialRampToValueAtTime(300, time + 0.8);
    
    snortGain.gain.setValueAtTime(0.0001, time + 0.4);
    snortGain.gain.exponentialRampToValueAtTime(0.07, time + 0.52);
    snortGain.gain.exponentialRampToValueAtTime(0.0001, time + 0.82);
    
    snort.connect(snortFilter);
    snortFilter.connect(snortGain);
    snortGain.connect(busClean_());
    
    snort.start(time + 0.4);
    snort.stop(time + 0.83);
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

function startRiser(secDuration, t) {
    const c = ac_();
    const o = c.createOscillator(), g = c.createGain(), f = c.createBiquadFilter();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(60, t);
    o.frequency.exponentialRampToValueAtTime(500, t + secDuration);
    f.type = 'lowpass';
    f.frequency.setValueAtTime(200, t);
    f.frequency.exponentialRampToValueAtTime(4000, t + secDuration);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.03, t + secDuration * 0.9);
    g.gain.exponentialRampToValueAtTime(0.0001, t + secDuration);
    o.connect(f); f.connect(g); g.connect(master_());
    o.start(t); o.stop(t + secDuration + 0.1);
    riserOsc = o;
}

function scheduleStep(t) {
    let sec = SECTIONS[sectionIdx];
    if (!sec) return;

    const localStep = elapsedAtSection % 16;
    const totalSecDuration = getSectionSteps(sec) * STEP_DUR;

    const getNote = (track) => {
        if (!track || !track.length) return null;
        if (Array.isArray(track[0])) {
            const ph = Math.floor(elapsedAtSection / 16) % track.length;
            return track[ph] ? track[ph][localStep] : null;
        }
        return track[localStep] || null;
    };

    const ld = getNote(sec.lead);
    const bs = getNote(sec.bass);
    const bn = getNote(sec.bell);

    if (elapsedAtSection === 0 && !padStarted) {
        if (sec.riser && !riserOsc) startRiser(totalSecDuration, t);
        if (sec.chord && !sec.noPad) pad(sec.chord.map(F), t, totalSecDuration, sec.chordVol || 0.1);
        padStarted = true;
    }
    
    if (sec.stabAt && sec.stabAt.includes(localStep) && sec.chord) stab(sec.chord.map(F), t, sec.vol * 0.8);
    if (bn != null) bell(F(bn), t, sec.vol * 0.55);

    let vol = sec.vol;
    if (sec.drums === 'fade') {
        const secElapsed = elapsedAtSection * STEP_DUR;
        const frac = Math.max(0, 1 - secElapsed / totalSecDuration);
        vol = sec.vol * Math.min(1, frac + 0.15);
    }
    tone(F(ld), t, STEP_DUR * 0.9, sec.wave, vol);
    tone(F(bs), t, STEP_DUR * 1.6, 'triangle', vol * 1.1);
    if (sec.echo && ld) tone(F(ld + 12), t, STEP_DUR * 0.7, sec.wave, vol * 0.35);
    
    if (sec.drums === 'light' && localStep % 4 === 2) hat(t, 0.03);
    if (sec.drums === 'roll') { 
        if (localStep % 2 === 0) hat(t, 0.03 + 0.05 * (elapsedAtSection / (totalSecDuration / STEP_DUR))); 
    }
    if (sec.drums === 'full') {
        if (localStep % 4 === 0) kick(t, 0.12);
        if (localStep % 2 === 0) hat(t, 0.05);
    }
    if (sec.drums === 'half') {
        if (localStep % 8 === 0) kick(t, 0.1);
        if (localStep % 4 === 2) hat(t, 0.035);
    }
    if (sec.drums === 'fade' && localStep % 4 === 0) kick(t, vol * 1.3);
}

function advanceStep() {
    let sec = SECTIONS[sectionIdx];
    const targetSteps = getSectionSteps(sec);

    stepIdx++;
    elapsedAtSection++;
    
    if (elapsedAtSection >= targetSteps) {
        sectionIdx = (sectionIdx + 1) % SECTIONS.length;
        elapsedAtSection = 0;
        stepIdx = 0;
        riserOsc = null;
        padStarted = false;
    }

    nextStepTime += STEP_DUR;
}

function scheduler() {
    while (nextStepTime < ac_().currentTime + SCHEDULE_AHEAD_TIME) {
        scheduleStep(nextStepTime);
        advanceStep();
    }
    if (musicOn) {
        musicTimer = setTimeout(scheduler, LOOKAHEAD);
    }
}

function initAudio() {
    const context = ac_();
    if (context.state === 'suspended') context.resume();
}

function resetMusicPosition() {
    stopAllAudio();
    initAudio();
    stepIdx = 0;
    elapsedAtSection = 0;
    sectionIdx = 0;
    riserOsc = null;
    padStarted = false;
    nextStepTime = ac_().currentTime + 0.05;
}

function startMusic() {
    resetMusicPosition();
    musicOn = true;
    scheduler();
}

function resumeMusic() {
    if (musicOn) return;
    initAudio();
    musicOn = true;
    nextStepTime = ac_().currentTime + 0.05;
    scheduler();
}

function stopMusic() {
    musicOn = false;
    clearTimeout(musicTimer);
}

function stopAllAudio() {
    stopMusic();
    if (riserOsc) {
        try { riserOsc.stop(); riserOsc.disconnect(); } catch (e) {}
        riserOsc = null;
    }
    if (comp) {
        try { comp.disconnect(); } catch (e) {}
        comp = null;
    }
    if (cleanGain) {
        try { cleanGain.disconnect(); } catch (e) {}
        cleanGain = null;
    }
    if (masterGain) {
        try { masterGain.disconnect(); } catch (e) {}
        masterGain = null;
    }
}

function initVolumeControl() {
    if (!volumeSlider) return;
    volumeSlider.value = Math.round(masterVolume * 100);
    volumeSlider.addEventListener('input', () => {
        setMasterVolume(volumeSlider.value / 100);
    });
}
window.addEventListener('DOMContentLoaded', initVolumeControl);