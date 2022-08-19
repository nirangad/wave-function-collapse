let CANVAS_SIZE;
let GRID_SIZE;
let IMAGE_SIZE;
let POINTER;

let TILE_RULES = Road.rules;
let TILE_COUNT = Road.rules.length;
let TILE_IMAGE_PATH = Road.tileImagePath;
let TILE_IMAGE_EXT = Road.tileImageExt;

let tiles = [];
let grid = [];

function loadImages() {
  for (let i = 0; i < 12; i++) {
    tiles.push(loadImage(`${TILE_IMAGE_PATH}${i}.${TILE_IMAGE_EXT}`));
  }
}

function setup() {
  CANVAS_SIZE = 500;
  GRID_SIZE = 10;
  IMAGE_SIZE = CANVAS_SIZE / GRID_SIZE;
  POINTER = [0, 0];

  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  loadImages();

  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    grid.push({
      index: i,
      collapsed: false,
      entropy: tiles,
    });
  }
}

function draw() {
  background(0);

  findNext();

  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      let cell = grid[j + i * GRID_SIZE];
      if (cell.collapsed) {
        image(
          cell.image,
          i * IMAGE_SIZE,
          j * IMAGE_SIZE,
          IMAGE_SIZE,
          IMAGE_SIZE
        );
      }
    }
  }
  noLoop();
}

function findNext() {
  let cell = grid[POINTER[1] + POINTER[0] * GRID_SIZE];

  // Top
  if (POINTER[1] - 1 >= 0) {
  }

  // Left
  if (POINTER[0] - 1 >= 0) {
  }

  // Bottom
  if (POINTER[1] + 1 < GRID_SIZE) {
  }

  // Right
  if (POINTER[0] + 1 < GRID_SIZE) {
  }
}
