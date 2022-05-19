var mob;
var gameState = "play";
var mobsGroup;
var skeImg,zombImg;
var player, playerImg;
var backImg;



function preload(){
  skeImg = loadImage("ske.png");
  zombImg = loadImage("zomb.png");  
  playerImg = loadImage("player.png"); 
  backImg = loadImage("back.jpg");
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight-1);
  
  mobsGroup = new Group();  
  console.log(windowHeight);
  console.log(windowWidth);
}

function draw(){
   background(backImg);
   
  if (gameState === "play") {
    
      if(keyDown("up_arrow")){
        player.y = player.y - 30;
     }
    
     if(keyDown("down_arrow")){
      player.y = player.y + 30;
    }
    
    if(keyDown("space")){
      player.velocityX = 10;
    }
    
     

    
  //   spawnDoors();
  spawnMobs();
    
    
    
   
  }
  
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
  drawSprites();
}

function spawnMobs() {
  background(backImg);
  player = createSprite(250,250,50,50);
  player.scale = 0.6;
  player.addImage(playerImg)
  //write code here to spawn the doors in the tower
  if (frameCount % 1 === 0) {
    
    mob = createSprite(random(1000,1500),random(100,1500),50,50);
    
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: mob.addImage(skeImg);
              mob.scale = random(0.3,0.7);
              break;
      case 2: mob.addImage(zombImg);
              mob.scale = random(0.7,1);
              break;
      // case 3: obstacle.addImage(obstacle3);
      //         break;
      // case 4: obstacle.addImage(obstacle4);
      //         break;
      // case 5: obstacle.addImage(obstacle5);
      //         break;
      // case 6: obstacle.addImage(obstacle6);
      //         break;
      default: break;
    }
    
    
    mob.velocityX = -0.8;    
    
    
    // ghost.depth = door.depth;
    // ghost.depth +=1;
   
    //assign lifetime to the variable
    mob.lifetime = 1500;

    
    //add each door to the group
    mobsGroup.add(mob);
    
  }
}



