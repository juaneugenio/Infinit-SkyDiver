class Point {
  constructor() {
    // this.x = CANVAS_WIDTH/2;
    // this.y = 0;
    this.width = 50;
    this.height = 40;
  }
  draw() {
    // circle(this.x - 100, this.y - 150, this.radius);
    //this.y -= 5;
    this.setRandomPosition(); //revisar
    image(coinPoint, this.x, this.y, this.width, this.height);
  }

  setRandomPosition() {
    this.x = 50; //Math.floor(Math.random() * this.leftBoundary);
    this.y = 50; //Math.floor(random(this.leftBoundary));
    // this.y = 25; // RANDOM (HEIGHT - this.height)
  }
}
