class Obstacle {
  constructor(image) {
    this.x = random(0, CANVAS_WIDTH - 60);
    this.y = random(920, CANVAS_HEIGHT);
    this.width = 60;
    this.height = 60;
    this.image = image;
  }
  draw() {
    this.y -= 5;
    image(this.image, this.x, this.y, this.width, this.height);
    //  image(obstacle2, this.x, this.y, this.width, this.height);
  }

  // for the collision
  get bottomSide() {
    return this.y + this.height;
  }

  get topSide() {
    return this.y;
  }

  get leftSide() {
    return this.x;
  }
  get rightSide() {
    return this.x + this.width;
  }
}
