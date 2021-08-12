const game = new Game();
function setup() {
  game.setup();
}

function draw() {
  game.draw();
}

function preload() {
  bgClouds = loadImage("./Assets/bgClouds.jpg");
  obstacle1 = loadImage("./Assets/ufoShip.png");
  obstacle2 = loadImage("./Assets/fatBird.png");
  skyDiver = loadImage("/Assets/skyDiver.png");
  coinPoint = loadImage("/Assets/coinPoint.png");
}
