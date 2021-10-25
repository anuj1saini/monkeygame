{
var PLAY = 1;
var END = 0;
var gameState = "PLAY";
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score = 0;
}
function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}
function setup() {
  createCanvas(500, 400);
  score = 0;
  ground = createSprite(400,390,1000,20);
  ground.x = ground.width/2;
  ground.velocityX =-4;
  ground1 = createSprite(200,345,400,20);
  ground1.visible = false
  monkey = createSprite(50,300,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;
  bananaGroup = new Group();
  obstaceGroup = new Group();
  monkey.setCollider("rectangle",0,0,100,50);
}
function draw() {
  background(225);
  text("Survival Time: " +score,350,50);
  if ( ground.x < 0){
     ground.x = width/2;
  }
    if(keyDown("space") && monkey.y >= 225 ) {
      monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground1);
  
      if(bananaGroup.isTouching(monkey)){
      bananaGroup.destroyEach();
        score=score+2;
      }
  /*if (gameState === PLAY){
    if(monkey.isTouching(obstacleGroup)){
        gameState = END;
    }


  }
    else if (gameState === END) {
      bananaGroup.setVelocityXEach(0);
      obstacleGroup.setVelocityXEach(0);
      banana.setLifetime = 1000;
      obstacleGroup.setLifetime = 1000;
  }*/
    spawnbanana();
    obstacle();
  drawSprites();
}
function spawnbanana(){
    if (frameCount % 60 === 0) {
      var banana = createSprite(400,200,20,20);
      banana.addImage(bananaImage);
      banana.y = Math.round(random(125,225));
      banana.velocityX=-7;
      banana.scale = 0.1;
      banana.setLifetime = 100;
      bananaGroup.add(banana);
  }
}
function obstacle(){
  if (frameCount % 100 === 0) {
    var obstace = createSprite(400,350,20,20);
    obstace.addImage(obstaceImage); 
    obstace.velocityX=-7;
    obstace.scale = 0.23;
    obstace.setLifetime = 100;
    obstaceGroup.add(obstace);
  }
}
