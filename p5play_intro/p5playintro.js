let ball;
let box;
function setup() {
  // Set up the canvas
  new Canvas(400, 600);
  background(250); //background color

  // Basic shape testing
  // write your codes here

  // End Basic shape testing

   //give it color
    fill("skyblue");

   //how to create a circle -> circle(x,y,diameter);
    circle(30,30,50);

    //how to create a rectangle -> rect(x,y,width,height);
    rect(50,50,100,200);

   // Create a bouncing ball sprite
   // write your codes here
   ball = new Sprite();
   ball.x = 360;
   ball.y =30;
   ball.diameter =40;
   ball.color = 'red';

   //create a rect 
   box = new Sprite();
   box.x
   box
}

function draw() {
  // write your codes here
}