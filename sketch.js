
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ballImg
var balloon, balloonImg
var background,backgroundImg
var box



function preload(){

backgroundImg = loadImage("background.png")


}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

 ball = createImg('ball.png')
 ball.position(100,200)
 ball.size(50,50)

balloon = createImg('baloon2.png')
balloon.position(70,250)
balloon.size(100,100);
balloon.mouseClicked(airblow);

box = createImg('box.png')
box.position(100,10)
box.size(80,80)




}



function draw() 
{
  background(51);
  Engine.update(engine);
  



  
}

function airblow(){
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0,y:0.02})
  }
  
  function destroy(){
    if(ball.isTouching(box)){
      box.destroy()
    }
  }