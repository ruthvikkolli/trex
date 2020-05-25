var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,cloud_img,cloudGroup;
var obstacle,obstale_1,obstacle_2,obstacle_3,obstacle_4,obstacle_5,obstacle_6

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloud_img=loadImage("cloud.png")
  obstacle_1=loadImage("obstacle1.png")
  obstacle_2=loadImage("obstacle2.png")
  obstacle_3=loadImage("obstacle3.png")
  obstacle_4=loadImage("obstacle4.png")
  obstacle_5=loadImage("obstacle5.png")
  obstacle_6=loadImage("obstacle6.png")

  
  
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false


  cloudGroup=new Group();

}


  

function draw() {
  background("white");
  
  
   
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  
  spawnObstacles();
  
  spawnClouds();
  
  trex.collide(invisibleGround);
  drawSprites();
  
  
  
}  
function spawnClouds(){
if(frameCount %  60===0){
cloud=createSprite(600,120,40,10);
  cloud.y = random(80,120);
  cloud.scale=0.5;
  cloud.velocityX=-3;
  cloud.addImage(cloud_img);
  cloud.lifetime=200
  cloud.depth=trex.depth
  trex.depth=trex.depth+1
  cloudGroup.add(cloud)
}



}
function spawnObstacles(){
if(frameCount%60===0){
obstacle=createSprite(600,150,40,10);
obstacle.velocityX= -2
  var rand = Math.round(random(1,6));
  console.log(rand)
  
  obstacle.scale=0.5
  switch(rand){
      case 1:obstacle.addImage(obstacle_1);
         break;
          case 2:obstacle.addImage(obstacle_2);
         break;
          case 3:obstacle.addImage(obstacle_3);
         break;
          case 4:obstacle.addImage(obstacle_4);
         break;
          case 5:obstacle.addImage(obstacle_5);
         break;
          case 6:obstacle.addImage(obstacle_6);
         break;
         }










}


}
















