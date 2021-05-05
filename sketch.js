
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var hammer1;
var stone1;
var rubber1;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,50);
	hammer1 = new hammer(20,100);
	stone1 = new Stone(100,100,70,70);
	rubber1 = new Rubber(200,200,70);
  
}


function draw() {
  
  background("skyblue");
  Engine.update(engine);
  
  hammer1.display();
  stone1.display();
  rubber1.display();
  ground.display();
 
}



