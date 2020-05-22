const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;
let score = 0;

window.onload = function setup() {
  snake = new Snake();
  fruit = new Fruit();

  fruit.pickLocation();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();

    if (snake.eat(fruit)) {
      snake.total++;
      score++;
      fruit.pickLocation();
    }

    if (snake.collision()) {
      this.alert("GAME OVER | YOUR SCORE IS " + score);
      this.location.reload();
    }
  }, 250);
};

window.addEventListener("keydown", (evt) => {
  const direction = evt.key.replace("Arrow", "");
  console.log(direction);
  snake.changeDirection(direction);
});
