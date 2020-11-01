//Author : Mihishkaa Sinha
//Drop Supplies And Medical Kits In The Middle Of A Zombie Apocalypse.

//declare all the variables and constants
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, panel_1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//create the function preload for loading all the images
function preload()
{
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

//create the function setup
function setup() {
	createCanvas(800, 700);
	
	//create a sprite for the package
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	//create a sprite for the helicopter
	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	//create a sprite for the ground
	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)

	//create a sprite for the panel1
	panel_1_Sprite = createSprite(400, 645, 130, 20);
	panel_1_Sprite.shapeColor = color("red")

	//create a sprite for the panel2
	panel_2_Sprite = createSprite(460, 590, 20, 130);
	panel_2_Sprite.shapeColor = color("red")

	//create a sprite for the panel3
	panel_3_Sprite = createSprite(330, 590, 20, 130);
	panel_3_Sprite.shapeColor = color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, { restitution : 0.6, isStatic : true });
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic : true } );
 	World.add(world, ground);

	//create panel1
	panel_1 = Bodies.rectangle(400, 645, 130, 20, { isStatic : true })
	World.add(world, panel_1);

	//create panel2
	panel_2 = Bodies.rectangle(460, 590, 20, 130, { isStatic : true })
	World.add(world, panel_2);

	//create panel3
	panel_3 = Bodies.rectangle(330, 590, 20, 130, { isStatic : true })
	World.add(world, panel_3);

	Engine.run(engine);

}

//create the function draw
function draw()
{

  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x
  packageSprite.y = packageBody.position.y
  keyPressed();
  drawSprites();

}

//create the function keyPressed
function keyPressed() {
 if (keyCode === DOWN_ARROW)
 {
	Matter.Body.setStatic(packageBody, false);
 }
}