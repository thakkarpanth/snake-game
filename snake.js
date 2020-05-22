function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];

  this.draw = function () {
    ctx.fillStyle = "#FFFFFF";

    for (let i = 0; i < this.tail.length; i++)
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);

    ctx.fillRect(this.x, this.y, scale, scale);
  };

  this.update = function () {
    for (let i = 0; i < this.tail.length - 1; i++)
      this.tail[i] = this.tail[i + 1];

    this.tail[this.total - 1] = { x: this.x, y: this.y };
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;

    if (this.x > canvas.width) this.x = 0;
    if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    if (this.y < 0) this.y = canvas.height;
  };

  this.changeDirection = function (direction) {
    if (direction === "Up") {
      this.xSpeed = 0;
      this.ySpeed = -scale * 1;
    }
    if (direction === "Down") {
      this.xSpeed = 0;
      this.ySpeed = scale * 1;
    }
    if (direction === "Left") {
      this.xSpeed = -scale * 1;
      this.ySpeed = 0;
    }

    if (direction === "Right") {
      this.xSpeed = scale * 1;
      this.ySpeed = 0;
    }
  };

  this.eat = function (fruit) {
    if (this.x === fruit.x && this.y === fruit.y) return true;
    return false;
  };

  this.collision = function () {
    for (i = 0; i < this.tail.length; i++) {
      if (this.tail[i].x === this.x && this.tail[i].y === this.y) return true;
    }
    return false;
  };
}
