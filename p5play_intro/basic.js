//to declare a variable
let base =10;
let height = 5;
let area;
function setup() {
  //create ur canvas 800 x400
  new Canvas(800,400);
  background(220);
  textSize(16);
  // write your codes here
  // to print -> console.log("something");

  // --- Exercise: Area of Triangle ---
  // write your codes here
  area = 0.5 * base *height;
  console.log("The area of the triangle is :",area);
  //text(what u wan to print , x position of where u wan it to be, y position of where u wan it to be)
  text("The area of the triangle is:" + area,300,200);


  // --- Exercise: Sum of first 10 even numbers ---
  // write your codes here
  //python for loop for i in range(5);
  // for(let i=0; i<5 ;i++){ }  
  let sum=0;
  for(let i=0;i<=20;++i){
    if(i%2==0){
      sum += i;
    }
  }
  console.log("Sum of first ten even numbers is: ",sum);
  text("Sum of first ten even numbers is: "+sum,300,225);

  // --- Exercise: Age category classification ---
  // write your codes here how to do if else if else statement
  // if(condition){
  //   action
  // }else if(condition){
  //    action
  // }else { action}
  let age =10;
  if(age<=9){
    console.log("Lower Primary");
  }else if(age <= 12){
    console.log("Upper Primary");
  }else{
    console.log("Secondary");
  }
  
  // --- Exercise: Display odd numbers backward using while loop ---
  // write your codes here
  // while(condition){
  //    action 
  // }
  // count++ is the same as count = count + 1
  //first method
  // let count =19;
  // while(count >=1){
  //   console.log(count);
  //   count -=2;
  // }
  //second method
  let count2 = 19;
  while(count2 >=1){
    if(count2 %2 ===1){
      console.log(count2);
    }
    --count2;
  }


  // --- Exercise: Array operations (groceries) ---
  // write your codes here
}

//define draw function
function draw(){

}