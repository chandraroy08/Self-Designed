function setup() {
  createCanvas(800,400);
  block1 = createSprite(100,50,800,10)
  block1.shapeColor="red"
  block2= createSprite(100,150,500,10)
  block2.shapeColor="red"
  block3= createSprite(500,300,10,500)
  block3.shapeColor="red"
  block4= createSprite(350,700,10,1200)
  block4.shapeColor="red"
  block5= createSprite()

}

function draw() {
  background(255,255,255);  
  drawSprites();
}