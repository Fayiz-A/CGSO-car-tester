var car, wall;

var speed, weight;

var deformation;

var retestButton;

function setup() {
  createCanvas(1500, 400);

  speed = random(55, 90);
  weight = random(400 , 1400);

  wall = createSprite(1300, 200, 50, 200);
  wall.shapeColor = color(80, 80, 80);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";
  car.velocityX = speed;

  retestButton = new Clickable();
  retestButton.x = 750;
  retestButton.y = 200;
  retestButton.width = 150;
  retestButton.color = "green";
  retestButton.text = "TEST ANOTHER CAR";
  retestButton.textColor = "white";
}

function draw() {
  background(0,0,0);  

  if(wall.x - car.x < wall.width/2 + car.width/2) {
    car.velocityX = 0;
    
    deformation = (0.5 * weight * speed * speed) / 22500;

    if(deformation < 100) {
      displayText("Safe for passengers", color(0, 255, 0), 300, 30);
      car.shapeColor = color(0, 255, 0);
    } 

    else if(deformation > 100 && deformation < 180) {
      displayText("Average for passengers", "yellow", 300, 30);
      car.shapeColor = "yellow";
    }

    else {
      displayText("Unsafe for passengers", "red", 300, 30);
      car.shapeColor = "red";
    }

    displayText("Deformation: " + Math.round(deformation), "white", 600, 30);
    retestButton.draw();

    retestButton.onPress = function() {
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
  fill(color);
  textStyle(BOLD);
  textFont("cursive");
  textSize(25);
  text(information, coordinateX, coordinateY);
}