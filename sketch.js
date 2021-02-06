
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground1;
var stone;
var rubber;
var iron;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 hammer= new Hammer(400,350,190,45);
	 stone= new Stone(400,550,130,130);
   ground1= new Ground(400,700,800,20);
   rubber= new Rubber(650,530,100)
   iron= new Iron(200,550,90,60)
   sand1= new Sand(100,550,10);
   sand2= new Sand(110,550,10);
   sand3= new Sand(120,550,10);
   sand4= new Sand(130,550,10);
   sand5= new Sand(140,550,10);
   sand6= new Sand(150,550,10);
   sand7= new Sand(160,550,10);
   sand8= new Sand(170,550,10);
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);

  hammer.display();
  ground1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  stone.display();
  rubber.display();
  iron.display();
  drawSprites();
 
}



