
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

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(220);
  strokeWeight(3); 
  
  circle(406,130,130)
  circle(360,110,10)
  circle(400,110,10) 
  
  strokeWeight(10)
  line(415,197,405,270)
  
  line(408,230,320,260)
  line(320,260,250,260)
  line(250,260,235,245)
  line(250,260,210,250)
  
  line(405,270,385,310)
  line(385,310,350,400)
  line(385,310,410,410)
  line(350,400,350,550)
  line(410,410,470,500)
  line(350,550,300,560)
  line(470,500,415,530)
  
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
}}