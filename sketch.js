
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var dustbinObj,groundObject	;
var world,paper,launcher;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
    paper=new Paper(100,300,70);
    launcher=new Launcher(paper.body,{x:100,y:300});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paper.display();
  launcher.display();
  groundObject.display();
  dustbinObj.display();
  
}
//function keyPressed(){
//	if(keyCode === UP_ARROW){
//		Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-75})
//	}


function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly()
}
