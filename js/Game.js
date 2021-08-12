class Game {
  constructor() {
    this.background = new Background();
    this.obstacles = [];
    this.player = new Player();
    this.point = new Point();
  }
  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  }
  draw() {
    clear();
    this.background.draw();
    this.player.draw();
    this.point.draw();

    //Obstacle random and swap.

    if (frameCount % 40 === 0) {
      let swapObstacles;
      if (this.obstacles.length % 2 === 0) {
        swapObstacles = obstacle1;
      } else {
        swapObstacles = obstacle2;
      }

      this.obstacles.push(new Obstacle(swapObstacles));
    }

    this.obstacles.forEach((obstacle, index) => {
      obstacle.draw();
      if (obstacle.y + obstacle.height < 0) {
        this.obstacles.splice(index, 0);
      }
    });
  }

  //Collision Check
  collisionCheck(player, obstacle) {
    if (player.bottomSide < obstacle.topSide) {
      return false;
    }

    if (player.rightSide < obstacle.leftSide) {
      return false;
    }

    if (player.leftSide > obstacle.rightSide) {
      return false;
    }

    if (player.topSide > obstacle.bottomSide) {
      return false;
    }

    return true;
  }
}
