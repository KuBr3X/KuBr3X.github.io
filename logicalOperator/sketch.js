function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
line (200,0,200,400)
line (0,200,400,200)

  let x = mouseX;
  let y = mouseY;

  let circleSize = 50

  let xIsLarge = x > 200
  let yIsLarge = y > 200

  let xIsSmall = !xIsLarge

  if (xIsLarge && !yIsLarge) {
    fill("red");
  } else {
    fill("white")
  }

  if (!xIsLarge && yIsLarge) {
    fill("red");
  }
  circle(x, y, circleSize)

}



