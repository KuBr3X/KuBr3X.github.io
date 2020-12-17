let x = []; //lav en variabel og giv den en array

//flere variabler fik givet en array
let xSpeed = [];
let y = [];
let ySpeed = [];

let d = []; //opret variablen for diameter og giv den en array

let c;  //opret variablen for color 

//lav en funktion der ændre strokecolor & linecolor
function changeColor() {
     c = color(random(255), random(255), random(255));
     strokeWeight(5);
     stroke(c);
}
//lav en funktion der ændre canvas og canvascolor
function setup() {
    background(255)
    createCanvas(windowWidth, windowHeight);
    const speedScale = 128
    changeColor();
}
function draw(){
    background(c);

//lav en border rundt om canvas
//  rect (0, 0, width, height);

for(i=0;i<x.length;i++){
    cFill(random(255), random(255), random(255));
circle(x[i], y[i], d[i]);

if (x[i] > width - d[i] / 2 || x[i] < 0 + d[i] / 2){
    changeColor();
    xSpeed[i] = -xSpeed[i];
}
if (y[i] > height - d[i] / 2 || y[i] < 0 + d[i] / 2) {
    changeColor();
    ySpeed[i] = -ySpeed[i];
}

x[i] = x[i] + xSpeed[i];
y[i] = y[i] + ySpeed[i];
}
}
function mousePressed() {
    x.push(mouseX)
    y.push(mouseY)
    xSpeed.push(random(50,-30))
    ySpeed.push(random(50,-30))
    d.push(random(51,120))
}