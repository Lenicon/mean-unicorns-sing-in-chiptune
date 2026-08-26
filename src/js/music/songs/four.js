const songFour = [
    { name: "Unicorning Around", time: 156, bpm: 240 },
    [
        {
            start: 0,
            bpm: 120,
            patterns: [
                { t: "corners" },
                { t: "center" },
                { t: "cross", r: [0, 4], c: [0, 4] }
            ]
        },
    ],
    [
        {
            dur: BAR * 4, wave: 'square', vol: 0.12, drums: false,
            lead: [
                [D5, null, null, null, A4, null, null, null, F4, null, null, null, A4, null, null, null],
                [D5, null, null, null, BB4, null, null, null, F4, null, null, null, G4, null, null, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, D3, null, null, null, null, null, null, null]
            ]
        },
        {
            dur: BAR * 8, wave: 'triangle', vol: 0.18, drums: 'light',
            lead: [
                [D4, null, F4, null, A4, null, D5, null, C5, null, A4, null, F4, null, D4, null],
                [E4, null, G4, null, BB4, null, D5, null, C5, null, BB4, null, G4, null, E4, null]
            ],
            bass: [
                [D3, null, null, null, D3, null, null, null, A3, null, null, null, A3, null, null, null],
                [BB3, null, null, null, BB3, null, null, null, F3, null, null, null, G3, null, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'triangle', vol: 0.2, drums: 'full',
            lead: [
                [D4, null, F4, A4, null, C5, D5, null, C5, A4, null, F4, D4, null, A4, null],
                [E4, null, G4, BB4, null, D5, E5, null, D5, BB4, null, G4, E4, null, BB4, null]
            ],
            bass: [
                [D3, null, A3, null, D3, null, A3, null, D3, null, A3, null, D3, null, A3, null],
                [BB3, null, F3, null, G3, null, F3, null, BB3, null, F3, null, G3, null, A3, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'triangle', vol: 0.21, drums: 'full',
            lead: [
                [null, D5, CS5, C5, A4, G4, FS4, F4, D4, D4, F4, G4, A4, null, C5, null],
                [null, E5, null, D5, BB4, null, null, G4, E4, null, G4, null, BB4, null, D5, null]
            ],
            bass: [
                [D3, null, null, A3, null, null, D3, null, null, A3, null, null, D3, null, null, A3],
                [BB3, null, null, F3, null, null, BB3, null, null, F3, null, null, G3, null, null, A3]
            ]
        },
        {
            dur: BAR * 4, wave: 'triangle', vol: 0.22, drums: 'full',
            lead: [
                [D4, E4, F4, G4, A4, BB4, C5, D5, C5, BB4, A4, G4, F4, E4, D4, null],
                [D4, null, F4, null, A4, null, D5, null, F5, null, D5, null, A4, null, F4, null]
            ],
            bass: [
                [D3, null, D3, null, A3, null, A3, null, D3, null, D3, null, A3, null, A3, null],
                [BB3, null, BB3, null, F3, null, F3, null, G3, null, G3, null, A3, null, A3, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'triangle', vol: 0.23, drums: 'full',
            lead: [
                [D5, D4, null, D5, D4, null, F5, F4, null, F5, F4, null, A4, A4, null, null],
                [E5, E4, null, E5, E4, null, G5, G4, null, G5, G4, null, BB4, BB4, null, null]
            ],
            bass: [
                [D3, null, null, null, D3, null, null, null, A3, null, null, null, A3, null, null, null],
                [BB3, null, null, null, BB3, null, null, null, F3, null, null, null, G3, null, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.24, drums: 'full',
            lead: [
                [D5, D5, null, C5, A4, A4, null, F4, D4, D4, null, F4, A4, A4, null, C5],
                [E5, E5, null, D5, BB4, BB4, null, G4, E4, E4, null, G4, BB4, BB4, null, D5]
            ],
            bass: [
                [D3, null, D3, null, A3, null, A3, null, D3, null, D3, null, A3, null, A3, null],
                [BB3, null, BB3, null, F3, null, F3, null, G3, null, G3, null, A3, null, A3, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.25, drums: 'full',
            lead: [
                [D4, F4, A4, null, null, null, null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, D5, F5, A4, null, null, null, null, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, D3, null, null, null, null, null, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.26, drums: 'full',
            lead: [
                [D5, C5, D5, null, A4, G4, A4, null, F4, E4, F4, null, D4, C5, D4, null],
                [E5, D5, E5, null, BB4, A4, BB4, null, G4, F4, G4, null, E4, D5, E4, null]
            ],
            bass: [
                [D3, null, A3, null, D3, null, A3, null, D3, null, A3, null, D3, null, A3, null],
                [BB3, null, F3, null, G3, null, A3, null, BB3, null, F3, null, G3, null, A3, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.27, drums: 'full',
            lead: [
                [D5, C5, BB4, A4, G4, F4, E4, D4, D5, C5, BB4, A4, G4, F4, E4, D4],
                [F5, E5, D5, C5, BB4, A4, G4, F4, F5, E5, D5, C5, BB4, A4, G4, F4]
            ],
            bass: [
                [D3, null, null, null, A3, null, null, null, D3, null, null, null, A3, null, null, null],
                [BB3, null, null, null, F3, null, null, null, G3, null, null, null, A3, null, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'triangle', vol: 0.14, drums: false,
            lead: [
                [D5, null, null, null, null, null, null, null, A4, null, null, null, null, null, null, null],
                [null, null, null, null, F4, null, null, null, null, null, null, null, A4, null, null, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'triangle', vol: 0.16, drums: 'light',
            lead: [
                [BB4, null, null, null, A4, null, null, null, G4, null, null, null, F4, null, null, null],
                [null, null, D5, null, null, null, C5, null, null, null, BB4, null, null, null, A4, null]
            ],
            bass: [
                [D3, null, null, null, A3, null, null, null, D3, null, null, null, A3, null, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'triangle', vol: 0.19, drums: 'light',
            lead: [
                [D5, D5, D5, null, F5, F5, F5, null, D5, D5, D5, null, A4, A4, A4, null],
                [E5, E5, E5, null, G5, G5, G5, null, E5, E5, E5, null, BB4, BB4, BB4, null]
            ],
            bass: [
                [D3, null, D3, null, D3, null, D3, null, D3, null, D3, null, D3, null, D3, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'triangle', vol: 0.2, drums: 'light',
            lead: [
                [F4, D5, null, null, G4, E5, null, null, A4, F5, null, null, F4, D5, null, null],
                [G4, E5, null, null, A4, F5, null, null, BB4, G5, null, null, G4, E5, null, null]
            ],
            bass: [
                [D3, null, null, A3, null, null, D3, null, null, A3, null, null, D3, null, null, A3]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.22, drums: 'full',
            lead: [
                [D4, null, F4, null, A4, null, D5, null, F5, null, D5, null, A4, null, F4, null],
                [E4, null, G4, null, BB4, null, D5, null, E5, null, D5, null, BB4, null, G4, null]
            ],
            bass: [
                [D3, null, null, null, D3, null, null, null, A3, null, null, null, A3, null, null, null],
                [BB3, null, null, null, BB3, null, null, null, F3, null, null, null, G3, null, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.24, drums: 'full',
            lead: [
                [D5, null, D5, null, D5, null, D5, null, C5, C5, C5, C5, BB4, BB4, A4, A4],
                [D5, null, D5, null, D5, null, D5, null, C5, C5, C5, C5, BB4, BB4, A4, A4]
            ],
            bass: [
                [D3, D3, D3, D3, D3, D3, D3, D3, D3, D3, D3, D3, A3, A3, A3, A3]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.3, drums: 'full',
            lead: [
                [D5, D5, C5, C5, A4, A4, F4, F4, D5, D5, C5, C5, A4, A4, F4, F4],
                [E5, E5, D5, D5, BB4, BB4, G4, G4, E5, E5, D5, D5, BB4, BB4, G4, G4]
            ],
            bass: [
                [D3, D3, null, D3, A3, A3, null, A3, D3, D3, null, D3, A3, A3, null, A3],
                [BB3, BB3, null, BB3, F3, F3, null, F3, G3, G3, null, G3, A3, A3, null, A3]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.3, drums: 'full',
            lead: [
                [F5, null, D5, null, A4, null, D5, null, F5, null, D5, null, A4, null, D5, null],
                [G5, null, E5, null, BB4, null, E5, null, G5, null, E5, null, BB4, null, E5, null]
            ],
            bass: [
                [D3, D3, null, D3, A3, A3, null, A3, D3, D3, null, D3, A3, A3, null, A3]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.31, drums: 'full',
            lead: [
                [D5, C5, BB4, A4, G4, F4, E4, D4, D4, E4, F4, G4, A4, BB4, C5, D5],
                [F5, E5, D5, C5, BB4, A4, G4, F4, F4, G4, A4, BB4, C5, D5, E5, F5]
            ],
            bass: [
                [D3, null, A3, null, D3, null, A3, null, D3, null, A3, null, D3, null, A3, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.31, drums: 'full',
            lead: [
                [null, D5, null, D5, null, C5, null, C5, null, BB4, null, A4, null, F4, null, D4],
                [null, F5, null, F5, null, E5, null, E5, null, D5, null, C5, null, A4, null, F4]
            ],
            bass: [
                [D3, null, D3, null, A3, null, null, A3, null, D3, null, null, A3, null, null, A3]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.32, drums: 'full',
            lead: [
                [D5, C5, D5, A4, G4, A4, F4, E4, F4, D5, C5, D5, A4, G4, A4, D5],
                [E5, D5, E5, BB4, A4, BB4, G4, F4, G4, E5, D5, E5, BB4, A4, BB4, E5]
            ],
            bass: [
                [D3, D3, null, A3, A3, null, D3, D3, null, A3, A3, null, D3, D3, null, A3]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.32, drums: 'full',
            lead: [
                [D4, D5, D4, D5, F4, F5, F4, F5, A4, F5, A4, F5, D4, D5, D4, D5],
                [E4, E5, E4, E5, G4, G5, G4, G5, BB4, G5, BB4, G5, E4, E5, E4, E5]
            ],
            bass: [
                [D3, null, D3, null, A3, null, A3, null, D3, null, D3, null, A3, null, A3, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.31, drums: 'full',
            lead: [
                [D5, null, null, null, null, null, F5, null, null, null, null, null, A4, null, null, null],
                [F5, null, null, null, null, null, A4, null, null, null, null, null, D5, null, null, null]
            ],
            bass: [
                [D3, D3, D3, D3, null, null, null, null, A3, A3, A3, A3, null, null, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.33, drums: 'full',
            lead: [
                [D5, D5, C5, BB4, A4, A4, G4, F4, D5, D5, C5, BB4, A4, F4, G4, A4],
                [F5, F5, E5, D5, C5, C5, BB4, A4, F5, F5, E5, D5, C5, A4, BB4, C5]
            ],
            bass: [
                [D3, D3, A3, A3, D3, D3, A3, A3, D3, D3, A3, A3, D3, D3, A3, A3]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.3, drums: 'full',
            lead: [
                [D5, E5, F5, G4, A4, BB4, C5, D5, C5, BB4, A4, G4, F4, E4, D4, D5],
                [D4, E4, F4, G4, A4, BB4, C5, D5, C5, BB4, A4, G4, F4, E4, D4, D5]
            ],
            bass: [
                [D3, null, A3, null, D3, null, A3, null, D3, null, A3, null, D3, null, A3, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.29, drums: 'full',
            lead: [
                [D5, C5, BB4, A4, G4, F4, E4, D4, E4, F4, G4, A4, BB4, C5, D5, E5],
                [F5, E5, D5, C5, BB4, A4, G4, F4, G4, A4, BB4, C5, D5, E5, F5, G5]
            ],
            bass: [
                [BB3, null, F3, null, G3, null, A3, null, BB3, null, F3, null, G3, null, A3, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.31, drums: 'full',
            lead: [
                [null, D5, null, F5, null, A4, null, D5, null, C5, null, A4, null, F4, null, D4],
                [null, E5, null, G5, null, BB4, null, E5, null, D5, null, BB4, null, G4, null, E4]
            ],
            bass: [
                [D3, null, null, A3, null, null, D3, null, null, A3, null, null, D3, null, null, A3]
            ]
        },
        {
            dur: BAR * 4, wave: 'triangle', vol: 0.28, drums: 'full',
            lead: [
                [D5, null, null, null, null, null, null, null, F5, null, null, null, null, null, null, null],
                [A4, null, null, null, null, null, null, null, D5, null, null, null, null, null, null, null]
            ],
            bass: [
                [D3, D3, A3, A3, D3, D3, A3, A3, BB3, D3, F3, F3, D3, D3, A3, A3]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.32, drums: 'full',
            lead: [
                [D5, F5, D5, F5, C5, E5, C5, E5, BB4, D5, BB4, D5, A4, C5, A4, C5],
                [F5, A4, F5, A4, E5, G4, E5, G4, D5, F4, D5, F4, C5, E4, C5, E4]
            ],
            bass: [
                [D3, null, D3, null, A3, null, A3, null, D3, null, D3, null, A3, null, A3, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.31, drums: 'full',
            lead: [
                [F5, E5, D5, C5, BB4, A4, G4, F4, E4, D4, C5, D4, E4, F4, G4, A4],
                [G5, F5, E5, D5, C5, BB4, A4, G4, F4, E4, D4, E4, F4, G4, A4, BB4]
            ],
            bass: [
                [D3, D3, null, D3, A3, A3, null, A3, D3, D3, null, D3, A3, A3, null, A3]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.3, drums: 'full',
            lead: [
                [D5, F5, A4, null, null, null, null, null, C5, BB4, A4, null, null, null, null, null],
                [null, null, null, null, E5, G4, BB4, null, null, null, null, null, D5, C5, BB4, null]
            ],
            bass: [
                [D3, null, A3, null, D3, null, A3, null, D3, null, A3, null, D3, null, A3, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'sawtooth', vol: 0.33, drums: 'full',
            lead: [
                [D5, D5, F5, F5, A4, A4, D5, D5, C5, C5, BB4, BB4, A4, A4, G4, F4],
                [F5, F5, A4, A4, D5, D5, F5, F5, E5, E5, D5, D5, C5, C5, BB4, A4]
            ],
            bass: [
                [D3, D3, D3, D3, A3, A3, A3, A3, D3, D3, D3, D3, A3, A3, A3, A3]
            ]
        },
        {
            dur: BAR * 4, wave: 'triangle', vol: 0.24, drums: 'light',
            lead: [
                [D5, null, C5, null, A4, null, F4, null, D5, null, C5, null, A4, null, F4, null],
                [E5, null, D5, null, BB4, null, G4, null, E5, null, D5, null, BB4, null, G4, null]
            ],
            bass: [
                [D3, null, A3, null, D3, null, A3, null, D3, null, A3, null, D3, null, A3, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'triangle', vol: 0.2, drums: 'light',
            lead: [
                [D5, null, null, null, A4, null, null, null, F4, null, null, null, D4, null, null, null],
                [null, null, null, null, D5, null, null, null, null, null, null, null, A4, null, null, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, A3, null, null, null, null, null, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'triangle', vol: 0.16, drums: false,
            lead: [
                [D5, null, null, null, C5, null, null, null, BB4, null, null, null, A4, null, null, null],
                [null, null, F4, null, null, null, G4, null, null, null, A4, null, null, null, F4, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'triangle', vol: 0.13, drums: false,
            lead: [
                [D4, null, null, null, F4, null, null, null, A4, null, null, null, D5, null, null, null],
                [null, null, null, null, null, null, null, null, C5, null, null, null, D5, null, null, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, null, null, null, null, D3, null, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'square', vol: 0.11, drums: false,
            lead: [
                [D5, null, null, null, A4, null, null, null, F4, null, null, null, D4, null, null, null],
                [D5, null, null, null, BB4, null, null, null, F4, null, null, null, D4, null, null, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, A3, null, null, null, null, null, null, null]
            ]
        },
        {
            dur: BAR * 4, wave: 'square', vol: 0.08, drums: false,
            lead: [
                [D4, null, null, null, null, null, null, null, null, null, null, null, D3, null, null, null],
                [D4, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bass: [
                [D3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ]
        }
    ]
];