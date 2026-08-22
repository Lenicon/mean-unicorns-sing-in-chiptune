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
        { "t": "row", "i": [2] },
        { "t": "row", "i": [1,3] },
        { "t": "col", "i": [2] },
        { "t": "col", "i": [1, 3] },
    ]
  },
  {
    "start": 20,
    "bpm": 32.5,
    "patterns": [
        { "t": "cross", "r": [0, 4], "c": [0, 4] },
        { "t": "cross", "r": [1, 3], "c": [1, 3] },
        { "t": "area", "r": [1,2,3], "c": [1,2,3] },
        { "t": "cross", "r": [1, 3], "c": [1, 3] },
        { "t": "cross", "r": [0, 4], "c": [0, 4] },
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
  },
  {
    "start": 37,
    "bpm": 65,
    "patterns": [
        { "t": "row", "i": [2] },
        { "t": "cross", "r": [0, 4], "c": [0, 4] },
        { "t": "col", "i": [2] },
        { "t": "col", "i": [1, 3] },
        { "t": "cross", "r": [0, 4], "c": [0, 4] },
        { "t": "cross", "r": [1, 3], "c": [1, 3] },
        { "t": "row", "i": [2] },
        { "t": "row", "i": [1,3] },
        { "t": "col", "i": [2] },
        { "t": "col", "i": [1, 3] },
    ]
  },
  {
    "start": 45,
    "bpm": 65,
    "patterns": [
        { "t": "cross", "r": [0, 4], "c": [0, 4] },
        { "t": "cross", "r": [1, 3], "c": [1, 3] },
        { "t": "area", "r": [1,2,3], "c": [1,2,3] },
        { "t": "cross", "r": [1, 3], "c": [1, 3] },
        { "t": "cross", "r": [0, 4], "c": [0, 4] },
        { "t": "area", "r": [1,2,3], "c": [1,2,3] },
    ]
  },
  {
    "start": 56,
    "bpm": 65,
    "patterns": [
        { "t": "row", "i": 0 },
        { "t": "row", "i": [0,1] },
        { "t": "row", "i": [0,1,2] },
        { "t": "row", "i": [0,1,2,3] },
    ]
  },
  {
    "start": 60,
    "bpm": 32.5,
    "patterns": [
      { "t": "row", "i": [1,2,3,4] },
    ]
  },
  {
    "start": 61,
    "bpm": 65,
    "patterns": [
        { "t": "cross", "r": [0, 4], "c": [0, 4] },
        { "t": "area", "r": [1,2,3], "c":[1,2,3] },
    ]
  },
  {
    "start": 63,
    "bpm": 65,
    "patterns": [
        { "t": "row", "i": 4 },
        { "t": "row", "i": [4,3] },
        { "t": "row", "i": [4,3,2] },
        { "t": "row", "i": [4,3,2,1] },
    ]
  },
  {
    "start": 67,
    "bpm": 32.5,
    "patterns": [
      { "t": "row", "i": [0,1,2,3] },
    ]
  },
  {
    "start": 68,
    "bpm": 65,
    "patterns": [
        { "t": "cross", "r": [0, 4], "c": [0, 4] },
        { "t": "area", "r": [1,2,3], "c":[1,2,3] },
    ]
  },
  {
    "start": 73,
    "bpm": 32.5,
    "patterns": [
        { "t": "cross", "r": [0, 4], "c": [0, 4] },
        { "t": "cross", "r": [0, 1, 3, 4], "c": [0, 1, 3, 4] },
        { "t": "area", "r": [1,2,3], "c":[1,2,3] },
    ]
  },
  {
    "start": 81,
    "bpm": 32.5,
    "patterns": [
        { "t": "random", "i": 15 },
    ]
  },
  {
    "start": 85,
    "bpm": 65,
    "patterns": [
        { "t": "random", "i": 10 },
    ]
  },
  {
    "start": 90,
    "bpm": 32.5,
    "patterns": [
        { "t": "random", "i": 24 },
    ]
  },
  {
    "start": 95,
    "bpm": 130,
    "patterns": [
        { "t": "random", "i": 1 },
        { "t": "random", "i": 1 },
        { "t": "random", "i": 1 },
        { "t": "cross", "r": [0,4], "c":[0,4] },
    ]
  },
  {
    "start": 99,
    "bpm": 130,
    "patterns": [
        { "t": "col", "i": 0 },
        { "t": "col", "i": 1 },
        { "t": "col", "i": 2 },
        { "t": "col", "i": 3 },
        { "t": "col", "i": 4 },
    ]
  },
  {
    "start": 104,
    "bpm": 65,
    "patterns": [
        { "t": "checker", "odd": true },
        { "t": "checker", "odd": false },
    ]
  },
  {
    "start": 107,
    "bpm": 130,
    "patterns": [
      { "t": "col", "i": 4 },
      { "t": "col", "i": 3 },
      { "t": "col", "i": 2 },
      { "t": "col", "i": 1 },
      { "t": "col", "i": 0 },
    ]
  },
  {
    "start": 112,
    "bpm": 65,
    "patterns": [
        { "t": "checker", "odd": true },
        { "t": "checker", "odd": false },
    ]
  },
];