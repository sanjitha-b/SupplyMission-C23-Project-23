var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700)
	rectMode(CENTER)
	packageSprite=createSprite(width/2, 80, 10,10)
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	helicopterSprite=createSprite(width/2, 200, 10,10)
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	lbox = createSprite(300,580,20,150)
  rbox = createSprite(500,580,20,150)
  box = createSprite(400,680,200,20)
lbox.shapeColor=('red')
rbox.shapeColor=('red')
box.shapeColor=('red')
	groundSprite=createSprite(width/2,height-35,width,10)
	groundSprite.shapeColor=color('blue')
	engine = Engine.create()
	world = engine.world
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true})
	World.add(world, packageBody)
	ground = Bodies.rectangle(width/2, 650,width,10 ,{isStatic:true} )
 	World.add(world, ground)
	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER)
  background(0)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  whenkeyisPressed()
  drawSprites()
 
}

function whenkeyisPressed() {
 if (keyCode === LEFT_ARROW) {
translation={x:-10,y:0}   
helicopterSprite.x = helicopterSprite.x-10
Matter.Body.translate(packageBody,translation) 
  }

else if(keyCode===RIGHT_ARROW){

	helicopterSprite.x = helicopterSprite.x+10
	translation={x:10,y:0}
	Matter.Body.translate(packageBody,translation) 

}
else if(keyCode===DOWN_ARROW){
	Matter.Body.setStatic(packageBody,false)
}
}


