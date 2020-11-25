const { randomFill } = require("crypto");

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(150);
  
  
  circle(50,50,50)
  circle(windowWidth-50,50,50)
  circle(mouseX,mouseY,50)
  
  
  let n = map(mouseX, 0, windowWidth,1,100, true);
  n = round(n);
  
  // En konstant loop funktion. i er 0, så når musens cursor ændre x værdi hvor den er større end 0 skal den:
  for(let i= 0; i <= n; i++){ 
    //inden for rækkeviden musens x værdi er sandt
    x1 = map(i,0,n,50,mouseX,100, true); 
    // inden for rækkeviden musens y værdi er sandt
    y1 = map(i,0,n,50,mouseY,true); 
     // linjerne i mellem x1
    x2 = map(i,0,n,mouseX,windowWidth-50, true);
    // linjerne i mellem y2 dvs. højden af linjerne.
    y2 = map(i,0,n,mouseY,50, true); 
    
    line(x1,y1,x2,y2);
  } 
}