
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,150,550,50);

	bobObject1 = new Bob(300,500,30);
	rope1 = new Rope(bobObject1.body,roof.body,50,0);

	bobObject2 = new Bob(360,500,30);
	rope2 = new Rope(bobObject2.body,roof.body,100,0);

	bobObject3 = new Bob(420,500,30);
	rope3 = new Rope(bobObject3.body,roof.body,150,0);
	
	bobObject4 = new Bob(480,500,30);
	rope4 = new Rope(bobObject4.body,roof.body,200,0);

	bobObject5 = new Bob(540,500,30);
	rope5 = new Rope(bobObject5.body,roof.body,250,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("YELLOW");
  
  roof.display();
  bobObject1.display();
  rope1.display();
  bobObject2.display();
  rope2.display();
  bobObject3.display();
  rope3.display();
  bobObject4.display();
  rope4.display();
  bobObject5.display();
  rope5.display();
  drawSprites();
 
}



