var ship,ship_moving;
var groudImage; 

function preload(){
ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
image=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);

  ship=createSprite(150,200,90,70);  
ship.addAnimation("moving",ship_moving)
edges=createEdgeSprites();


ship.scale=2.2 
ship.x =50
}



function draw() {
  background("blue");
 drawSprites();



}