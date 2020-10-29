
let x = 200;


let xSpeed = 5;
let y = 200;
let ySpeed = 3;

let c;
let cFill;


function changeColor() {
  c = color(random(255), random(255), random(255));
  cFill = color(random(255), random(255), random(255));
  strokeWeight(10);
  stroke(c);
  fill(cFill);
}

function setup() {
  createCanvas(600, 400);
  changeColor();
}

function draw() {
  background(c);

  rect(0, 0, width, height);

 
  let d = 120;


  circle(x, y, d);

 
  if (x > width - d / 2) {
    changeColor();
    xSpeed = -xSpeed;
  }

  if (x < 0 + d / 2) {
    changeColor();
    xSpeed = -xSpeed;
  }

  if (y > height - d / 2 || y < 0 + d / 2) {
    changeColor();
    ySpeed = -ySpeed;
  }

  x = x + xSpeed;
  y = y + ySpeed;
}
