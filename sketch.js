
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400, 680, 800, 20);
ball = new Ball(100, 650, 20);
dustbin = new Dustbin(650, 660);
	Engine.run(engine);
  
}


function draw() {

  background(0);
  


ground.display();
ball.display();
 dustbin.display();
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.applyForce(ball.body, ball.body.position, {x: 45, y: -60});
	}
}



