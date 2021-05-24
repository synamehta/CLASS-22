var engines,worlds;
var ball,ground;

function setup() {
createCanvas(400,400);

engines=Matter.Engine.create();
worlds=engines.world;

var groundoptions={
  isStatic:true
}
ground=Matter.Bodies.rectangle(200,380,400,40,groundoptions);
Matter.World.add(worlds,ground);

var balloptions={
  restitution:0.5
}

ball=Matter.Bodies.circle(200,100,30,balloptions);
Matter.World.add(worlds,ball);

sun=Matter.Bodies.circle(350,30,20,groundoptions);
Matter.World.add(worlds,sun);

}

function draw() {
  background("lightgreen");

 Matter.Engine.update(engines);

 fill("green");
 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,40); 

 fill("lightblue");
 ellipseMode(RADIUS); 
 ellipse(ball.position.x,ball.position.y,30,30);

 fill("yellow");
 ellipseMode(RADIUS);
 ellipse(sun.position.x,sun.position.y,20,20);  
}