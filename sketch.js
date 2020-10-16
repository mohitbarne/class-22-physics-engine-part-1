//nameSpace
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

//global variables for engine ,world and object
var myengine, myworld
var object,ball

function setup() {
  createCanvas(400,400);
  //creating engine and world ,making world part of the engine
  myengine = Engine.create();
  myworld = myengine.world

  //rectangle bodies
  object = Bodies.rectangle(100,10,50,50);
  //adding object to the world
  World.add(myworld,object)
  
  console.log(object)
  console.log(object.position)
  console.log(object.position.x)
  
  //rstitution to make the ball bounce
  balloption = {
    restitution : 1.0
  }
  
  ball = Bodies.circle(200,200,50,balloption)
  World.add(myworld,ball)

  //to make the object stable or static
  var option = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,370,400,20, option);
  World.add(myworld,ground)

}

function draw() {
  background(0);
  
  //update the engine because x and y axis also keep updatig 
  Engine.update(myengine)

  //representation of the rect object
  rectMode(CENTER) 
  rect(object.position.x,object.position.y,50,50)

  //representation of the ball which bounces
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50)


  //representation of the ground which s stable or not moving
  rectMode(CENTER) 
  rect(ground.position.x,ground.position.y,400,20)


}