var ball
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,20,20)
}

function draw() 
{
  background(30);
  if (keyDown("up_arrow")){
    ball.position.y=ball.position.y-2

  }
  if (keyDown("down_arrow")){
    ball.position.y=ball.position.y+2

  }
  
  if (keyDown("left_arrow")){
    ball.position.x=ball.position.x-2

  }
  if (keyDown("right_arrow")){
    ball.position.x=ball.position.x+2

  }

drawSprites()
}




