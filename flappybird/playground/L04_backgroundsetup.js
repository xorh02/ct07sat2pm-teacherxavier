//declare variables
let bird, floor;
let midflapimg, bg ,base;

//load assets in (Images & sound)
function preload(){
    //add in the image link 
    midflapimg = loadImage('assets/redbird-midflap.png');
    bg = loadImage('assets/background-night.png');
    base = loadImage('assets/base.png');
}

function setup(){
    createCanvas(400,600);
    // background(255);//0-> black 255->white
    //variable = new Sprite();
    bird = new Sprite();
    //initialise the properties w,h,x,y
    bird.x = 200;
    bird.y = 300;
    bird.width = 20;
    bird.height = 20;
    bird.img = midflapimg;
    bird.collider = 'dynamic';
    bird.mass =2;
    bird.bounciness = 0.05;
    world.gravity.y = 10;

}

function draw(){
    //adding the image to the background
    image(bg,0,0,width , height);
}