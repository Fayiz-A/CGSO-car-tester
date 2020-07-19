var car, wall;

var speed, weight;

var deformation;

var retestButton;

function setup() {
  createCanvas(1500, 400);

  speed = random(55, 90);//Generates a random velocityX for the car
  weight = random(400 , 1400);//Generates a random weight for the car

  //creates the wall
  wall = createSprite(1300, 200, 50, 200);
  wall.shapeColor = color(80, 80, 80);
  
  //creates the car
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";
  car.velocityX = speed;

  //These commands are of a new library called p5.clickable.js 
  retestButton = new Clickable();//creates the retest button
  retestButton.x = 750;//gives it the coordinate values
  retestButton.y = 200;
  retestButton.width = 150;//sets its width
  retestButton.color = "green";//makes the button green in color
  retestButton.text = "TEST ANOTHER CAR";//the text to be displayed in the button
  retestButton.textColor = "white";//the color of the text in the button
}

function draw() {
  background(0,0,0);//clears the background and makes it black

  if(wall.x - car.x < wall.width/2 + car.width/2) {
    //this condition checks whether the car has touched the wall from the left direction
    //this condition detects collision from the left direction only as the car can collide into the wall from that direction only
    car.velocityX = 0;//stops the car
    
    deformation = (0.5 * weight * speed * speed) / 22500;//calculates the deformation

    if(deformation < 100) {
      //executes the following code when the deformation is less than 100 
      displayText("Safe for passengers", color(0, 255, 0), 300, 30);
      car.shapeColor = color(0, 255, 0);//makes the color of the car green
    } 

    else if(deformation > 100 && deformation < 180) {
      displayText("Average for passengers", "yellow", 300, 30);
      car.shapeColor = "yellow";
    }

    else {
      displayText("Unsafe for passengers", "red", 300, 30);
      car.shapeColor = "red";
    }

    displayText("Deformation: " + Math.round(deformation), "white", 600, 30);//Displays the deformation
    retestButton.draw();//draws the retest button

    retestButton.onPress = function() {
      //executes the following code when the button is pressed
      car.x = 50;
      car.shapeColor = "white";

      speed = random(55, 90);
      weight = random(400 , 1500);
      car.velocityX = speed;
    }
  }
  drawSprites();
}

function displayText(information, color, coordinateX, coordinateY) {
  //A function which formats the text in one line itself instead of 4-5 lines
  fill(color);
  textStyle(BOLD);
  textFont("cursive");
  textSize(25);
  text(information, coordinateX, coordinateY);
}
