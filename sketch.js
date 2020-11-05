const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, slingshot;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, 
block14, block15, block18, block19, block20, block21, block22;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,height,800,20);
  
  //level one
  block1 = new Block(360, 235, 30, 40);
  block2 = new Block(360, 235, 30, 40);
  block3 = new Block(360, 235, 30, 40);
  block4 = new Block(360, 235, 30, 40);
  block5 = new Block(360, 235, 30, 40);
  block6 = new Block(360, 235, 30, 40);
  block7 = new Block(360, 235, 30, 40);
  
  //level two
  block8 = new Block(330, 235, 30, 40);
  block9 = new Block(360, 235, 30, 40);
  block10 = new Block(390, 235, 30, 40);
  block11 = new Block(420, 235, 30, 40);
  block12 = new Block(450, 235, 30, 40);
  
  //level three
  block13 = new Block(360, 195, 30, 40);
  block14 = new Block(360, 195, 30, 40);
  block15 = new Block(420, 195, 30, 40);
  
  //top
  block16 = new Block(390, 155, 30, 40);
  //block17 = new Block(360, 235, 30, 40);
  //block18 = new Block(360, 235, 30, 40);
  
  polygon = Matter.Bodies.polygon(50, 200, 5, 20,);
  //polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingshot = new Slingshot(this.polygon, {x:100,y:200});
}

function draw() {
  background(255,255,255);  
  ground.display();
  slingshot.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}