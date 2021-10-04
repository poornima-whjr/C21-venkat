var fixedRect, movingRect;
var fixedRect2, fixedRect3, fixedRect4;

var bounceRect1, bounceRect2;

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  fixedRect2 = createSprite(400, 400, 50, 80);
  fixedRect2.shapeColor = "green";

  fixedRect3 = createSprite(800, 400, 50, 80);
  fixedRect3.shapeColor = "green";

  fixedRect4 = createSprite(1000, 400, 50, 80);
  fixedRect4.shapeColor = "green";

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";

  bounceRect1 = createSprite(100, 100, 50, 80);
  bounceRect1.shapeColor = "yellow";
  bounceRect1.velocityY=2

  bounceRect2 = createSprite(100, 500, 50, 80);
  bounceRect2.shapeColor = "blue";
  bounceRect2.velocityY=-2
}

function draw() {
  background(0, 0, 0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedRect,movingRect)
     ||isTouching(fixedRect2,movingRect)
     ||isTouching(fixedRect3,movingRect)
     ||isTouching(fixedRect4,movingRect)){

       movingRect.shapeColor="red"
  }else{

    movingRect.shapeColor = "green"
  }


  bounceOff(bounceRect1,bounceRect2)

  drawSprites();
}



