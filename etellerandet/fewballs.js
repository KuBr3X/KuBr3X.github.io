const ballCount = 10
let ds = new Array(ballCount);
let xs = new Array(ballCount);
let ys = new Array(ballCount);
let xSpeed = new Array(ballCount);
let ySpeed = new Array(ballCount);
function setup() {
    createCanvas(windowWidth, windowHeight);

for(let i = 0; i < ballCount; i++){
    ds[i] = random(10,50);
    xSpeed[i] = random(0,50);
    ySpeed[i] = random(0,50);
xs[i] = random(0,width);
ys[i] = random(0,height);
    }
}

function draw() {
    background(220);
    for(let i =0; i < ballCount; i++){
        circle(xs[i],ys[i],ds[i])
        xs[i]++

    if(xs[i] > width - ds[i] / 2 || xs[i] < 0 + ds[i] / 2){
        xSpeed[i] = -xSpeed[i];
    
    if(ys[i] > height - ds[i] / 2 || yx[i] < 0 + ds[i] / 2){
        ySpeed[i] = -ySpeed[i];
    }
    xs[i] = xs[i] + xSpeed[i];
    ys[i] = ys[i] + ySpeed[i];
}
    }

    
    // if(xs[i] > width - d[i] / 2 || xs[i] < 0 + d[i] / 2);{

    // }
}
    


