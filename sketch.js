var player, opponent, bullets, bgImg, playerSpaceship, opponentSpaceship, bulletImg
var rightButton, leftButton, rightImg, leftImg
var obstacle1Img, obstacle2Img, obstacle3Img, obstacle4Img, obstacle5Img
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5
var bulletGroup

function preload(){
bgImg=loadImage("wp4588406.jpg")
playerSpaceship=loadImage("playerSpace.png")
opponentSpaceship=loadImage("opponentSpace.png")
bulletImg=loadImage("unnamed.png")
rightImg=loadImage("right.png")
leftImg=loadImage("left.png")
obstacle1Img=loadImage("asteroid1.png")
obstacle2Img=loadImage("asteroid2.png")
obstacle3Img=loadImage("asteroid3.png")
obstacle4Img=loadImage("asteroid4.png")
obstacle5Img=loadImage("asteroid5.png")
}


function setup() {
  createCanvas(800,400);
  player=createSprite(400, 300, 50, 50);
  player.addImage(playerSpaceship)
  player.scale=0.1
  opponent=createSprite(400, 200, 50, 50); 
  opponent.addImage(opponentSpaceship)
  opponent.scale=0.05
  leftButton=createSprite(100,350,20,20)
  leftButton.addImage(leftImg)
  rightButton=createSprite(700,350,20,20)
  rightButton.addImage(rightImg)
  obstacle1=createSprite(500,100,20,20)
  obstacle1.addImage(obstacle1Img)
  obstacle1.scale=0.05
  obstacle1.velocityY=2
  obstacle2=createSprite(200,100,20,20)
  obstacle2.addImage(obstacle2Img)
  obstacle2.scale=0.05
  obstacle2.velocityY=1
  obstacle3=createSprite(300,100,20,20)
  obstacle3.addImage(obstacle3Img)
  obstacle3.scale=0.05
  obstacle3.velocityY=2
  obstacle4=createSprite(400,100,20,20)
  obstacle4.addImage(obstacle4Img)
  obstacle4.scale=0.05
  obstacle4.velocityY=1
  obstacle5=createSprite(600,100,20,20)
  obstacle5.addImage(obstacle5Img)
  obstacle5.scale=0.05
  obstacle5.velocityY=2
  bulletGroup=createGroup();
  }

function draw() {
  background(bgImg);  
  if (keyDown("space")){
    createBullet();
  }
  if (bulletGroup.isTouching(opponent)){
bulletGroup.destroyEach()
opponent.destroy()
  }
  if (mousePressedOver(rightButton)){
    player.velocityX=2
  }
  if (mousePressedOver(leftButton)){
    player.velocityX=-2
  }
  if (bulletGroup.isTouching(obstacle1)){
    bulletGroup.destroyEach()
    obstacle1.destroy()
  }
  if (bulletGroup.isTouching(obstacle2)){
    bulletGroup.destroyEach()
    obstacle2.destroy()
  }
  if (bulletGroup.isTouching(obstacle3)){
    bulletGroup.destroyEach()
    obstacle3.destroy()
  }
  if (bulletGroup.isTouching(obstacle4)){
    bulletGroup.destroyEach()
    obstacle4.destroy()
  }
  if (bulletGroup.isTouching(obstacle5)){
    bulletGroup.destroyEach()
    obstacle5.destroy()
  }
  drawSprites();
}

function createBullet(){
  var bullets=createSprite(400, 300, 5, 5);
  bullets.addImage(bulletImg)
  bullets.scale=0.04
  bullets.velocityX=0
  bullets.velocityY=-2
  bulletGroup.add(bullets)
  
}