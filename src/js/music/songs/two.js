const songTwo = [
    { name: "Once Upon A Ceros", time: 171, bpm: 140, warn:3 },
    [
        {
            start: 0,
            bpm: 140,
            patterns: [
                { t: "row", i:0 },
                { t: "row", i:1 },
                { t: "row", i:2 },
                { t: "row", i:3 },
                { t: "row", i:4 },
            ]
        },
        {
            start: 7,
            bpm: 70,
            patterns: [
                { t: "cross",r:2,c:2 },
                { t: "cross",r:1,c:1 },
                { t: "cross",r:3,c:3 },
                { t: "cross",r:4,c:4 },
                { t: "cross",r:0,c:0 },
            ]
        },
        {
            start: 20,
            bpm: 140,
            patterns: [
                { t: "pos" },
            ]
        },
        {
            start: 22,
            bpm: 70,
            patterns: [
                { t: "area", r:[0,1,2], c:[0,1,2] },
                { t: "area", r:[2,3,4], c:[0,1,2] },
                { t: "area", r:[2,3,4], c:[2,3,4] },
                { t: "area", r:[0,1,2], c:[2,3,4] },
            ]
        },
        {
            start: 25,
            bpm: 140,
            patterns: [
                { t: "pos" },
            ]
        },
        {
            start: 29,
            bpm: 70,
            patterns: [
                { t: "area", r:[0,1,2], c:[2,3,4] },
                { t: "area", r:[2,3,4], c:[2,3,4] },
                { t: "area", r:[2,3,4], c:[0,1,2] },
                { t: "area", r:[0,1,2], c:[0,1,2] },
            ]
        },
        {
            start: 33,
            bpm: 140,
            patterns: [
                { t: "pos" },
            ]
        },
        {
            start: 36,
            bpm: 140,
            patterns: [
                { t: "row", i:[0,1] },
                { t: "row", i:[1,2] },
                { t: "row", i:[2,3] },
                { t: "row", i:[3,4] },
                { t: "row", i:[4,0] },
            ]
        },
        {
            start: 43,
            bpm: 70,
            patterns: [
                { t: "checker", odd:true },
                { t: "checker", odd:false },
                { t: "checker", odd:true },
                { t: "area", r:[1,2,3], c:[1,2,3] },
            ]
        },
        {
            start: 56,
            bpm: 140,
            patterns: [
                { t:"pos" },
            ]
        },
        {
            start: 58,
            bpm: 70,
            patterns: [
                { t: "area", r:[1,2,3], c:[1,2,3] },
                { t: "cross", r:[0,4], c:[0,4] },
            ]
        },
    ],
    [
        {
            dur: BAR * 4, wave: 'square', vol: 0.12, drums: false,
            lead: [
                [D5, null, A4, null, F4, null, A4, null, D5, null, A4, null, F4, null, A4, null],
                [D5, null, BB4, null, F4, null, BB4, null, D5, null, BB4, null, G4, null, A4, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, A3, null, null, null, null, null, null, null]
            ]
        },
        {
            dur: BAR * 8, wave: 'triangle', vol: 0.16, drums: 'light',
            lead: [
                [D5, null, null, C5, null, BB4, null, A4, null, null, F4, null, G4, null, A4, null],
                [A4, null, BB4, null, C5, null, D5, null, null, C5, null, BB4, null, A4, null, null]
            ],
            bass: [
                [D3, null, null, null, D3, null, null, null, A3, null, null, null, A3, null, null, null],
                [BB3, null, null, null, BB3, null, null, null, F3, null, null, null, G3, null, null, null]
            ]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.2, drums: 'roll',
            lead: [
                [D4, E4, F4, G4, A4, BB4, C5, D5, E5, D5, C5, BB4, A4, G4, F4, E4]
            ],
            bass: [
                [D3, null, D3, null, D3, null, D3, null, D3, null, D3, null, D3, null, D3, null]
            ]
        },
        {
            dur: BAR * 3, wave: 'square', vol: 0.28, drums: 'full', echo: true, stabAt: [0, 8], noPad: true,
            lead: [
                [D5, D5, C5, D5, D5, D5, BB4, D5, D5, D5, C5, D5, A4, G4, BB4, A4],
                [D5, D5, C5, D5, D5, D5, BB4, BB4, D5, C5, D5, A4, G4, BB4, A4, G4]
            ],
            bass: [
                [D3, D3, D3, D3, D3, D3, D3, D3, A3, A3, A3, A3, A3, A3, A3, A3],
                [BB3, BB3, BB3, BB3, F3, F3, F3, F3, G3, G3, G3, G3, A3, A3, A3, A3]
            ],
            bell: [
                [D5, null, null, null, null, A5, null, null, D6, null, null, null, null, A5, null, null]
            ],
            chord: [D3, F3, A3, D4]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.2, drums: 'roll',
            lead: [
                [D4, E4, F4, G4, A4, BB4, C5, D5, E5, D5, C5, BB4, A4, G4, F4, E4]
            ],
            bass: [
                [D3, null, D3, null, D3, null, D3, null, D3, null, D3, null, D3, null, D3, null]
            ]
        },
        {
            dur: BAR * 3, wave: 'square', vol: 0.28, drums: 'full', echo: true, stabAt: [0, 8], noPad: true,
            lead: [
                [D5, D5, C5, D5, D5, D5, BB4, D5, D5, D5, C5, D5, A4, G4, BB4, A4],
                [D5, D5, C5, D5, D5, D5, BB4, BB4, D5, C5, D5, A4, G4, BB4, A4, G4]
            ],
            bass: [
                [D3, D3, D3, D3, D3, D3, D3, D3, A3, A3, A3, A3, A3, A3, A3, A3],
                [BB3, BB3, BB3, BB3, F3, F3, F3, F3, G3, G3, G3, G3, A3, A3, A3, A3]
            ],
            bell: [
                [D5, null, null, null, null, A5, null, null, D6, null, null, null, null, A5, null, null]
            ],
            chord: [D3, F3, A3, D4]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.2, drums: 'roll',
            lead: [
                [D4, E4, F4, G4, A4, BB4, C5, D5, E5, D5, C5, BB4, A4, G4, F4, E4]
            ],
            bass: [
                [D3, null, D3, null, D3, null, D3, null, D3, null, D3, null, D3, null, D3, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'square', vol: 0.12, drums: false,
            lead: [
                [D5, null, A4, null, F4, null, A4, null, D5, null, A4, null, F4, null, A4, null],
                [D5, null, BB4, null, F4, null, BB4, null, D5, null, BB4, null, G4, null, A4, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, A3, null, null, null, null, null, null, null]
            ]
        },
        {
            dur: BAR * 8, wave: 'triangle', vol: 0.18, drums: 'half',
            lead: [
                [null, A4, null, C5, null, D5, null, C5, null, A4, null, F4, null, G4, null, A4],
                [D5, null, null, C5, null, BB4, null, null, A4, null, G4, null, F4, null, null, null]
            ],
            bass: [
                [D3, null, null, null, BB3, null, null, null, A3, null, null, null, G3, null, null, null],
                [F3, null, null, null, G3, null, null, null, A3, null, null, null, D3, null, null, null]
            ]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.22, drums: 'roll',
            lead: [
                [D4, E4, F4, G4, A4, BB4, B4, C5, D5, E5, F5, G5, A5, G5, F5, CS5]
            ],
            bass: [
                [D3, null, D3, null, D3, null, D3, null, D4, null, D4, null, D4, null, D4, null]
            ]
        },
        {
            dur: BAR * 3, wave: 'square', vol: 0.3, drums: 'full', echo: true, stabAt: [0, 4, 8, 12], noPad: true,
            lead: [
                [D5, D5, C5, D5, F5, D5, BB4, D5, D5, D5, C5, D5, A4, G4, BB4, C5],
                [F5, F5, E5, F5, D5, F5, C5, F5, BB4, BB4, A4, BB4, G4, F4, G4, A4]
            ],
            bass: [
                [D3, D3, D3, D3, D3, D3, D3, D3, A3, A3, A3, A3, A3, A3, A3, A3],
                [BB3, BB3, F3, F3, G3, G3, C4, C4, D3, D3, F3, F3, A3, A3, BB3, BB3]
            ],
            bell: [
                [D6, null, null, A5, null, null, F5, null, null, A5, null, null, D6, null, null, null]
            ],
            chord: [D3, F3, A3, D4]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.22, drums: 'roll',
            lead: [
                [D4, E4, F4, G4, A4, BB4, B4, C5, D5, E5, F5, G5, A5, G5, F5, CS5]
            ],
            bass: [
                [D3, null, D3, null, D3, null, D3, null, D4, null, D4, null, D4, null, D4, null]
            ]
        },
        {
            dur: BAR * 3, wave: 'square', vol: 0.3, drums: 'full', echo: true, stabAt: [0, 4, 8, 12], noPad: true,
            lead: [
                [D5, D5, C5, D5, F5, D5, BB4, D5, D5, D5, C5, D5, A4, G4, BB4, C5],
                [F5, F5, E5, F5, D5, F5, C5, F5, BB4, BB4, A4, BB4, G4, F4, G4, A4]
            ],
            bass: [
                [D3, D3, D3, D3, D3, D3, D3, D3, A3, A3, A3, A3, A3, A3, A3, A3],
                [BB3, BB3, F3, F3, G3, G3, C4, C4, D3, D3, F3, F3, A3, A3, BB3, BB3]
            ],
            bell: [
                [D6, null, null, A5, null, null, F5, null, null, A5, null, null, D6, null, null, null]
            ],
            chord: [D3, F3, A3, D4]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.22, drums: 'roll',
            lead: [
                [D4, E4, F4, G4, A4, BB4, B4, C5, D5, E5, F5, G5, A5, G5, F5, CS5]
            ],
            bass: [
                [D3, null, D3, null, D3, null, D3, null, D4, null, D4, null, D4, null, D4, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'sine', vol: 0.14, drums: 'light',
            lead: [
                [null, null, D5, null, null, null, A4, null, null, null, F4, null, null, null, G4, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, A2, null, null, null, null, null, null, null]
            ],
            bell: [
                [A5, null, null, null, D6, null, null, null, F5, null, null, null, A5, null, null, null]
            ]
        },
        {
            dur: BAR * 8, wave: 'triangle', vol: 0.2, drums: 'half',
            lead: [
                [D5, null, C5, null, BB4, null, A4, null, BB4, null, C5, null, D5, null, null, null],
                [A4, null, G4, null, F4, null, G4, null, A4, null, BB4, null, C5, null, D5, null]
            ],
            bass: [
                [D3, null, null, D3, null, null, A3, null, null, A3, null, null, BB3, null, null, null],
                [F3, null, null, F3, null, null, G3, null, null, G3, null, null, A3, null, null, null]
            ]
        },
        {
            dur: BAR * 2, wave: 'sawtooth', vol: 0.26, drums: 'roll',
            lead: [
                [D4, E4, F4, G4, A4, BB4, C5, D5, E5, F5, G5, A5, BB5, A5, G5, F5]
            ],
            bass: [
                [D3, D3, null, null, D3, D3, null, null, D4, D4, null, null, D4, D4, null, null]
            ]
        },
        {
            dur: BAR * 3, wave: 'square', vol: 0.32, drums: 'full', echo: true, stabAt: [0, 4, 8, 12], noPad: true,
            lead: [
                [D5, D5, C5, D5, F5, D5, BB4, D5, D5, D5, C6, D5, A4, G4, BB4, C5],
                [D6, D6, C6, D6, A5, D6, F5, D6, D5, D5, C5, D5, BB4, A4, G4, A4]
            ],
            bass: [
                [D3, D3, D3, D3, D3, D3, D3, D3, A3, A3, A3, A3, A3, A3, A3, A3],
                [BB3, BB3, F3, F3, G3, G3, C4, C4, D3, D3, F3, F3, A3, A3, BB3, BB3]
            ],
            bell: [
                [D6, null, A5, null, F5, null, A5, null, D6, null, A5, null, F5, null, A5, null]
            ],
            chord: [D3, F3, A3, D4]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.26, drums: 'roll',
            lead: [
                [D4, E4, F4, G4, A4, BB4, C5, D5, E5, F5, G5, A5, BB5, A5, G5, F5]
            ],
            bass: [
                [D3, D3, null, null, D3, D3, null, null, D4, D4, null, null, D4, D4, null, null]
            ]
        },
        {
            dur: BAR * 3, wave: 'sawtooth', vol: 0.4, drums: 'full', echo: true, stabAt: [0, 4, 8, 12], noPad: true,
            lead: [
                [D5, D5, C5, D5, F5, D5, BB4, D5, D5, D5, C6, D5, A4, G4, BB4, C5],
                [D6, D6, C6, D6, A5, D6, F5, D6, D5, D5, C5, D5, BB4, A4, G4, A4],
                [F5, F5, E5, F5, D5, F5, C5, F5, A4, A4, G4, A4, F4, E4, D4, D4]
            ],
            bass: [
                [D3, D3, D3, D3, D3, D3, D3, D3, A3, A3, A3, A3, A3, A3, A3, A3],
                [BB3, BB3, F3, F3, G3, G3, C4, C4, D3, D3, F3, F3, A3, A3, BB3, BB3],
                [D3, D3, D3, D3, A3, A3, A3, A3, BB3, BB3, BB3, BB3, G3, G3, A3, A3]
            ],
            bell: [
                [D6, null, A5, null, F5, null, A5, null, D6, null, A5, null, F5, null, A5, null]
            ],
            chord: [D3, F3, A3, D4]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.26, drums: 'roll',
            lead: [
                [D4, E4, F4, G4, A4, BB4, C5, D5, E5, F5, G5, A5, BB5, A5, G5, F5]
            ],
            bass: [
                [D3, D3, null, null, D3, D3, null, null, D4, D4, null, null, D4, D4, null, null]
            ]
        },
        {
            dur: BAR * 8, wave: 'square', vol: 0.22, drums: 'fade',
            lead: [
                [D5, null, null, C5, null, BB4, null, null, A4, null, null, G4, null, F4, null, null],
                [D4, null, null, null, A3, null, null, null, D3, null, null, null, null, null, null, null],
                [D4, null, null, null, A3, null, null, null, D3, null, null, null, null, null, null, null],
                [A4, null, null, null, null, null, null, null, D4, null, null, null, null, null, null, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, A3, null, null, null, null, null, null, null],
                [D3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                [D3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bell: [
                [D6, null, null, null, A5, null, null, null, F5, null, null, null, D5, null, null, null],
                [D6, null, null, null, A5, null, null, null, F5, null, null, null, D5, null, null, null]
            ]
        }
    ]
];