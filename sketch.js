var fixed,moving


function setup() {
  createCanvas(800,400); 
 fixed= createSprite(400, 200, 50, 50); 
 moving= createSprite(600, 200, 50, 50); 
 fixed.shapeColor="yellow";
 moving.shapeColor="yellow"

}

function draw() {
  background(255,255,255); 
  moving.x=mouseX
  moving.y=mouseY 

  if(fixed.x-moving.x<fixed.width/2+moving.width/2  &&    
    moving.x-fixed.x<fixed.width/2+moving.width/2 &&
    fixed.y-moving.y<fixed.height/2+moving.height/2  &&    
    moving.y-fixed.y<fixed.height/2+moving.height/2 ){

    fixed.shapeColor="orange";
 moving.shapeColor="orange"

  }
  else{
    fixed.shapeColor="yellow";
 moving.shapeColor="yellow"
  }
  drawSprites();
}