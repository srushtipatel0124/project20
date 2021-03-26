var car;
var wall;
var speed,weight;




function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
 wall=createSprite(700,200,60,height/2);
speed=random(50,100);
weight=random(500,1500);
car.shapeColor="white";
wall.shapeColor="grey";
car.velocityX=speed;

}

function draw() {
  background("black");
  if(wall.x-car.x<wall.width/2+car.width/2){
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22500;
if(deformation>180){
  car.shapeColor="red";


}
if(deformation>100&&deformation<180){
  car.shapeColor="yellow";

}
if(deformation<100){
  car.shapeColor="green";
}
  }  
  drawSprites();
}