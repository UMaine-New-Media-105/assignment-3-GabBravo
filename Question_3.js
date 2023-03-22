let x;
let y;
let speedY;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
  x = random (400)
  y = random (5)
  speedY = random(8)
}

function draw() {
  // BACKGROUND
  background("rgb(133, 176, 213)");
  fill("rgb(160, 104, 72)")
  stroke("rgb(143, 93, 65)")
  rect(0,360,400,40)
  
  // ADD CATCHER
  addPot(mouseX,290,1.5)
  addLid(mouseX,290,1.5)
  
    // ADD SEED
  addVeg(x,y) 
  
  y = y + speedY
  if (y < 400) {
    speedY = speedY * 1
  }
  
}


function addVeg(x,y) {
  translate(x,y)
  
  ellipse(10,10,20,20)
}


function addPot(x,y,size){
  push() 
  translate(x,y)
  scale(size)
  
  fill("rgb(153, 216, 186)")
  stroke("rgb(133, 189, 163)")

  arc(10,34,20,5,90,270) //left handle
  arc(60,34,20,5,270,90) //right handle
  rect(10,30,50,30) //pot
  pop()
}

function addLid(x,y,size){
  push()
  translate(x,y)
  scale(size)
  
  //lid dissapears when mouse click
  if(mouseIsPressed){
    scale(0)
  }
  
  fill("rgb(153, 216, 186)")
  stroke("rgb(133, 189, 163)")
  
  arc(35,30,50,20,180,360) //lid
  ellipse(35,19,5,4) //handle
  pop()
}
