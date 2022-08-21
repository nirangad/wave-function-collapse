const tileImagePath = "./images/road/";
const tileImageExt = "png";
const rules = [
  {
    // 0
    TOP: 0,
    RIGHT: 0,
    BOTTOM: 0,
    LEFT: 0,
  },
  {
    // 1
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 0,
    LEFT: 1,
  },
  {
    // 2
    TOP: 1,
    RIGHT: 0,
    BOTTOM: 1,
    LEFT: 0,
  },
  {
    // 3
    TOP: 1,
    RIGHT: 1,
    BOTTOM: 1,
    LEFT: 1,
  },
  {
    // 4
    TOP: 1,
    RIGHT: 1,
    BOTTOM: 0,
    LEFT: 0,
  },
  {
    // 5
    TOP: 1,
    RIGHT: 0,
    BOTTOM: 0,
    LEFT: 1,
  },
  {
    // 6
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 1,
    LEFT: 0,
  },
  {
    // 7
    TOP: 0,
    RIGHT: 0,
    BOTTOM: 1,
    LEFT: 1,
  },
  {
    // 8
    TOP: 1,
    RIGHT: 1,
    BOTTOM: 1,
    LEFT: 0,
  },
  {
    // 9
    TOP: 1,
    RIGHT: 1,
    BOTTOM: 0,
    LEFT: 1,
  },
  {
    // 10
    TOP: 1,
    RIGHT: 0,
    BOTTOM: 1,
    LEFT: 1,
  },
  {
    // 11
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 1,
    LEFT: 1,
  },
];

function findEntropy(index, side) {
  side = side.toUpperCase();
  let key = `${index}_${side}`;
  let value = Memoization.retrieve(key);
  if (value) return value;

  let oppositeSide = opposite(side);
  let rule = rules[index];
  value = [];
  rules.forEach((item, index) => {
    if (item[oppositeSide] == rule[side]) {
      value.push(index);
    }
  });
  Memoization.store(key, value);
  return value;
}

function opposite(side) {
  switch (side) {
    case "TOP":
      return "BOTTOM";

    case "BOTTOM":
      return "TOP";

    case "RIGHT":
      return "LEFT";

    case "LEFT":
      return "RIGHT";

    default:
      break;
  }
}

const Road = { rules, tileImagePath, tileImageExt, findEntropy };
