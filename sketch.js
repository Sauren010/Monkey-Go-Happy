var bananaImage;
var obstacleImage;
var scene;
var stone;
var obstaclegroup;
var ground;
var monkey;
var foodGroup;
var score;

function preload(){
  
  backImage = loadImage("jungle2.jpg");
  
  player_running = loadAnimation("Monkey_01.png" , "Monkey_02.png" , "Monkey_03.png" , "Monkey_04.png" , "Monkey_05.png" , "Monkey_06.png" , "Monkey_07.png" , "Monkey_08.png" , "Monkey_09.png" , "Monkey_10.png");
  
  bananaImage = loadImage("Banana.png");
  
  obstacle_img = loadImage("stone.png");
  
  
}

function setup() {
  createCanvas(400,400);
  
  scene = createSprite(0,0,400,400);
  scene.addImage(backImage);
  scene.velocityX=-5;
  
  ground = createSprite(200,300,400,10)
  ground.visible=false;
  
  monkey = createSprite(90,250,10,10)
  monkey.addAnimation("running", player_running)
  monkey.scale=0.09;
  
  foodGroup = new Group();
  obstaclesGroup = new Group();
  
  score=0;
  textSize(18);
  textFont("Georgia");
textStyle(BOLD);
  
}

function draw() {
  background(220);
  
  if(keyDown("space")) {
    monkey.velocityY = -15;
  }
    monkey.velocityY = monkey.velocityY + 0.8
  
  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  
if (foodGroup.isTouching(monkey)){
  foodGroup.destroyEach();
  score=score+2;
  
}
  
  monkey.collide(ground);
  
  switch (score){
    case 10: monkey.scale=0.12;
      break;
    case 20: monkey.scale=0.14;
      break;
    case 30: monkey.scale=0.16;
      break;
    case 40: monkey.scale=0.18;
      break;
    default: break; 
  }
  
  if(obstaclesGroup.isTouching(monkey)){
    monkey.scale=0.07;
  }
 
  
  
    textSize(18);
  textFont("Georgia");
textStyle(BOLD);
  
  bananaspawn();
  obstaclespawn();
  
  drawSprites();
text("Score: "+ score, 300, 90);
} 

function bananaspawn(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,150));
    banana.addImage(bananaImage);   
    banana.scale = 0.05;
    banana.velocityX = -3;
    foodGroup.add(banana);
    
     //assign lifetime to the variable
    banana.lifetime = 200;
  }
}

function obstaclespawn(){
  if (frameCount % 80 === 0){
    var stone = createSprite(660,280,10,10);
    stone.addImage(obstacle_img);
    stone.scale = 0.1;
    stone.velocityX = -3;
    obstaclesGroup.add(stone);
  }
}