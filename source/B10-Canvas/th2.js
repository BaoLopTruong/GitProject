let gameContext = document.getElementById("game").getContext("2d");

let carYPosition = 20;
let carXPosition = 20;

let carWidth = 150;
let carHeight = 100;

let gameTopPosition = 0;
let gameBottomPosition = 600;
let timeLoop = 10;

function drawCar() {
  gameContext.beginPath();
  gameContext.fillStyle='#fa4b2a';
  gameContext.fillRect(carXPosition, carYPosition, carWidth, carHeight);
}

let yDistance = 1;
function moveCar() {
  gameContext.clearRect(carXPosition, carYPosition, carWidth, carHeight);

  let isTouchTop = carYPosition < gameTopPosition;
  let isTouchBottom = carYPosition + carHeight > gameBottomPosition;
  if (isTouchTop || isTouchBottom) {
    yDistance = -yDistance;
  }

  carYPosition += yDistance;
  drawCar();
}
setInterval(moveCar, timeLoop);