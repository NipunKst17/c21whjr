var fixedRect, movingRect;
var rect1,rect2,rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(300,300,25,60);
  rect2 = createSprite(250,300,30,70);
  rect3 = createSprite(1000,300,30,40);

  rect3.velocityX = -3;
  rect1.velocityX = 3;

  rect1.shapeColor = "green";
  rect2.shapeColor = "blue";
  rect3.shapeColor = "blue";
  
  
}

function draw() 
{
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(movingRect,rect3))
 {
   rect3.shapeColor = "red";
   movingRect.shapeColor = "red";
 }
 else{
   rect3.shapeColor = "blue";
   movingRect.shapeColor = "green";
 }

 if (isTouching(movingRect,rect2))
 {
   rect2.shapeColor = "red";
   movingRect.shapeColor = "red";
 }
 else{
   rect2.shapeColor = "blue";
   movingRect.shapeColor = "green";
 }

 bounceOff(rect1,rect3);

  drawSprites();
}

