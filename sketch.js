
var trex ,trex_running,ground,ground_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_running=loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)//width and height
  trex = createSprite(20,150,10,10)
  trex.addAnimation("Rex",trex_running)
  trex.scale = 0.5

  ground = createSprite(20,180,400,20)
  ground.addImage(ground_running)
  ground.velocityX = -4
  
  
}

function draw(){
  background("yellow")
  drawSprites()
  

}
