//creating variables
var alienImg,alien;
var asteroid,asteroidImg;
var obstacle,obstaclesGroup;
//var starImg,star,starsGroup;

var bgImg,bg;

var spaceshipImg,spaceship;

//var gameOverImg,gameOver;
//var restartImg,restart;

//var PLAY = 1;
//var END = 0;
//var gameState = PLAY;

//score = 0;

function preload(){

   alienImg = loadImage("./assets/alien.png");
   asteroidImg = loadImage("./assets/asteroid.png");
   //starImg = loadImage("star.png");
   bgImg = loadImage("./assets/bg.png");
   spaceshipImg = loadImage("./assets/spaceship.png");
   //gameOverImg = loadImage("gameOver.png");
   //restartImg = loadImage("reset.png");

}

function setup(){

   createCanvas(600,600);
  
   spaceship = createSprite(300,530,50,50);
   spaceship.addImage("spaceship",spaceshipImg);
   spaceship.scale = 0.1;

   //gameOver = createSprite(200,300);
   //gameOver.addImage("gameOver",gameOverImg);

   //restart = createSprite(300,350);
   //restart.addImage("restart",restartImg);

  // gameOver.scale = 0.5;
  // restart.scale = 0.5;

   obstaclesGroup = createGroup();
   //starsGroup = createGroup();
   
  // score = 0;

}

function draw() {

  background(bgImg);

  if(keyDown("left_arrow")){
   spaceship.x = spaceship.x - 10;

}

if(keyDown("right_arrow")){

   spaceship.x = spaceship.x + 10;
 
}

if(keyDown("up_arrow")){

   spaceship.y = spaceship.y - 10;

}
spawnObstacles();

   drawSprites();   
}


   function spawnObstacles(){
      if (frameCount % 60 === 0){
         var obstacle = createSprite(200,165,10,40);
         obstacle.velocityY = +(2);
         
          //generate random obstacles
          var rand = Math.round(random(1,2));
          switch(rand) {
            case 1: obstacle.addImage(alienImg);
                    break;
            case 2: obstacle.addImage(asteroidImg);
                    break; 
                    default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.09;
    obstacle.lifetime = 10000;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
                  
   }

} 
