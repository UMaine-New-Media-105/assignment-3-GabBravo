function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // BACKGROUND
  background("rgb(133, 176, 213)");
  fill("rgb(160, 104, 72)")
  stroke("rgb(143, 93, 65)")
  rect(0,360,400,40)
  
  // ADD CATCHER
  addPot(mouseX,310)
  addLid(mouseX,310)
}

// CATCHER
function addPot(x,y){
  push()
  
  translate(x,y)
  
  fill("rgb(153, 216, 186)")
  stroke("rgb(133, 189, 163)")

  arc(10,34,20,5,90,270) //left handle
  arc(60,34,20,5,270,90) //right handle
  rect(10,30,50,30) //pot
  pop()
}

function addLid(x,y){
  push()
  translate(x,y)
  
  fill("rgb(153, 216, 186)")
  stroke("rgb(133, 189, 163)")
  
  arc(35,30,50,20,180,360) //lid
  ellipse(35,19,5,4) //handle
  pop()
}
