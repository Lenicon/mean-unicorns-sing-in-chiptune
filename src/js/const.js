const WARN_BEATS = 1;
const CLUTCH_BONUS = 15;
const N = 5, CELL = 60, GAP = 4, PAD = 6, PLAYER_PX = 6, UNI_PX = 5;
const GRID_W = PAD * 2 + N * CELL + (N - 1) * GAP;
const UNI_DOCK_LEFT = (GRID_W - UNI_BMP[0].length * UNI_PX) / 2;
const UNI_DOCK_TOP = -60;
const hud = document.getElementById('hud');
const gridEl = document.getElementById('grid');
const scoreEl = document.getElementById('score');
const timeValEl = document.getElementById('timeVal');
const heartsEl = document.getElementById('hearts');
const hudSongTitle = document.getElementById('hudSongTitle');
const msgEl = document.getElementById('msg');
const restartBtn = document.getElementById('restart');
const menuBtn = document.getElementById('menuBtn');
const unicornWrap = document.getElementById('unicornWrap');
const startOverlay = document.getElementById('startOverlay');
const startBtn = document.getElementById('startBtn');
const unicornCanvas = document.getElementById('unicornCanvas');
const DEFAULT_MSG = 'Arrow keys / WASD to move';


let cells = [];
let player = { r: 4, c: 2, facingLeft: false };
let lives = 3;
let score = 0;
let pending = [];
let running = false;
let gameStarted = false;
let introDone = false;
let timer = null;
let clockTimer = null;
let playerCanvas;
let uniFlyCanvas;
let startTime = 0;
let currentStageIdx = -1;
let stageBeatCounter = 0;
let canMove = true;

let audioCtx = null;
const
C0 = -57, CS0 = -56, DB0 = -56, D0 = -55, DS0 = -54, EB0 = -54, E0 = -53, F0 = -52, FS0 = -51, GB0 = -51, G0 = -50, GS0 = -49, AB0 = -49, A0 = -48, AS0 = -47, BB0 = -47, B0 = -46,
C1 = -45, CS1 = -44, DB1 = -44, D1 = -43, DS1 = -42, EB1 = -42, E1 = -41, F1 = -40, FS1 = -39, GB1 = -39, G1 = -38, GS1 = -37, AB1 = -37, A1 = -36, AS1 = -35, BB1 = -35, B1 = -34,
C2 = -33, CS2 = -32, DB2 = -32, D2 = -31, DS2 = -30, EB2 = -30, E2 = -29, F2 = -28, FS2 = -27, GB2 = -27, G2 = -26, GS2 = -25, AB2 = -25, A2 = -24, AS2 = -23, BB2 = -23, B2 = -22,
C3 = -21, CS3 = -20, DB3 = -20, D3 = -19, DS3 = -18, EB3 = -18, E3 = -17, F3 = -16, FS3 = -15, GB3 = -15, G3 = -14, GS3 = -13, AB3 = -13, A3 = -12, AS3 = -11, BB3 = -11, B3 = -10,
C4 = -9, CS4 = -8, DB4 = -8, D4 = -7, DS4 = -6, EB4 = -6, E4 = -5, F4 = -4, FS4 = -3, GB4 = -3, G4 = -2, GS4 = -1, AB4 = -1, A4 = 0, AS4 = 1, BB4 = 1, B4 = 2,
C5 = 3, CS5 = 4, DB5 = 4, D5 = 5, DS5 = 6, EB5 = 6, E5 = 7, F5 = 8, FS5 = 9, GB5 = 9, G5 = 10, GS5 = 11, AB5 = 11, A5 = 12, AS5 = 13, BB5 = 13, B5 = 14,
C6 = 15, CS6 = 16, DB6 = 16, D6 = 17, DS6 = 18, EB6 = 18, E6 = 19, F6 = 20, FS6 = 21, GB6 = 21, G6 = 22, GS6 = 23, AB6 = 23, A6 = 24, AS6 = 25, BB6 = 25, B6 = 26,
C7 = 27, CS7 = 28, DB7 = 28, D7 = 29, DS7 = 30, EB7 = 30, E7 = 31, F7 = 32, FS7 = 33, GB7 = 33, G7 = 34, GS7 = 35, AB7 = 35, A7 = 36, AS7 = 37, BB7 = 37, B7 = 38,
C8 = 39, CS8 = 40, DB8 = 40, D8 = 41, DS8 = 42, EB8 = 42, E8 = 43, F8 = 44, FS8 = 45, GB8 = 45, G8 = 46, GS8 = 47, AB8 = 47, A8 = 48, AS8 = 49, BB8 = 49, B8 = 50;

const NOTES_MAP = {
    C0, CS0, DB0, D0, DS0, EB0, E0, F0, FS0, GB0, G0, GS0, AB0, A0, AS0, BB0, B0,
    C1, CS1, DB1, D1, DS1, EB1, E1, F1, FS1, GB1, G1, GS1, AB1, A1, AS1, BB1, B1,
    C2, CS2, DB2, D2, DS2, EB2, E2, F2, FS2, GB2, G2, GS2, AB2, A2, AS2, BB2, B2,
    C3, CS3, DB3, D3, DS3, EB3, E3, F3, FS3, GB3, G3, GS3, AB3, A3, AS3, BB3, B3,
    C4, CS4, DB4, D4, DS4, EB4, E4, F4, FS4, GB4, G4, GS4, AB4, A4, AS4, BB4, B4,
    C5, CS5, DB5, D5, DS5, EB5, E5, F5, FS5, GB5, G5, GS5, AB5, A5, AS5, BB5, B5,
    C6, CS6, DB6, D6, DS6, EB6, E6, F6, FS6, GB6, G6, GS6, AB6, A6, AS6, BB6, B6,
    C7, CS7, DB7, D7, DS7, EB7, E7, F7, FS7, GB7, G7, GS7, AB7, A7, AS7, BB7, B7,
    C8, CS8, DB8, D8, DS8, EB8, E8, F8, FS8, GB8, G8, GS8, AB8, A8, AS8, BB8, B8
};

let BAR = 60 / 130 * 4;
let STEP_DUR = BAR / 16;
let STAGES = [];
let SECTIONS = [];
let GAME_DURATION_SECONDS = 199;