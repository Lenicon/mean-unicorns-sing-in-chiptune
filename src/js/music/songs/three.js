const songThree = [
    { name: "Manic Pony Magic", time: 120, bpm: 200 },
    [
        {
            start: 0,
            bpm: 32.5,
            patterns: [
                { t: "corners" },
                { t: "center" },
                { t: "cross", r: [0, 4], c: [0, 4] }
            ]
        },
    ],
    [
        {
            dur: BAR * 8, wave: 'sine', vol: 0.18, drums: false, stabAt: [15], noPad: true, chordVol: 0.035,
            lead: [
                [D4, null, null, null, EB4, null, null, null, null, null, FS4, null, null, null, null, null],
                [null, null, D4, null, null, null, C4, null, null, null, BB3, null, null, null, null, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            chord: [D3]
        },
        {
            dur: BAR * 8, wave: 'triangle', vol: 0.18, drums: 'light', stabAt: [15], noPad: true,
            lead: [
                [D4, null, EB4, null, null, D4, null, C4, null, BB3, null, null, A3, null, null, null],
                [FS4, null, G4, null, null, FS4, null, EB4, null, D4, null, null, C4, null, null, null]
            ],
            bass: [
                [D3, null, null, null, D3, null, null, null, D3, null, null, null, D3, null, null, null],
                [A3, null, null, null, A3, null, null, null, BB3, null, null, null, A3, null, null, null]
            ],
            chord: [D3, FS3]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.18, drums: 'roll', stabAt: [0], noPad: true, riser: true,
            lead: [
                [D4, EB4, FS4, G4, A4, BB4, C5, D5, EB5, FS5, G5, A5, BB5, A5, G5, FS5]
            ],
            bass: [
                [D3, null, D3, null, D3, null, D3, null, D3, null, D3, null, D3, null, D3, null]
            ],
            chord: [D3, FS3, A3]
        },
        {
            dur: BAR * 4, wave: 'square', vol: 0.26, drums: 'full', echo: true, stabAt: [0, 8], noPad: true,
            lead: [
                [D5, D5, AB4, D5, D5, D5, FS4, D5, D5, D5, AB4, D5, C5, BB4, AB4, BB4],
                [D5, D5, C5, D5, FS5, D5, BB4, D5, D5, D5, AB4, D5, A4, G4, BB4, A4]
            ],
            bass: [
                [D3, D3, D3, D3, D3, D3, D3, D3, AB3, AB3, AB3, AB3, AB3, AB3, AB3, AB3],
                [BB3, BB3, BB3, BB3, FS3, FS3, FS3, FS3, G3, G3, G3, G3, A3, A3, A3, A3]
            ],
            bell: [
                [D6, null, null, AB5, null, null, FS5, null, null, AB5, null, null, D6, null, null, null]
            ],
            chord: [D3, FS3, A3, C4]
        },
        {
            dur: BAR * 8, wave: 'triangle', vol: 0.18, drums: 'half', noPad: true,
            lead: [
                [D5, null, C5, null, BB4, null, A4, null, BB4, null, C5, null, D5, null, null, null],
                [A4, null, G4, null, FS4, null, G4, null, A4, null, BB4, null, C5, null, D5, null]
            ],
            bass: [
                [D3, null, null, D3, null, null, A3, null, null, A3, null, null, BB3, null, null, null],
                [FS3, null, null, FS3, null, null, G3, null, null, G3, null, null, A3, null, null, null]
            ]
        },
        {
            dur: BAR * 8, wave: 'triangle', vol: 0.15, drums: 'light',
            lead: [
                [D4, null, null, A4, null, null, D5, null, null, A4, null, null, D4, null, null, null],
                [EB4, null, null, BB4, null, null, EB5, null, null, BB4, null, null, EB4, null, null, null]
            ],
            bass: [
                [D3, null, A3, null, D3, null, A3, null, D3, null, A3, null, D3, null, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.24, drums: 'roll', riser: true,
            lead: [
                [D4, EB4, FS4, G4, A4, BB4, C5, D5, EB5, FS5, G5, A5, BB5, C6, D6, EB6]
            ],
            bass: [
                [D3, D3, null, null, D3, D3, null, null, D4, D4, null, null, D4, D4, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'square', vol: 0.32, drums: 'full', echo: true, stabAt: [0, 2, 4, 6, 8, 10, 12, 14], noPad: true,
            lead: [
                [D5, D5, AB4, D5, FS5, D5, BB4, D5, D5, D5, C6, D5, A4, G4, BB4, C5],
                [D6, D6, C6, D6, A5, D6, FS5, D6, D5, D5, C5, D5, BB4, A4, G4, A4]
            ],
            bass: [
                [D3, D3, D3, D3, D3, D3, D3, D3, AB3, AB3, AB3, AB3, AB3, AB3, AB3, AB3],
                [BB3, BB3, FS3, FS3, G3, G3, C4, C4, D3, D3, FS3, FS3, A3, A3, BB3, BB3]
            ],
            bell: [
                [D6, null, AB5, null, FS5, null, AB5, null, D6, null, AB5, null, FS5, null, AB5, null]
            ],
            chord: [D3, FS3, A3, C4]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.24, drums: 'roll', riser: true,
            lead: [
                [D4, EB4, FS4, G4, A4, BB4, C5, D5, EB5, FS5, G5, A5, BB5, C6, D6, EB6]
            ],
            bass: [
                [D3, D3, null, null, D3, D3, null, null, D4, D4, null, null, D4, D4, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'square', vol: 0.32, drums: 'full', echo: true, stabAt: [0, 2, 4, 6, 8, 10, 12, 14], noPad: true,
            lead: [
                [D5, D5, AB4, D5, FS5, D5, BB4, D5, D5, D5, C6, D5, A4, G4, BB4, C5],
                [D6, D6, C6, D6, A5, D6, FS5, D6, D5, D5, C5, D5, BB4, A4, G4, A4]
            ],
            bass: [
                [D3, D3, D3, D3, D3, D3, D3, D3, AB3, AB3, AB3, AB3, AB3, AB3, AB3, AB3],
                [BB3, BB3, FS3, FS3, G3, G3, C4, C4, D3, D3, FS3, FS3, A3, A3, BB3, BB3]
            ],
            bell: [
                [D6, null, AB5, null, FS5, null, AB5, null, D6, null, AB5, null, FS5, null, AB5, null]
            ],
            chord: [D3, FS3, A3, C4]
        },
        {
            dur: BAR * 8, wave: 'sine', vol: 0.09, drums: 'light',
            lead: [
                [null, null, D4, null, null, null, AB4, null, null, null, FS4, null, null, null, G4, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, AB3, null, null, null, null, null, null, null]
            ],
            bell: [
                [A4, null, null, null, D5, null, null, null, FS4, null, null, null, A4, null, null, null]
            ]
        },
        {
            dur: BAR * 8, wave: 'triangle', vol: 0.14, drums: 'light', chordVol: 0.05,
            lead: [
                [D4, null, null, null, AB4, null, null, null, null, null, FS4, null, null, null, null, null],
                [null, null, D4, null, null, null, C4, null, null, null, AB3, null, null, null, null, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bell: [
                [A4, null, null, null, AB4, null, null, null, FS4, null, null, null, A4, null, null, null]
            ],
            chord: [D3, FS3, AB3]
        },
        {
            dur: BAR * 8, wave: 'triangle', vol: 0.2, drums: 'half',
            lead: [
                [D5, null, C5, null, BB4, null, A4, null, BB4, null, C5, null, D5, null, EB5, null],
                [FS5, null, EB5, null, D5, null, C5, null, BB4, null, A4, null, G4, null, FS4, null]
            ],
            bass: [
                [D3, null, null, D3, null, null, A3, null, null, A3, null, null, BB3, null, null, null],
                [FS3, null, null, FS3, null, null, G3, null, null, G3, null, null, A3, null, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.26, drums: 'roll', riser: true,
            lead: [
                [D4, EB4, FS4, G4, A4, BB4, C5, D5, EB5, FS5, G5, A5, BB5, C6, D6, EB6]
            ],
            bass: [
                [D3, D3, null, null, D3, D3, null, null, D4, D4, null, null, D4, D4, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.4, drums: 'full', echo: true, stabAt: [0, 4, 8, 12], noPad: true,
            lead: [
                [D5, D5, AB4, D5, FS5, D5, BB4, D5, D5, D5, C6, D5, A4, G4, BB4, C5],
                [D6, D6, C6, D6, A5, D6, FS5, D6, D5, D5, C5, D5, BB4, A4, G4, A4],
                [FS5, FS5, EB5, FS5, D5, FS5, C5, FS5, A4, A4, G4, A4, FS4, EB4, D4, D4]
            ],
            bass: [
                [D3, D3, D3, D3, D3, D3, D3, D3, AB3, AB3, AB3, AB3, AB3, AB3, AB3, AB3],
                [BB3, BB3, FS3, FS3, G3, G3, C4, C4, D3, D3, FS3, FS3, A3, A3, BB3, BB3],
                [D3, D3, D3, D3, AB3, AB3, AB3, AB3, BB3, BB3, BB3, BB3, G3, G3, A3, A3]
            ],
            bell: [
                [D6, null, AB5, null, FS5, null, AB5, null, D6, null, AB5, null, FS5, null, AB5, null]
            ],
            chord: [D3, FS3, A3, C4]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.36, drums: 'full', echo: true, stabAt: [0, 1, 4, 5, 8, 9, 12, 13], noPad: true,
            lead: [
                [D5, AB4, D5, AB4, FS5, C5, FS5, C5, BB4, EB5, BB4, EB5, D5, AB4, D5, AB4],
                [D6, AB5, D6, AB5, FS5, C6, FS5, C6, D6, AB5, D6, AB5, FS5, C6, FS5, C6]
            ],
            bass: [
                [D3, AB3, D3, AB3, D3, AB3, D3, AB3, BB3, FS3, BB3, FS3, BB3, FS3, BB3, FS3]
            ],
            bell: [
                [D6, AB5, D6, AB5, FS5, C6, FS5, C6, D6, AB5, D6, AB5, FS5, C6, FS5, C6]
            ],
            chord: [D3, AB3]
        },
        {
            dur: BAR * 8, wave: 'square', vol: 0.2, drums: 'fade',
            lead: [
                [D5, null, null, C5, null, BB4, null, null, A4, null, null, G4, null, FS4, null, null],
                [D4, null, null, null, A3, null, null, null, D3, null, null, null, null, null, null, null],
                [AB4, null, null, null, null, null, null, null, D4, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, AB3, null, null, null, null, null, null, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, AB3, null, null, null, null, null, null, null],
                [D3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bell: [
                [D6, null, null, null, AB5, null, null, null, FS5, null, null, null, D5, null, null, null]
            ]
        }
    ]
];
