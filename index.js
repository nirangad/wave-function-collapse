let THEME = Road;

let CANVAS_SIZE;
let GRID_SIZE;
let IMAGE_SIZE;
let POINTER;

let TILE_RULES = THEME.rules;
let TILE_COUNT = THEME.rules.length;
let TILE_IMAGE_PATH = THEME.tileImagePath;
let TILE_IMAGE_EXT = THEME.tileImageExt;

let tiles;
let grid;

function loadImages() {
  tiles = [];
  for (let i = 0; i < TILE_COUNT; i++) {
    tiles[i] = {
      index: i,
      image: loadImage(`${TILE_IMAGE_PATH}${i}.${TILE_IMAGE_EXT}`),
    };
  }
}

function setup() {
  CANVAS_SIZE = 500;
  GRID_SIZE = 10;
  IMAGE_SIZE = CANVAS_SIZE / GRID_SIZE;
  POINTER = { row: 0, col: 0 };
  grid = [];

  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  loadImages();

  for (let row = 0; row < GRID_SIZE; row++) {
    grid[row] = [];
    for (let col = 0; col < GRID_SIZE; col++) {
      grid[row][col] = {
        label: `Row: ${row}, Col: ${col}`,
        collapsed: false,
        entropy: tiles.map((t) => t.index),
        tile: undefined,
      };
    }
  }
}

function draw() {
  background(0);

  findNext();

  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      let cell = grid[row][col];
      if (cell.collapsed) {
        image(
          cell.tile.image,
          col * IMAGE_SIZE,
          row * IMAGE_SIZE,
          IMAGE_SIZE,
          IMAGE_SIZE
        );
      }
    }
  }
  if (POINTER.row == 0 && POINTER.col == 0) {
    noLoop();
  }
}

function findNext() {
  let cell = grid[POINTER.row][POINTER.col];
  let rightCell, bottomCell;
  let cellEntropy = cell.entropy;

  let tileIndex = cellEntropy[Math.floor(Math.random() * cellEntropy.length)];
  cell.tile = tiles[tileIndex];
  cell.collapsed = true;
  cell.entropy = [];

  // Right
  if (POINTER.col + 1 < GRID_SIZE) {
    rightCell = grid[POINTER.row][POINTER.col + 1];

    rightCell.entropy = filterCommon(
      rightCell.entropy,
      THEME.findEntropy(tileIndex, "RIGHT")
    );
  }

  // Bottom
  if (POINTER.row + 1 < GRID_SIZE) {
    bottomCell = grid[POINTER.row + 1][POINTER.col];

    bottomCell.entropy = filterCommon(
      bottomCell.entropy,
      THEME.findEntropy(tileIndex, "BOTTOM")
    );
  }

  POINTER.col = (POINTER.col + 1) % GRID_SIZE;
  if (POINTER.col == 0) {
    POINTER.row = (POINTER.row + 1) % GRID_SIZE;
  }
}

function filterCommon(to, from) {
  let common = from.filter((item) => {
    return to.includes(item);
  });
  return common;
}
