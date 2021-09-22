var bg
var sleep
var brush
var gym
var eat
var bath
var move
var astronaut
var edges

function preload(){
bg = loadImage("iss.png")
sleep = loadAnimation("sleep.png")
brush = loadAnimation("brush.png")
gym = loadAnimation("gym11.png","gym12.png")
eat = loadAnimation("eat1.png","eat2.png")
bath = loadAnimation("bath1.png","bath2.png")
move = loadAnimation("move.png")
}

function setup() {
  createCanvas(800,400);


astronaut = createSprite(300,230);
astronaut.addAnimation("sleeping",sleep)
astronaut.scale=0.1
astronaut.velocityX = 0
astronaut.velocityY = 0
} 

function draw() {
  background(bg);  
  drawSprites();

  textSize(15)
 text("Instructions:",10,50)
 text("up arrow = brush",10,65)
 text("down arrow = gym",10,80)
 text("left arrow = eat",10,95)
 text("right arrow = bath",10,110)
 text("m = move",10,125)
 
edges = createEdgeSprites();
astronaut.bounceOff(edges);

if(keyDown("UP_ARROW")){
astronaut.addAnimation("brushing",brush);
astronaut.changeAnimation("brushing");
astronaut.y = 350;
astronaut.x = 350
astronaut.velocityX=0
astronaut.velocityY=0
}

if(keyDown("m")){
  astronaut.addAnimation("moving",move)
  astronaut.changeAnimation("moving")
  astronaut.velocityX = -1
  astronaut.velocityY = 1
}

if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gym",gym);
  astronaut.changeAnimation("gym");
  astronaut.y = 350;
  astronaut.x = 400
  astronaut.velocityX=0
  astronaut.velocityY=0
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eat",eat);
    astronaut.changeAnimation("eat");
    astronaut.y = 350;
    astronaut.x = 450
    astronaut.velocityX=0
    astronaut.velocityY=0
    }

    if(keyDown("RIGHT_ARROW")){
      astronaut.addAnimation("bath",bath);
      astronaut.changeAnimation("bath");
      astronaut.y = 350;
      astronaut.x = 500
      astronaut.velocityX=0
      astronaut.velocityY=0
      }
}