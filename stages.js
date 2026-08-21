const STAGES = [
  {
    "start": 0,
    "bpm": 32.5,
    "patterns": [
        { "t": "corners" },
        { "t": "center" },
        { "t": "cross", "r": [0, 4], "c": [0, 4] },
        
    ]
  },
  {
    "start": 6,
    "bpm": 32.5,
    "patterns": [
        { "t": "row", "i": [2] },
        { "t": "cross", "r": [0, 4], "c": [0, 4] },
        { "t": "col", "i": [2] },
        { "t": "col", "i": [1, 3] },
        { "t": "cross", "r": [0, 4], "c": [0, 4] },
        { "t": "cross", "r": [1, 3], "c": [1, 3] },

    ]
  },
  {
    "start": 20,
    "bpm": 32.5,
    "patterns": [
        { "t": "center" },
        { "t": "cross", "r": [0, 4], "c": [0, 4] },
        { "t": "cross", "r": [1, 3], "c": [1, 3] },
        { "t": "area", "r": [1,2,3], "c": [1,2,3] },

    ]
  },
  {
    "start": 30,
    "bpm": 32.5,
    "patterns": [
        { "t": "row", "i": [0, 1, 2, 3] },
        { "t": "row", "i": [1, 2, 3, 4] }
    ]
  }
];