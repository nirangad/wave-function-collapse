const tileImagePath = "./images/forest/";
const tileImageExt = "png";

const GRASS = 0;
const WATER = 1;
const GRASS_BORDER_WATER_HR = 2;
const GRASS_BORDER_WATER_VR = 3;
const WATER_BORDER_GRASS_VR = 4;
const WATER_BORDER_GRASS_HR = 5;

const rules = [
  {
    // 0
    TOP: GRASS,
    RIGHT: GRASS,
    BOTTOM: GRASS,
    LEFT: GRASS,
  },
  {
    // 1
    TOP: GRASS,
    RIGHT: GRASS,
    BOTTOM: GRASS,
    LEFT: GRASS,
  },
  {
    // 2
    TOP: GRASS,
    RIGHT: GRASS,
    BOTTOM: GRASS,
    LEFT: GRASS,
  },
  {
    // 3
    TOP: GRASS,
    RIGHT: GRASS,
    BOTTOM: GRASS,
    LEFT: GRASS,
  },
  {
    // 4
    TOP: GRASS,
    RIGHT: GRASS_BORDER_WATER_HR,
    BOTTOM: GRASS_BORDER_WATER_VR,
    LEFT: GRASS,
  },
  {
    // 5
    TOP: GRASS,
    RIGHT: GRASS_BORDER_WATER_HR,
    BOTTOM: WATER,
    LEFT: GRASS_BORDER_WATER_HR,
  },
  {
    // 6
    TOP: GRASS,
    RIGHT: GRASS,
    BOTTOM: WATER_BORDER_GRASS_VR,
    LEFT: GRASS_BORDER_WATER_HR,
  },
  {
    // 7
    TOP: GRASS_BORDER_WATER_VR,
    RIGHT: WATER,
    BOTTOM: GRASS_BORDER_WATER_VR,
    LEFT: GRASS,
  },
  {
    // 8
    TOP: WATER,
    RIGHT: WATER,
    BOTTOM: WATER,
    LEFT: WATER,
  },
  {
    // 9
    TOP: WATER_BORDER_GRASS_VR,
    RIGHT: GRASS,
    BOTTOM: WATER_BORDER_GRASS_VR,
    LEFT: WATER,
  },
  {
    // 10
    TOP: GRASS_BORDER_WATER_VR,
    RIGHT: WATER_BORDER_GRASS_HR,
    BOTTOM: GRASS,
    LEFT: GRASS,
  },
  {
    // 11
    TOP: WATER,
    RIGHT: WATER_BORDER_GRASS_HR,
    BOTTOM: GRASS,
    LEFT: WATER_BORDER_GRASS_HR,
  },
  {
    // 12
    TOP: WATER_BORDER_GRASS_VR,
    RIGHT: GRASS,
    BOTTOM: GRASS,
    LEFT: WATER_BORDER_GRASS_HR,
  },
  {
    // 13
    TOP: GRASS_BORDER_WATER_VR,
    RIGHT: WATER,
    BOTTOM: WATER,
    LEFT: GRASS_BORDER_WATER_HR,
  },
  {
    // 14
    TOP: WATER_BORDER_GRASS_VR,
    RIGHT: GRASS_BORDER_WATER_HR,
    BOTTOM: WATER,
    LEFT: WATER,
  },
  {
    // 15
    TOP: WATER,
    RIGHT: WATER,
    BOTTOM: GRASS_BORDER_WATER_VR,
    LEFT: WATER_BORDER_GRASS_HR,
  },
  {
    // 16
    TOP: WATER,
    RIGHT: WATER_BORDER_GRASS_HR,
    BOTTOM: WATER_BORDER_GRASS_VR,
    LEFT: WATER,
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

const Forest = { rules, tileImagePath, tileImageExt, findEntropy };
