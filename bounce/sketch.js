let x = 200;

let xspeed = 5;
let y = 200;
let yspeed = 3;

let c;
let cFill;

function setup() {
  createCanvas(600,400);
}

function draw() {
background(c);

rect(0,0, width, height);



let d = 120;

circle(x,y,d)

if (x > width - d/2) {
  changeColor();
  xSpeed = -xSpeed;
}

x = x + xSpeed;
y = y + yspeed;
}