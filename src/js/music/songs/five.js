const songFive = [
    { name: "Friendship is Music", time: 122, bpm: 150 },
    [
        {
            start: 0,
            bpm: 75,
            patterns: [
                { t: "checker", odd:true },
            ]
        },
        {
            start: 1,
            bpm: 150,
            patterns: [
                { t: "pos",},
            ]
        },
        {
            start: 4,
            bpm: 75,
            patterns: [
                { t: "checker", odd:false },
            ]
        },
        {
            start: 4.5,
            bpm: 150,
            patterns: [
                { t: "pos",},
            ]
        },
        {
            start: 7,
            bpm: 75,
            patterns: [
                { t: "checker", odd:false },
                { t: "checker", odd:true },
            ]
        },
        {
            start: 13,
            bpm: 75,
            patterns: [
                { t: "area", r:[1,2,3],c:[1,2,3] },
            ]
        },
        {
            start: 14,
            bpm: 75,
            patterns: [
                { t: "pos" },
                { t: "random", i:5 },
            ]
        },
        {
            start: 19,
            bpm: 75,
            patterns: [
                { t: "random", i:20 },
                { t: "pos" },
            ]
        },
        {
            start: 25,
            bpm: 37.5,
            patterns: [
                { t: "col", i:[0,1,2] },
                { t: "col", i:[1,2,3] },
                { t: "col", i:[4,3,2] },
            ]
        },
        {
            start: 30,
            bpm: 150,
            patterns: [
                { t: "col", i:[0,1] },
                { t: "col", i:[2] },
                { t: "col", i:[3,4] },
            ]
        },
        {
            start: 32,
            bpm: 37.5,
            patterns: [
                { t: "row", i:[0,1,2] },
                { t: "row", i:[1,2,3] },
                { t: "row", i:[4,3,2] },
            ]
        },
        {
            start: 36,
            bpm: 150,
            patterns: [
                { t: "row", i:[0,1] },
                { t: "row", i:[2] },
                { t: "row", i:[3,4] },
            ]
        },
        {
            start: 38,
            bpm: 150,
            patterns: [
                { t: "pos" },
            ]
        },
        {
            start: 40,
            bpm: 75,
            patterns: [
                { t: "random", i:14 },
            ]
        },
        {
            start: 44,
            bpm: 75,
            patterns: [
                { t: "row", i:[4,2,0] },
                { t: "col", i:[4,2,0] },
                { t: "row", i:[1,3] },
                { t: "col", i:[1,3] },
            ]
        },
        {
            start: 48,
            bpm: 75,
            patterns: [
                { t: "random", i:14 },
            ]
        },
        {
            start: 52,
            bpm: 75,
            patterns: [
                { t: "row", i:[4,2,0] },
                { t: "col", i:[4,2,0] },
                { t: "row", i:[1,3] },
                { t: "col", i:[1,3] },
            ]
        },
        {
            start: 57,
            bpm: 75,
            patterns: [
                { t: "random", i:14 },
            ]
        },
        {
            start: 62,
            bpm: 150,
            patterns: [
                { t: "row", i:0 },
                { t: "row", i:1 },
                { t: "row", i:2 },
                { t: "row", i:3 },
                { t: "row", i:4 },
                { t: "row", i:3 },
                { t: "row", i:2 },
                { t: "row", i:1 },
                { t: "row", i:0 },
                { t: "col", i:0 },
                { t: "col", i:1 },
                { t: "col", i:2 },
                { t: "col", i:3 },
                { t: "col", i:4 },
                { t: "col", i:3 },
                { t: "col", i:2 },
                { t: "col", i:1 },
                { t: "col", i:0 },
            ]
        },
        {
            start: 70,
            bpm: 150,
            patterns: [
                { t: "cross", r:0, c:0 },
                { t: "cross", r:1, c:1 },
                { t: "cross", r:2, c:2 },
                { t: "cross", r:3, c:3 },
                { t: "cross", r:4, c:4 },
                { t: "cross", r:4, c:4 },
                { t: "cross", r:3, c:3 },
                { t: "cross", r:2, c:2 },
                { t: "cross", r:1, c:1 },
                { t: "cross", r:0, c:0 },
            ]
        },
        {
            start: 77,
            bpm: 75,
            patterns: [
                { t: "pos" },
                { t: "random", i:20 },
            ]
        },
        {
            start: 87,
            bpm: 150,
            patterns: [
                { t: "pos" },
            ]
        },
        {
            start: 90,
            bpm: 75,
            patterns: [
                { t: "row", i:[4,3,2] },
                { t: "row", i:[0,1,2] },
                { t: "col", i:[4,3,2] },
                { t: "col", i:[0,1,2] },
            ]
        },
        {
            start: 97,
            bpm: 75,
            patterns: [
                { t: "row", i:[4,3,2] },
                { t: "row", i:[4,2,0] },
                { t: "row", i:[0,1,2] },
                { t: "col", i:[4,2,0] },
                { t: "col", i:[4,3,2] },
                { t: "row", i:[1,3] },
                { t: "col", i:[0,1,2] },
                { t: "col", i:[1,3] },
            ]
        },
        {
            start: 115,
            bpm: 150,
            patterns: [
                { t: "cross", r:0, c:0 },
                { t: "cross", r:1, c:1 },
                { t: "cross", r:2, c:2 },
                { t: "cross", r:3, c:3 },
                { t: "cross", r:4, c:4 },
                { t: "cross", r:0, c:4 },
                { t: "cross", r:1, c:3 },
                { t: "cross", r:2, c:2 },
                { t: "cross", r:3, c:1 },
                { t: "cross", r:4, c:0 },
            ]
        },
    ],
    [
        {
            dur: BAR * 2, wave: 'sawtooth', vol: 0.16, drums: 'half', stabAt: [0, 6, 10], chordVol: 0.04,
            lead: [
                [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bass: [
                [D3, null, null, null, D3, null, null, null, null, null, D3, null, null, null, null, null]
            ],
            chord: [D3, A3, D4, F4]
        },
        {
            dur: BAR * 2, wave: 'sawtooth', vol: 0.16, drums: 'half', stabAt: [0, 6, 10], chordVol: 0.04,
            lead: [
                [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bass: [
                [BB3, null, null, null, BB3, null, null, null, null, null, BB3, null, null, null, null, null]
            ],
            chord: [BB3, F4, BB4, D5]
        },
        {
            dur: BAR * 2, wave: 'sawtooth', vol: 0.16, drums: 'half', stabAt: [0, 6, 10], chordVol: 0.04,
            lead: [
                [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bass: [
                [F3, null, null, null, F3, null, null, null, null, null, F3, null, null, null, null, null]
            ],
            chord: [F3, C4, F4, A4]
        },
        {
            dur: BAR * 2, wave: 'sawtooth', vol: 0.16, drums: 'roll', stabAt: [0, 4, 8, 12], chordVol: 0.05,
            lead: [
                [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bass: [
                [A3, null, A3, null, A3, null, A3, null, A3, null, A3, null, A3, null, A3, null]
            ],
            chord: [A3, E4, A4]
        },
        {
            dur: BAR * 4, wave: 'square', vol: 0.14, drums: 'light',
            lead: [
                [null, null, null, null, null, null, null, null, D5, null, null, null, C5, null, null, null]
            ],
            bass: [
                [D3, D3, null, D3, null, F3, null, D3, null, null, G3, null, F3, null, D3, null],
                [D3, D3, null, D3, null, F3, null, D3, null, null, A3, null, G3, null, F3, null]
            ],
            chord: [D3, A3]
        },
        {
            dur: BAR * 4, wave: 'square', vol: 0.14, drums: 'half', stabAt: [0], chordVol: 0.03,
            lead: [
                [F5, null, null, null, D5, null, null, null, C5, null, null, null, A4, null, null, null]
            ],
            bass: [
                [BB3, BB3, null, BB3, null, C4, null, BB3, null, null, D4, null, C4, null, BB3, null]
            ],
            chord: [BB3, F4, BB4]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.17, drums: 'full', stabAt: [0, 3, 6, 10], chordVol: 0.06,
            lead: [
                [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bass: [
                [D3, null, null, D3, null, null, D3, null, null, null, D3, null, null, null, null, null]
            ],
            chord: [D3, A3, D4]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.17, drums: 'full', stabAt: [0, 3, 6, 10], chordVol: 0.06,
            lead: [
                [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bass: [
                [C4, null, null, C4, null, null, C4, null, null, null, C4, null, null, null, null, null]
            ],
            chord: [C4, G4, C5]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.17, drums: 'full', stabAt: [0, 3, 6, 10], chordVol: 0.06,
            lead: [
                [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bass: [
                [BB3, null, null, BB3, null, null, BB3, null, null, null, BB3, null, null, null, null, null]
            ],
            chord: [BB3, F4, BB4]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.17, drums: 'roll', stabAt: [0, 4, 8, 12], chordVol: 0.06,
            lead: [
                [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bass: [
                [A3, null, A3, null, A3, null, A3, null, A3, null, A3, null, A3, null, A3, null]
            ],
            chord: [A3, E4, A4]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.17, drums: 'full', stabAt: [0, 3, 6, 10], chordVol: 0.06,
            lead: [
                [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bass: [
                [D3, null, null, D3, null, null, D3, null, null, null, D3, null, null, null, null, null]
            ],
            chord: [D3, A3, D4]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.17, drums: 'full', stabAt: [0, 3, 6, 10], chordVol: 0.06,
            lead: [
                [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bass: [
                [C4, null, null, C4, null, null, C4, null, null, null, C4, null, null, null, null, null]
            ],
            chord: [C4, G4, C5]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.17, drums: 'full', stabAt: [0, 3, 6, 10], chordVol: 0.06,
            lead: [
                [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bass: [
                [BB3, null, null, BB3, null, null, BB3, null, null, null, BB3, null, null, null, null, null]
            ],
            chord: [BB3, F4, BB4]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.18, drums: 'full', stabAt: [0, 2, 4, 6, 8, 10, 12, 14], chordVol: 0.07,
            lead: [
                [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bass: [
                [A3, A3, A3, A3, A3, A3, A3, A3, A3, A3, A3, A3, A3, A3, A3, A3]
            ],
            chord: [A3, E4, A4]
        },
        {
            dur: BAR * 2, wave: 'sawtooth', vol: 0.16, drums: 'full', echo: true, stabAt: [0, 8], chordVol: 0.05,
            lead: [
                [D5, null, F5, null, A5, null, F5, null, C5, null, D5, null, F5, null, D5, null]
            ],
            bass: [
                [D3, D3, D3, D3, F3, F3, F3, F3, D3, D3, D3, D3, F3, F3, F3, F3]
            ],
            chord: [D3, A3, D4, F4]
        },
        {
            dur: BAR * 2, wave: 'sawtooth', vol: 0.16, drums: 'full', echo: true, stabAt: [0, 8], chordVol: 0.05,
            lead: [
                [BB4, null, D5, null, F5, null, D5, null, A4, null, BB4, null, D5, null, BB4, null]
            ],
            bass: [
                [BB3, BB3, BB3, BB3, D4, D4, D4, D4, BB3, BB3, BB3, BB3, D4, D4, D4, D4]
            ],
            chord: [BB3, F4, BB4, D5]
        },
        {
            dur: BAR * 2, wave: 'sawtooth', vol: 0.16, drums: 'full', echo: true, stabAt: [0, 8], chordVol: 0.05,
            lead: [
                [F5, null, A5, null, D6, null, A5, null, F5, null, F5, null, D5, null, C5, null]
            ],
            bass: [
                [F3, F3, F3, F3, A3, A3, A3, A3, F3, F3, F3, F3, A3, A3, A3, A3]
            ],
            chord: [F3, C4, F4, A4]
        },
        {
            dur: BAR * 2, wave: 'sawtooth', vol: 0.16, drums: 'half', echo: true, stabAt: [0, 4, 8, 12], chordVol: 0.05,
            lead: [
                [E5, null, null, null, D5, null, null, null, C5, null, null, null, A4, null, null, null]
            ],
            bass: [
                [C4, null, null, null, C4, null, null, null, C4, null, null, null, C4, null, null, null]
            ],
            chord: [C4, G4, C5, E5]
        },
        {
            dur: BAR * 2, wave: 'sawtooth', vol: 0.16, drums: 'full', echo: true, stabAt: [0, 8], chordVol: 0.05,
            lead: [
                [D5, null, F5, null, A5, null, F5, null, C5, null, D5, null, F5, null, D5, null]
            ],
            bass: [
                [D3, D3, D3, D3, F3, F3, F3, F3, D3, D3, D3, D3, F3, F3, F3, F3]
            ],
            chord: [D3, A3, D4, F4]
        },
        {
            dur: BAR * 2, wave: 'sawtooth', vol: 0.16, drums: 'full', echo: true, stabAt: [0, 8], chordVol: 0.05,
            lead: [
                [BB4, null, D5, null, F5, null, D5, null, A4, null, BB4, null, D5, null, BB4, null]
            ],
            bass: [
                [BB3, BB3, BB3, BB3, D4, D4, D4, D4, BB3, BB3, BB3, BB3, D4, D4, D4, D4]
            ],
            chord: [BB3, F4, BB4, D5]
        },
        {
            dur: BAR * 2, wave: 'sawtooth', vol: 0.16, drums: 'full', echo: true, stabAt: [0, 8], chordVol: 0.05,
            lead: [
                [F5, null, A5, null, D6, null, A5, null, F5, null, F5, null, D5, null, C5, null]
            ],
            bass: [
                [F3, F3, F3, F3, A3, A3, A3, A3, F3, F3, F3, F3, A3, A3, A3, A3]
            ],
            chord: [F3, C4, F4, A4]
        },
        {
            dur: BAR * 2, wave: 'sawtooth', vol: 0.16, drums: 'fade', echo: true, stabAt: [0], chordVol: 0.05,
            lead: [
                [E5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bass: [
                [A3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            chord: [A3, E4, A4]
        },
        {
            dur: BAR * 4, wave: 'sine', vol: 0.12, drums: false, stabAt: [0], chordVol: 0.03,
            lead: [
                [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bell: [
                [D5, null, null, null, A5, null, null, null, F5, null, null, null, D5, null, null, null],
                [E5, null, null, null, A5, null, null, null, F5, null, null, null, E5, null, null, null]
            ],
            chord: [D3, A3, D4]
        },
        {
            dur: BAR * 4, wave: 'sine', vol: 0.12, drums: 'half', stabAt: [0, 8], chordVol: 0.04,
            lead: [
                [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bass: [
                [BB3, null, null, null, null, null, null, null, A3, null, null, null, null, null, null, null]
            ],
            bell: [
                [F5, null, null, null, D6, null, null, null, A5, null, null, null, F5, null, null, null]
            ],
            chord: [BB3, F4, BB4]
        },
        {
            dur: BAR * 2, wave: 'square', vol: 0.15, drums: 'roll', stabAt: [0, 4, 8, 12], chordVol: 0.04,
            lead: [
                [D5, null, A4, null, D5, null, A4, null, D5, null, A4, null, D5, null, A4, null]
            ],
            bass: [
                [D3, D3, D3, D3, D3, D3, D3, D3, D3, D3, D3, D3, D3, D3, D3, D3]
            ],
            chord: [D3, A3, D4]
        },
        {
            dur: BAR * 2, wave: 'square', vol: 0.16, drums: 'roll', stabAt: [0, 4, 8, 12], chordVol: 0.05,
            lead: [
                [F5, null, C5, null, F5, null, C5, null, F5, null, C5, null, F5, null, C5, null]
            ],
            bass: [
                [F3, F3, F3, F3, F3, F3, F3, F3, F3, F3, F3, F3, F3, F3, F3, F3]
            ],
            chord: [F3, C4, F4]
        },
        {
            dur: BAR * 2, wave: 'square', vol: 0.17, drums: 'roll', stabAt: [0, 4, 8, 12], chordVol: 0.06,
            lead: [
                [A4, null, D5, null, A4, null, D5, null, A4, null, D5, null, A4, null, D5, null]
            ],
            bass: [
                [G3, G3, G3, G3, G3, G3, G3, G3, G3, G3, G3, G3, G3, G3, G3, G3]
            ],
            chord: [G3, D4, G4]
        },
        {
            dur: BAR * 2, wave: 'square', vol: 0.18, drums: 'roll', stabAt: [0, 2, 4, 6, 8, 10, 12, 14], chordVol: 0.07,
            lead: [
                [A5, A5, E5, E5, A5, A5, E5, E5, A5, A5, E5, E5, A5, A5, E5, E5]
            ],
            bass: [
                [A3, A3, A3, A3, A3, A3, A3, A3, A3, A3, A3, A3, A3, A3, A3, A3]
            ],
            chord: [A3, E4, A4]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.17, drums: 'full', stabAt: [0, 8], chordVol: 0.05,
            lead: [
                [D6, A5, F5, D5, F5, D5, C5, A4, D5, F5, A5, D6, A5, F5, D5, C5]
            ],
            bass: [
                [D3, D3, D3, D3, F3, F3, F3, F3, G3, G3, G3, G3, F3, F3, F3, F3]
            ],
            chord: [D3, A3, D4, F4]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.17, drums: 'full', stabAt: [0, 8], chordVol: 0.05,
            lead: [
                [D6, A5, F5, D5, F5, D5, C5, A4, BB4, C5, D5, F5, A5, F5, D5, C5]
            ],
            bass: [
                [BB3, BB3, BB3, BB3, C4, C4, C4, C4, D4, D4, D4, D4, C4, C4, C4, C4]
            ],
            chord: [BB3, F4, BB4, D5]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.18, drums: 'full', echo: true, stabAt: [0, 3, 6, 10], chordVol: 0.07,
            lead: [
                [D6, null, null, A5, null, null, F5, null, null, null, D5, null, null, null, null, null]
            ],
            bass: [
                [D3, null, null, D3, null, null, D3, null, null, null, D3, null, null, null, null, null]
            ],
            chord: [D3, A3, D4, F4]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.18, drums: 'full', echo: true, stabAt: [0, 3, 6, 10], chordVol: 0.07,
            lead: [
                [C5, null, null, G4, null, null, E4, null, null, null, C4, null, null, null, null, null]
            ],
            bass: [
                [C4, null, null, C4, null, null, C4, null, null, null, C4, null, null, null, null, null]
            ],
            chord: [C4, G4, C5, E5]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.18, drums: 'full', echo: true, stabAt: [0, 3, 6, 10], chordVol: 0.07,
            lead: [
                [BB5, null, null, F5, null, null, D5, null, null, null, BB4, null, null, null, null, null]
            ],
            bass: [
                [BB3, null, null, BB3, null, null, BB3, null, null, null, BB3, null, null, null, null, null]
            ],
            chord: [BB3, F4, BB4, D5]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.18, drums: 'full', echo: true, stabAt: [0, 3, 6, 10], chordVol: 0.07,
            lead: [
                [A5, null, null, E5, null, null, A4, null, null, null, E4, null, null, null, null, null]
            ],
            bass: [
                [A3, null, null, A3, null, null, A3, null, null, null, A3, null, null, null, null, null]
            ],
            chord: [A3, E4, A4]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.18, drums: 'full', echo: true, stabAt: [0, 3, 6, 10], chordVol: 0.07,
            lead: [
                [D6, null, null, A5, null, null, F5, null, null, null, D5, null, null, null, null, null]
            ],
            bass: [
                [D3, null, null, D3, null, null, D3, null, null, null, D3, null, null, null, null, null]
            ],
            chord: [D3, A3, D4, F4]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.18, drums: 'full', echo: true, stabAt: [0, 3, 6, 10], chordVol: 0.07,
            lead: [
                [F5, null, null, C5, null, null, A4, null, null, null, F4, null, null, null, null, null]
            ],
            bass: [
                [F3, null, null, F3, null, null, F3, null, null, null, F3, null, null, null, null, null]
            ],
            chord: [F3, C4, F4, A4]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.18, drums: 'full', echo: true, stabAt: [0, 3, 6, 10], chordVol: 0.07,
            lead: [
                [G5, null, null, D5, null, null, BB4, null, null, null, G4, null, null, null, null, null]
            ],
            bass: [
                [G3, null, null, G3, null, null, G3, null, null, null, G3, null, null, null, null, null]
            ],
            chord: [G3, D4, G4, BB4]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.18, drums: 'roll', echo: true, stabAt: [0, 2, 4, 6, 8, 10, 12, 14], chordVol: 0.07,
            lead: [
                [A5, A5, A5, A5, A5, A5, A5, A5, A5, A5, A5, A5, A5, A5, A5, A5]
            ],
            bass: [
                [A3, A3, A3, A3, A3, A3, A3, A3, A3, A3, A3, A3, A3, A3, A3, A3]
            ],
            chord: [A3, E4, A4]
        },
        {
            dur: BAR * 4, wave: 'square', vol: 0.12, drums: 'fade', stabAt: [0], chordVol: 0.05,
            lead: [
                [D5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            chord: [D3, A3, D4]
        }
    ]
];
