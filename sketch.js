var fixedRect, movingRect;


function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="red";
  movingRect = createSprite(700,200,50,50);
  movingRect.shapeColor="green";
  fixedRect.velocityX=3;
  movingRect.velocityX=-3;

}

function draw() {
  background(0);  

//movingRect.x=World.mouseX;
//movingRect.y=World.mouseY;

// if (movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 && 
//     fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2 &&
//     movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
//     fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2){
//   movingRect.shapeColor="red";
//   fixedRect.shapeColor="red";
// }
// else{
// movingRect.shapeColor="green";
// fixedRect.shapeColor="green";

// }

if (movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2 ) {
    fixedRect.velocityX=-1*fixedRect.velocityX;
    movingRect.velocityX=-1*movingRect.velocityX;

    }

  drawSprites();
}