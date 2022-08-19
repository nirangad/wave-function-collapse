const tileImagePath = "./images/road/";
const tileImageExt = "png";
const rules = [
  {
    // 0
    TOP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // 1
    TOP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },
  {
    // 2
    TOP: 1,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {
    // 3
    TOP: 1,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 1,
  },
  {
    // 4
    TOP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // 5
    TOP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },
  {
    // 6
    TOP: 0,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 0,
  },
  {
    // 7
    TOP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 1,
  },
  {
    // 8
    TOP: 1,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 0,
  },
  {
    // 9
    TOP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },
  {
    // 10
    TOP: 1,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 1,
  },
  {
    // 11
    TOP: 0,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 1,
  },
];

const Road = { rules, tileImagePath, tileImageExt };
