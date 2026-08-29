const songOne = [
    { name: "Maiden Meets Pony", time: 151, bpm: 130 },
    [
        {
            start: 0,
            bpm: 32.5,
            patterns: [
                { t: "center" },
                { t: "area", r: [1,2,3], c: [1,2,3] }
            ]
        },
        {
            start: 5,
            bpm: 32.5,
            patterns: [
                { t: "row", i: [2] },
                { t: "row", i: [1,3] },
                { t: "cross", r: [0, 4], c: [0, 4] },
                { t: "cross", r: [1, 3], c: [1, 3] },
                { t: "col", i: [2] },
                { t: "col", i: [1, 3] },
                { t: "cross", r: [0, 4], c: [0, 4] },
                { t: "cross", r: [1, 3], c: [1, 3] },
            ]
        },
        {
            start: 20,
            bpm: 32.5,
            patterns: [
                { t: "row", i: [0, 1, 2, 3] },
                { t: "row", i: [1, 2, 3, 4] }
            ]
        },
        {
            start: 27,
            bpm: 130,
            patterns: [
                { t: "col", i:0 },
                { t: "col", i:1 },
                { t: "col", i:2 },
                { t: "col", i:3 },
                { t: "col", i:4 },
                { t: "row", i:4 },
                { t: "row", i:3 },
                { t: "row", i:2 },
                { t: "row", i:1 },
                { t: "row", i:0 },
            ]
        },
        {
            start: 35,
            bpm: 65,
            patterns: [
                { t: "cross", r: [0, 4], c: [0, 4] },
                { t: "cross", r: [1, 3], c: [1, 3] },
                { t: "area", r: [1, 2, 3], c: [1, 2, 3] },
                { t: "cross", r: [1, 3], c: [1, 3] },
                { t: "cross", r: [0, 4], c: [0, 4] },
                { t: "area", r: [1, 2, 3], c: [1, 2, 3] }
            ]
        },
        {
            start: 49,
            bpm: 65,
            patterns: [
                { t: "pos"},
                { t: "random", i:15 },
            ]
        },
        {
            start: 57,
            bpm: 65,
            patterns: [
                { t: "col", i: [1,2,3,4] },
                { t: "col", i: [3,2,1,0] }
            ]
        },
        {
            start: 61,
            bpm: 65,
            patterns: [
                { t: "cross", r: [0, 4], c: [0, 4] },
                { t: "area", r: [1, 2, 3], c: [1, 2, 3] }
            ]
        },
        {
            start: 64,
            bpm: 130,
            patterns: [
                { t: "row", i: 4 },
                { t: "row", i: [4,3] },
                { t: "row", i: [4,3,2] },
                { t: "row", i: [4,3,2,1] }
            ]
        },
        {
            start: 66.5,
            bpm: 65,
            patterns: [{ t: "row", i: [0, 1, 2, 3] }]
        },
        {
            start: 67,
            bpm: 130,
            patterns: [
                { t: "row", i: 0 },
                { t: "row", i: [0,1] },
                { t: "row", i: [0,1,2] },
                { t: "row", i: [0,1,2,3] }
            ]
        },
        {
            start: 69,
            bpm: 65,
            patterns: [{ t: "row", i: [4, 1, 2, 3] }]
        },
        {
            start: 70,
            bpm: 65,
            patterns: [
                { t: "cross", r: [0, 4], c: [0, 4] },
                { t: "cross", r: [0, 1, 3, 4], c: [0, 1, 3, 4] },
                { t: "area", r: [1, 2, 3], c: [1, 2, 3] }
            ]
        },
        {
            start: 78,
            bpm: 65,
            patterns: [
                { t: "area", r: [1, 2, 3], c: [1, 2, 3] },
                { t: "row", i: [1,3,4,0] },
                { t: "cross", r: [1, 3], c: [1, 3] },
                { t: "col", i: [1,2,3] },
                { t: "cross", r: [4,0], c: [4,0] },
            ]
        },
        {
            start: 93,
            bpm: 65,
            patterns: [
                { t: "col", i: [0,4] },
                { t: "col", i: [1,3] },
                { t: "cross", r:[2], c:[2] },
                { t: "row", i: [1,3] },
                { t: "row", i: [0,4] },
            ]
        },
        {
            start: 101,
            bpm: 65,
            patterns: [
                { t: "checker", odd:true },
                { t: "pos" },
                { t: "checker", odd:false },
                { t: "pos" },
            ]
        },
        {
            start: 109,
            bpm: 130,
            patterns: [
                { t: "pos" },
                { t: "pos" },
                { t: "pos" },
                { t: "pos" },
                { t: "random", i:5 },
                { t: "random", i:7 },
                { t: "random", i:9 },
                { t: "random", i:10 },
            ]
        },
        {
            start: 125,
            bpm: 130,
            patterns: [
                { t: "row", i:[0,1] },
                { t: "row", i:[1,2] },
                { t: "row", i:[2,3] },
                { t: "row", i:[3,4] },
                { t: "random", i:10 },
            ]
        },
    ],
    [
        {
            dur: BAR * 3, wave: 'sine', vol: 0.06, drums: false, chordVol: 0.015,
            lead: [
                [D5, null, null, null, null, null, null, null, null, null, null, null, C5, null, null, null],
                [null, null, null, null, D5, null, null, null, null, null, null, null, null, null, G4, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                [D3, null, null, null, null, null, null, null, D3, null, null, null, null, null, null, null]
            ],
            bell: [
                [D5, null, null, null, null, null, null, null, A5, null, null, null, null, null, null, null]
            ],
            chord: [D3, A3, D4]
        },
        {
            dur: BAR * 8, wave: 'triangle', vol: 0.08, drums: 'light', chordVol: 0.02,
            lead: [
                [null, null, null, null, null, null, null, null, D5, C5, BB4, A4, null, null, null, null],
                [null, null, null, null, D5, null, C5, null, BB4, null, A4, null, null, null, null, null]
            ],
            bass: [
                [D3, null, null, null, D3, null, null, null, A3, null, null, null, A3, null, null, null],
                [D3, null, D3, null, A3, null, A3, null, D3, null, D3, null, G3, null, G3, null]
            ],
            bell: [
                [D5, null, null, F5, null, A5, null, null, D6, null, A5, null, F5, null, D5, null]
            ],
            chord: [D3, A3, D4, C5]
        },
        {
            dur: BAR * 4, wave: 'triangle', vol: 0.09, drums: 'light', chordVol: 0.02,
            lead: [
                [D5, null, null, null, C5, null, null, null, BB4, null, null, null, A4, null, null, null],
                [A4, null, null, null, BB4, null, null, null, C5, null, null, null, D5, null, null, null]
            ],
            bass: [
                [D3, null, null, null, D3, null, null, null, A3, null, null, null, A3, null, null, null]
            ],
            chord: [D3, A3, D4]
        },
        {
            dur: BAR * 4, wave: 'triangle', vol: 0.1, drums: 'light',
            lead: [
                [D4, null, E4, null, F4, null, G4, null, A4, null, BB4, null, C5, null, D5, null],
                [D5, null, C5, null, BB4, null, A4, null, G4, null, F4, null, E4, null, D4, null]
            ],
            bass: [
                [D3, null, null, null, D3, null, null, null, D3, null, null, null, D3, null, null, null]
            ]
        },
        {
            dur: BAR * 8, wave: 'triangle', vol: 0.08, drums: 'light', chordVol: 0.02,
            lead: [
                [null, null, null, null, null, null, null, null, D5, C5, BB4, A4, null, null, null, null],
                [null, null, null, null, D5, null, C5, null, BB4, null, A4, null, null, null, null, null]
            ],
            bass: [
                [D3, null, null, null, D3, null, null, null, A3, null, null, null, A3, null, null, null],
                [D3, null, D3, null, A3, null, A3, null, D3, null, D3, null, G3, null, G3, null]
            ],
            bell: [
                [D5, null, null, F5, null, A5, null, null, D6, null, A5, null, F5, null, D5, null]
            ],
            chord: [D3, A3, D4, C5]
        },
        {
            dur: BAR * 4, wave: 'square', vol: 0.11, drums: 'half',
            lead: [
                [D5, null, F5, null, A4, C5, null, G4, null, BB4, D5, null, F4, null, A5, null],
                [G4, null, D5, null, F5, null, A4, null, C5, G4, null, BB4, null, D5, null, F4]
            ],
            bass: [
                [D3, null, null, A3, null, D3, null, null, F3, null, null, D3, null, A3, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'triangle', vol: 0.1, drums: 'light',
            lead: [
                [D4, null, E4, null, F4, null, G4, null, A4, null, BB4, null, C5, null, D5, null],
                [D5, null, C5, null, BB4, null, A4, null, G4, null, F4, null, E4, null, D4, null]
            ],
            bass: [
                [D3, null, null, null, D3, null, null, null, D3, null, null, null, D3, null, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'square', vol: 0.13, drums: 'full', echo: true,
            lead: [
                [D5, D5, C5, D5, D5, D5, BB4, D5, D5, D5, C5, D5, A4, G4, BB4, G4],
                [D5, D5, C5, D5, D5, D5, BB4, BB4, D5, C5, D5, A4, G4, BB4, G4, A4]
            ],
            bass: [
                [D3, D3, D3, D3, D3, D3, D3, D3, D3, D3, D3, D3, E3, E3, F3, F3],
                [D3, D3, F3, D3, D3, D3, BB3, D3, D3, F3, D3, C4, F3, BB3, F3, C4]
            ]
        },
        {
            dur: BAR * 4, wave: 'square', vol: 0.11, drums: 'half', stabAt: [0], chordVol: 0.02,
            lead: [
                [D5, C5, BB4, A4, null, A4, null, null, D5, C5, BB4, A4, G4, null, F4, null],
                [D5, C5, BB4, A4, null, null, C5, null, BB4, A4, G4, F4, null, null, null, null]
            ],
            bass: [
                [D3, D3, null, D3, A3, A3, null, A3, D3, D3, null, D3, G3, G3, F3, F3],
                [D3, null, D3, null, A3, null, A3, null, D3, null, D3, null, E3, null, E3, null]
            ],
            chord: [D3, A3, D4, BB4]
        },
        {
            dur: BAR * 8, wave: 'triangle', vol: 0.08, drums: 'light', chordVol: 0.02,
            lead: [
                [null, null, null, null, null, null, null, null, D5, C5, BB4, A4, null, null, null, null],
                [null, null, null, null, D5, null, C5, null, BB4, null, A4, null, null, null, null, null]
            ],
            bass: [
                [D3, null, null, null, D3, null, null, null, A3, null, null, null, A3, null, null, null],
                [D3, null, D3, null, A3, null, A3, null, D3, null, D3, null, G3, null, G3, null]
            ],
            bell: [
                [D5, null, null, F5, null, A5, null, null, D6, null, A5, null, F5, null, D5, null]
            ],
            chord: [D3, A3, D4, C5]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.16, drums: 'full', echo: true, stabAt: [0, 4, 8, 12], chordVol: 0.025,
            lead: [
                [D5, D5, C5, D5, D5, D5, BB4, D5, D5, D5, C5, D5, A4, G4, BB4, G4],
                [G4, G4, A4, G4, BB4, BB4, C5, BB4, G4, G4, A4, G4, D5, C5, BB4, C5],
                [D5, BB4, D5, C5, BB4, D5, A4, G4, BB4, G4, A4, BB4, D5, C5, BB4, G4]
            ],
            bass: [
                [D3, D3, D3, D3, D3, D3, D3, D3, D3, D3, D3, D3, E3, E3, F3, F3],
                [D3, D3, F3, F3, D3, D3, G3, G3, F3, F3, E3, E3, D3, D3, F3, F3]
            ],
            bell: [
                [D6, null, null, null, null, A5, null, null, null, null, D6, null, null, null, A5, null]
            ],
            chord: [D3, A3, D4, BB4]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.12, drums: 'light', stabAt: [0], chordVol: 0.018,
            lead: [
                [D5, null, null, C5, null, BB4, null, null, A4, null, null, G4, null, F4, null, null]
            ],
            bass: [
                [D3, null, null, null, A3, null, null, null, D3, null, null, null, A3, null, null, null]
            ],
            chord: [D3, A3, D4, C5]
        },
        {
            dur: BAR * 8, wave: 'square', vol: 0.15, drums: 'full', echo: true, chordVol: 0.012,
            lead: [
                [D5, D5, C5, D5, D5, D5, BB4, D5, D5, D5, C5, D5, E5, D5, C5, D5],
                [BB4, BB4, C5, BB4, BB4, BB4, G4, BB4, BB4, C5, BB4, D5, C5, BB4, G4, A4]
            ],
            bass: [
                [D3, D3, D3, D3, D3, D3, D3, D3, D3, D3, D3, D3, E3, E3, F3, F3],
                [D3, D3, F3, D3, D3, D3, BB3, D3, D3, F3, D3, C4, F3, BB3, F3, C4]
            ],
            chord: [D3, A3, D4]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.12, drums: 'roll', riser: true, chordVol: 0.016,
            lead: [
                [D3, E3, F3, G3, A3, BB3, C4, D4, E4, F4, G4, A4, BB4, C5, D5, E5]
            ],
            bass: [
                [D3, null, D3, null, D3, null, D3, null, D3, null, D3, null, D3, null, D3, null]
            ],
            chord: [D3, A3, D4, BB4]
        },
        {
            dur: BAR * 8, wave: 'triangle', vol: 0.08, drums: 'light', chordVol: 0.02,
            lead: [
                [null, null, null, null, null, null, null, null, D5, C5, BB4, A4, null, null, null, null],
                [null, null, null, null, D5, null, C5, null, BB4, null, A4, null, null, null, null, null]
            ],
            bass: [
                [D3, null, null, null, D3, null, null, null, A3, null, null, null, A3, null, null, null],
                [D3, null, D3, null, A3, null, A3, null, D3, null, D3, null, G3, null, G3, null]
            ],
            bell: [
                [D5, null, null, F5, null, A5, null, null, D6, null, A5, null, F5, null, D5, null]
            ],
            chord: [D3, A3, D4, C5]
        },
        {
            dur: BAR * 3, wave: 'sine', vol: 0.06, drums: false, chordVol: 0.015,
            lead: [
                [D5, null, null, null, null, null, null, null, null, null, null, null, C5, null, null, null],
                [null, null, null, null, D5, null, null, null, null, null, null, null, null, null, G4, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                [D3, null, null, null, null, null, null, null, D3, null, null, null, null, null, null, null]
            ],
            bell: [
                [D5, null, null, null, null, null, null, null, A5, null, null, null, null, null, null, null]
            ],
            chord: [D3, A3, D4]
        }
    ]
];
