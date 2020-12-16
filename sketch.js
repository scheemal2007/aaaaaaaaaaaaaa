
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1
var ground1

var dustbin1, dustbin2, dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	paper1 = new paper(200,650,60)
	ground1=new ground(800,680,1600,20)
	dustbin1=new dustbin(1200,650)


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  paper1.display()
  ground1.display()
  dustbin1.display()
  drawSprites();
 
}

function keyPressed() {
   if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(paper1.body, paper1.body.position,{x:130,y:-145})
   }
}



