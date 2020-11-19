
//matter.js

const Engine=Matter .Engine // 1. namespacing
const World=Matter. World
const Bodies=Matter.Bodies
var circle, circle2;
var engine, world,ground;

function setup() {

createCanvas(800,400);
engine = Engine.create(); //2. Creating the physics Engine
world= engine.world;   //3.  creating the world


var ground_options=
{
  isStatic:true
}
var circle_options={
  restitution:1
}
ground = Bodies.rectangle(400,380,800,20,ground_options) //4. craeting the body
World.add(world, ground)//5. adding object to world

circle= Bodies.circle(100,100,40,circle_options)
World .add(world,circle) 

circle2= Bodies.circle(200,100,20,circle_options)
World .add(world,circle2) 

console.log( ground)
console.log( circle)
}
function draw() {
  background(0);  
Engine.update(engine)// 6. Update physics engine at every frame

rectMode(CENTER)
fill ("blue")
rect (ground.position.x,ground.position.y,800,20)// 7. display the object

ellipseMode(RADIUS)
fill ("purple")
ellipse(circle.position.x, circle .position.y,40)
 

ellipseMode (RADIUS)
fill ("green");
ellipse (circle2.position.x, circle2.position.y , 20)
  drawSprites();
}