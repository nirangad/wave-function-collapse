const tiles = [];
function loadImages() {
  for (let i = 0; i < 12; i++) {
    tiles.push(loadImage(`./images/road/${i}.png`));
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {}
