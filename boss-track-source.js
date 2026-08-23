// ---- procedural boss-fight track (replaces music.mp3 / music.ogg) ----
// 130bpm, D minor. 5 sections totalling 3:26 (206s), matching game length.
// calm -> rising action -> transformation -> action/boss fight -> ending
// All notes generated at runtime, zero recorded audio bytes.

let ac;
function ac_(){ return ac || (ac = new (window.AudioContext||window.webkitAudioContext)()); }
let noiseBuf;
function noiseBuf_(){
  if(noiseBuf) return noiseBuf;
  const c = ac_(), len = c.sampleRate * 0.3;
  noiseBuf = c.createBuffer(1, len, c.sampleRate);
  const d = noiseBuf.getChannelData(0);
  for(let i=0;i<len;i++) d[i] = Math.random()*2-1;
  return noiseBuf;
}

// one-shot "pew" laser sound, replaces pew.mp3
function pew(){
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

function tone(freq, t, dur, type, vol){
  if(!freq) return;
  const c = ac_(), o = c.createOscillator(), g = c.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(c.destination);
  o.start(t); o.stop(t + dur + 0.02);
}

function kick(t, vol){
  const c = ac_(), o = c.createOscillator(), g = c.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(150, t);
  o.frequency.exponentialRampToValueAtTime(45, t + 0.09);
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.13);
  o.connect(g); g.connect(c.destination);
  o.start(t); o.stop(t + 0.14);
}

function hat(t, vol){
  const c = ac_(), src = c.createBufferSource(), g = c.createGain(), f = c.createBiquadFilter();
  src.buffer = noiseBuf_();
  f.type = 'highpass'; f.frequency.value = 6000;
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);
  src.connect(f); f.connect(g); g.connect(c.destination);
  src.start(t); src.stop(t + 0.05);
}

// D minor scale, semitone offsets from A4 (A4 = 0)
const D3=-19,E3=-17,F3=-16,G3=-14,A3=-12,BB3=-11,C4=-9,D4=-7,E4=-5,F4=-4,G4=-2,A4=0,BB4=1,C5=3,CS5=4,D5=5,E5=7,F5=8,G5=10,A5=12;
function F(n){ return n==null ? 0 : 440*Math.pow(2, n/12); }

// ---- section patterns (16-step loops, repeated for each section's duration) ----
const SECTIONS = [
  { name:'calm', dur:40, wave:'triangle', vol:0.05, drums:false,
    lead:[D4,0,0,0, F4,0,0,0, A4,0,0,0, E4,0,0,F4],
    bass:[D3,0,0,0, D3,0,0,0, BB3,0,0,0, A3,0,0,0] },

  { name:'rising', dur:40, wave:'triangle', vol:0.07, drums:'light',
    lead:[D4,F4,A4,F4, D4,F4,A4,C5, BB4,A4,F4,A4, G4,F4,E4,D4],
    bass:[D3,0,D3,0, D3,0,D3,0, BB3,0,BB3,0, A3,0,A3,0] },

  { name:'transform', dur:30, wave:'sawtooth', vol:0.06, drums:'roll', riser:true,
    lead:[D4,E4,F4,G4, A4,BB4,C5,D5, D5,C5,BB4,A4, G4,F4,E4,D4],
    bass:[D3,0,A3,0, D3,0,A3,0, D3,0,A3,0, D3,0,A3,0] },

  { name:'action', dur:60, wave:'square', vol:0.09, drums:'full',
    lead:[D4,A4,D5,A4, F4,C5,F5,C5, BB3,F4,BB4,F4, A3,E4,A4,CS5],
    bass:[D3,D3,D3,D3, BB3,BB3,BB3,BB3, F3,F3,F3,F3, A3,A3,A3,A3] },

  { name:'ending', dur:36, wave:'triangle', vol:0.08, drums:'fade',
    lead:[D4,F4,A4,D5, C5,BB4,A4,G4, F4,A4,D5,F5, E5,D5,BB4,A4],
    bass:[D3,0,0,0, BB3,0,0,0, F3,0,0,0, A3,0,0,0] },
];

let musicOn = false, musicTimer = null, stepIdx = 0, elapsedAtSection = 0, sectionIdx = 0, riserOsc = null;
const STEP_DUR = 60/130/4; // fixed 130bpm, 16th-note grid

function startRiser(sec){
  const c = ac_(), t = c.currentTime;
  const o = c.createOscillator(), g = c.createGain(), f = c.createBiquadFilter();
  o.type = 'sawtooth';
  o.frequency.setValueAtTime(60, t);
  o.frequency.exponentialRampToValueAtTime(500, t + sec.dur);
  f.type = 'lowpass';
  f.frequency.setValueAtTime(200, t);
  f.frequency.exponentialRampToValueAtTime(4000, t + sec.dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.03, t + sec.dur*0.9);
  g.gain.exponentialRampToValueAtTime(0.0001, t + sec.dur);
  o.connect(f); f.connect(g); g.connect(c.destination);
  o.start(t); o.stop(t + sec.dur + 0.1);
  riserOsc = o;
}

function musicStep(){
  if(!musicOn) return;
  const c = ac_(), t = c.currentTime;
  let sec = SECTIONS[sectionIdx];
  const localStep = stepIdx % 16;

  if(localStep === 0 && sec.riser && !riserOsc) startRiser(sec);

  // fade section: shrink volume over the last quarter of the section
  let vol = sec.vol;
  if(sec.drums === 'fade'){
    const secElapsed = elapsedAtSection * STEP_DUR;
    const frac = Math.max(0, 1 - secElapsed / sec.dur);
    vol = sec.vol * Math.min(1, frac + 0.2);
  }

  tone(F(sec.lead[localStep]), t, STEP_DUR*0.9, sec.wave, vol);
  tone(F(sec.bass[localStep]), t, STEP_DUR*1.6, 'triangle', vol*1.1);

  if(sec.drums === 'light' && localStep % 4 === 2) hat(t, 0.03);
  if(sec.drums === 'roll'){ if(localStep % 2 === 0) hat(t, 0.03 + 0.05*(elapsedAtSection/(sec.dur/STEP_DUR))); }
  if(sec.drums === 'full'){
    if(localStep % 4 === 0) kick(t, 0.12);
    if(localStep % 2 === 0) hat(t, 0.05);
  }
  if(sec.drums === 'fade' && localStep % 4 === 0) kick(t, vol*1.3);

  stepIdx++;
  elapsedAtSection++;

  // section transition: check if we've passed this section's duration
  if(elapsedAtSection * STEP_DUR >= sec.dur){
    sectionIdx = (sectionIdx + 1) % SECTIONS.length;
    elapsedAtSection = 0;
    riserOsc = null;
  }

  musicTimer = setTimeout(musicStep, STEP_DUR*1000);
}

function startMusic(){
  if(musicOn) return;
  musicOn = true;
  stepIdx = 0; elapsedAtSection = 0; sectionIdx = 0; riserOsc = null;
  musicStep();
}
function stopMusic(){
  musicOn = false;
  clearTimeout(musicTimer);
}
