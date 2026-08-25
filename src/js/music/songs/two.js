const songTwo = [
    { name: "Jumpy Hills", time: 165, bpm: 140 },
    [
        {
            start: 0,
            bpm: 35,
            patterns: [
                { t: "corners" },
                { t: "center" },
                { t: "cross", r: [0, 4], c: [0, 4] }
            ]
        },

    ],
    [
        {
            dur: BAR * 8,
            wave: 'sine',
            vol: 0.08,
            drums: false,
            lead: [
                [G4, null, null, null, null, null, null, null, null, null, null, null, D4, null, null, null],
                [null, null, null, null, B4, null, null, null, null, null, null, null, null, null, A4, null],
                [G4, null, null, null, null, null, B4, null, null, null, null, null, D5, null, null, null]
            ],
            bass: [
                [G2, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                [G2, null, null, null, null, null, null, null, D3, null, null, null, null, null, null, null]
            ],
            bell: [null, null, null, null, null, null, null, null, G5, null, null, null, null, null, null, null],
            chord: [G3, D4, G4],
            chordVol: 0.05
        },
        {
            dur: BAR * 8,
            wave: 'triangle',
            vol: 0.13,
            drums: 'roll',
            riser: true,
            lead: [
                [G4, null, A4, null, B4, null, C5, null, D5, null, null, null, null, null, null, null],
                [D5, null, C5, null, B4, null, A4, null, G4, null, A4, null, B4, null, C5, null]
            ],
            bass: [
                [G3, null, null, null, G3, null, null, null, D3, null, null, null, D3, null, null, null],
                [G3, null, G3, null, D3, null, D3, null, C3, null, C3, null, D3, null, D3, null]
            ],
            bell: [G5, null, null, null, B5, null, null, null, D6, null, null, null, null, null, null, null],
            chord: [G3, D4, G4, B4],
            chordVol: 0.09
        },
        {
            dur: BAR * 16,
            wave: 'square',
            vol: 0.22,
            drums: 'full',
            stabAt: [0, 8],
            echo: true,
            lead: [
                [G4, null, B4, null, D5, null, B4, null, C5, null, E5, null, D5, null, B4, null],
                [A4, null, C5, null, E5, null, C5, null, D5, null, FS5, null, E5, null, C5, null],
                [G4, B4, null, D5, null, B4, G4, null, A4, C5, null, E5, null, C5, A4, null],
                [B4, null, D5, null, FS5, null, D5, null, C5, null, E5, null, D5, null, B4, null]
            ],
            bass: [
                [G3, G3, null, G3, D3, D3, null, D3, C3, C3, null, C3, D3, D3, null, D3],
                [G3, null, G3, null, D3, null, D3, null, C3, null, C3, null, D3, null, D3, null],
                [G3, G3, G3, null, D3, D3, D3, null, C3, C3, C3, null, D3, D3, D3, null],
                [G3, null, null, G3, D3, null, null, D3, C3, null, null, C3, D3, null, null, D3]
            ],
            bell: [null, null, G5, null, null, null, B5, null, null, null, D6, null, null, null, B5, null],
            chord: [G3, D4, G4, B4],
            chordVol: 0.11
        },
        {
            dur: BAR * 8,
            wave: 'triangle',
            vol: 0.17,
            drums: 'half',
            lead: [
                [E4, null, null, null, D4, null, null, null, C4, null, null, null, B3, null, null, null],
                [G4, null, A4, null, B4, null, C5, null, B4, null, A4, null, G4, null, null, null]
            ],
            bass: [
                [C3, null, null, null, C3, null, null, null, G3, null, null, null, G3, null, null, null]
            ],
            bell: [null, E5, null, null, null, D5, null, null, null, C5, null, null, null, B4, null, null],
            chord: [C4, E4, G4],
            chordVol: 0.09
        },
        {
            dur: BAR * 8,
            wave: 'sine',
            vol: 0.11,
            drums: false,
            lead: [
                [null, null, null, null, G4, null, null, null, null, null, null, null, FS4, null, null, null],
                [null, null, null, null, E4, null, null, null, null, null, null, null, D4, null, null, null]
            ],
            bass: [
                [G2, null, null, null, null, null, null, null, E2, null, null, null, null, null, null, null]
            ],
            bell: [null, null, null, null, null, null, null, null, B5, null, null, null, null, null, null, null],
            chord: [E3, G3, B3],
            chordVol: 0.08
        },
        {
            dur: BAR * 8,
            wave: 'square',
            vol: 0.15,
            drums: 'roll',
            riser: true,
            lead: [
                [D4, null, E4, null, FS4, null, G4, null, A4, null, B4, null, C5, null, D5, null],
                [D5, null, C5, null, B4, null, A4, null, G4, null, FS4, null, E4, null, D4, null]
            ],
            bass: [
                [G3, null, null, null, A3, null, null, null, B3, null, null, null, C4, null, null, null],
                [D3, null, D3, null, D3, null, D3, null, D3, null, D3, null, D3, null, D3, null]
            ],
            bell: [null, G5, null, A5, null, B5, null, C6, null, null, null, null, null, null, null, null],
            chord: [G3, B3, D4, FS4],
            chordVol: 0.1
        },
        {
            dur: BAR * 16,
            wave: 'square',
            vol: 0.24,
            drums: 'full',
            stabAt: [0, 8],
            echo: true,
            lead: [
                [D5, null, B4, null, G4, null, B4, null, C5, null, A4, null, FS4, null, A4, null],
                [G5, null, E5, null, C5, null, E5, null, D5, null, B4, null, G4, null, B4, null],
                [D5, B4, null, G4, null, B4, D5, null, C5, A4, null, FS4, null, A4, C5, null],
                [B4, null, G4, null, D4, null, G4, null, A4, null, FS4, null, D4, null, FS4, null]
            ],
            bass: [
                [G3, G3, null, G3, D3, D3, null, D3, C3, C3, null, C3, D3, D3, null, D3],
                [D3, null, D3, null, B2, null, B2, null, C3, null, C3, null, D3, null, D3, null],
                [G3, D3, G3, null, D3, A3, D3, null, C3, G3, C3, null, D3, A3, D3, null],
                [G3, null, null, D3, D3, null, null, A3, C3, null, null, G3, D3, null, null, A3]
            ],
            bell: [D6, null, null, null, B5, null, null, null, G5, null, null, null, B5, null, null, null],
            chord: [G3, D4, G4, B4],
            chordVol: 0.12
        },
        {
            dur: BAR * 8,
            wave: 'triangle',
            vol: 0.15,
            drums: 'half',
            lead: [
                [B4, null, A4, null, G4, null, FS4, null, E4, null, D4, null, C4, null, B3, null],
                [D4, null, E4, null, FS4, null, G4, null, A4, null, B4, null, C5, null, D5, null]
            ],
            bass: [
                [E3, null, null, null, C3, null, null, null, D3, null, null, null, G3, null, null, null]
            ],
            bell: [null, null, B5, null, null, null, G5, null, null, null, D5, null, null, null, B4, null],
            chord: [E3, G3, B3, D4],
            chordVol: 0.09
        },
        {
            dur: BAR * 8,
            wave: 'square',
            vol: 0.22,
            drums: 'full',
            stabAt: [0],
            echo: true,
            lead: [
                [G4, null, B4, null, D5, null, B4, null, C5, null, E5, null, D5, null, B4, null],
                [A4, null, C5, null, E5, null, C5, null, D5, null, FS5, null, E5, null, C5, null]
            ],
            bass: [
                [G3, G3, null, G3, D3, D3, null, D3, C3, C3, null, C3, D3, D3, null, D3],
                [G3, null, G3, null, D3, null, D3, null, C3, null, C3, null, D3, null, D3, null]
            ],
            bell: [null, null, G5, null, null, null, B5, null, null, null, D6, null, null, null, B5, null],
            chord: [G3, D4, G4, B4],
            chordVol: 0.11
        },
        {
            dur: BAR * 8,
            wave: 'sine',
            vol: 0.15,
            drums: 'fade',
            lead: [
                [D5, null, null, null, C5, null, null, null, B4, null, null, null, A4, null, null, null],
                [G4, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            ],
            bass: [
                [G3, null, null, null, D3, null, null, null, C3, null, null, null, G3, null, null, null]
            ],
            chord: [G3, D4, G4],
            chordVol: 0.1
        },
    ]
];