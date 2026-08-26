const songSix = [
    { name: "Minute Maiden", time: 60, bpm: 260, warn: 3 },
    [
        {
            start: 0,
            bpm: 130,
            patterns: [
                { t: "corners" },
                { t: "center" },
                { t: "cross", r: [0, 4], c: [0, 4] },
                // { t: "area", r: [1,2,3], c: [1,2,3] },
            ]
        },
    ],
    [
        {
            dur: BAR * 8, wave: 'square', vol: 0.12, drums: 'light',
            lead: [
                [A4, null, C5, null, E5, null, A5, null, E5, null, C5, null, A4, null, C5, null],
                [B4, null, D5, null, E5, null, GS5, null, E5, null, D5, null, B4, null, GS4, null],
                [C5, null, E5, null, A5, null, C6, null, B5, null, G5, null, E5, null, C5, null],
                [D5, C5, B4, A4, GS4, F4, E4, D4, C4, B3, A3, GS3, A3, B3, C4, E4]
            ],
            bass: [
                [A2, null, null, null, A2, null, null, null, C3, null, null, null, E3, null, null, null],
                [E2, null, null, null, E2, null, null, null, GS2, null, null, null, B2, null, null, null]
            ]
        },
        {
            dur: BAR * 8, wave: 'sawtooth', vol: 0.18, drums: 'full',
            lead: [
                [A4, C5, E5, A5, C6, A5, E5, C5, B4, D5, F5, B5, D6, B5, F5, D5],
                [C5, E5, A5, C6, E6, C6, A5, E5, D5, F5, A5, D6, E5, GS5, B5, E6]
            ],
            bass: [
                [A2, null, A3, A2, C3, null, C4, C3, B2, null, B3, B2, D3, null, D4, D3],
                [C3, null, C4, C3, E3, null, E4, E3, D3, null, D4, D3, E3, null, E4, E3]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.2, drums: 'full',
            lead: [
                [F5, D5, B4, GS4, F4, GS4, B4, D5, E5, D5, B4, GS4, E4, GS4, B4, E5],
                [A5, E5, C5, A4, C5, E5, A5, C6, B5, A5, GS5, F5, E5, D5, C5, B4]
            ],
            bass: [
                [F2, F2, F3, F2, D2, D2, D3, D2, E2, E2, E3, E2, GS2, GS2, B2, GS2],
                [A2, A2, C3, A2, E3, E3, A3, A3, E2, E2, GS2, GS2, B2, B2, E3, E3]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.19, drums: 'roll',
            lead: [
                [A4, C5, E5, A5, D5, F5, A5, D6, F5, A5, D6, F6, E5, GS5, B5, E6]
            ],
            bass: [
                [A2, A2, A2, A2, D2, D2, D2, D2, F2, F2, F2, F2, E2, E2, E2, E2]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.19, drums: 'roll',
            lead: [
                [A5, E5, C5, A5, F5, D5, A5, F5, E5, GS5, B5, E6, A5, C6, E6, A6]
            ],
            bass: [
                [A2, A2, C3, A2, D2, D2, F2, D2, E2, E2, GS2, E2, A2, A2, C3, A2]
            ]
        },
        {
            dur: BAR * 4, wave: 'square', vol: 0.2, drums: 'full',
            lead: [
                [A5, null, A5, C6, E6, null, E6, C6, B5, null, B5, D6, F6, null, F6, D6],
                [C6, null, C6, E6, A6, null, A6, E6, B5, GS5, E5, GS5, B5, E6, GS6, E6]
            ],
            bass: [
                [A2, null, A2, A2, C3, null, C3, C3, B2, null, B2, B2, D3, null, D3, D3],
                [C3, null, C3, C3, E3, null, E3, E3, E2, E2, GS2, GS2, B2, B2, E3, E3]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.22, drums: 'full',
            lead: [
                [A5, C6, E6, A6, E6, C6, A5, C6, D6, F6, A6, D7, A6, F6, D6, F6],
                [B5, D6, F6, B6, F6, D6, B5, D6, E6, GS6, B6, E7, B6, GS6, E6, GS6]
            ],
            bass: [
                [A2, A2, A3, A2, A2, A2, C3, A2, D2, D2, D3, D2, D2, D2, F2, D2],
                [B2, B2, B3, B2, B2, B2, D3, B2, E2, E2, E3, E2, GS2, GS2, B2, GS2]
            ]
        },
        {
            dur: BAR * 4, wave: 'square', vol: 0.2, drums: 'full',
            lead: [
                [A5, null, A5, C6, E6, null, E6, C6, B5, null, B5, D6, F6, null, F6, D6],
                [C6, null, C6, E6, A6, null, A6, E6, B5, GS5, E5, GS5, B5, E6, GS6, E6]
            ],
            bass: [
                [A2, null, A2, A2, C3, null, C3, C3, B2, null, B2, B2, D3, null, D3, D3],
                [C3, null, C3, C3, E3, null, E3, E3, E2, E2, GS2, GS2, B2, B2, E3, E3]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.22, drums: 'full',
            lead: [
                [A5, C6, E6, A6, E6, C6, A5, C6, D6, F6, A6, D7, A6, F6, D6, F6],
                [B5, D6, F6, B6, F6, D6, B5, D6, E6, GS6, B6, E7, B6, GS6, E6, GS6]
            ],
            bass: [
                [A2, A2, A3, A2, A2, A2, C3, A2, D2, D2, D3, D2, D2, D2, F2, D2],
                [B2, B2, B3, B2, B2, B2, D3, B2, E2, E2, E3, E2, GS2, GS2, B2, GS2]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.22, drums: 'roll',
            lead: [
                [null, E6, C6, E6, A6, E6, C6, E6, G6, E6, C6, E6, F6, D6, A5, D6],
                [E6, B5, GS5, B5, E6, B5, GS5, B5, A6, E6, C6, A5, E5, C5, A4, null]
            ],
            bass: [
                [A2, A2, C3, A2, E3, A2, C3, A2, D2, D2, F2, D2, A2, A2, D3, A2],
                [E2, E2, GS2, E2, B2, E2, GS2, E2, A2, A2, C3, A2, E3, A2, C3, A2]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.2, drums: 'full',
            lead: [
                [F5, D5, B4, GS4, F4, GS4, B4, D5, E5, D5, B4, GS4, E4, GS4, B4, E5],
                [A5, E5, C5, A4, C5, E5, A5, C6, B5, A5, GS5, F5, E5, D5, C5, B4]
            ],
            bass: [
                [F2, F2, F3, F2, D2, D2, D3, D2, E2, E2, E3, E2, GS2, GS2, B2, GS2],
                [A2, A2, C3, A2, E3, E3, A3, A3, E2, E2, GS2, GS2, B2, B2, E3, E3]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.22, drums: 'roll',
            lead: [
                [null, E6, C6, E6, A6, E6, C6, E6, G6, E6, C6, E6, F6, D6, A5, D6],
                [E6, B5, GS5, B5, E6, B5, GS5, B5, A6, E6, C6, A5, E5, C5, A4, null]
            ],
            bass: [
                [A2, A2, C3, A2, E3, A2, C3, A2, D2, D2, F2, D2, A2, A2, D3, A2],
                [E2, E2, GS2, E2, B2, E2, GS2, E2, A2, A2, C3, A2, E3, A2, C3, A2]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.2, drums: 'full',
            lead: [
                [F5, D5, B4, GS4, F4, GS4, B4, D5, E5, D5, B4, GS4, E4, GS4, B4, E5],
                [A5, E5, C5, A4, C5, E5, A5, C6, B5, A5, GS5, F5, E5, D5, C5, B4]
            ],
            bass: [
                [F2, F2, F3, F2, D2, D2, D3, D2, E2, E2, E3, E2, GS2, GS2, B2, GS2],
                [A2, A2, C3, A2, E3, E3, A3, A3, E2, E2, GS2, GS2, B2, B2, E3, E3]
            ]
        },
        {
            dur: BAR * 4, wave: 'square', vol: 0.15, drums: 'fade',
            lead: [
                [B4, A4, G4, F4, E4, G4, A4, B4, CS5, null, null, null, null, null, null, null]
            ],
            bass: [
                [A2, A2, C3, A2, E2, E2, GS2, E2, A1, null, null, null, null, null, null, null]
            ]
        },
        {
            dur: BAR * 1, wave: 'sawtooth', vol: 0.18, drums: 'roll',
            lead: [
                [B4, BB4, A4, GS4, G4, FS4, F4, E4, DS4, D4, C4, BB3, A3, G3, F3, E3],
            ],
            bass: [
                [A4, GS4, G4, FS4, F4, E4, DS4, D4, C4, BB3, A3, G3, F3, E3, D3, A2],
            ]
        }
    ]
];
