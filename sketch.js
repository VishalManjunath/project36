var dog,hungryDog,happyDog;
var feedPet, addFood;
var foodObj;


function preload(){
  hungryDog=loadImage("Dog.png");
  happyDog=loadImage("happyDog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(hungryDog);
  dog.scale=0.15;

  foodObj = new Food(70, 70);

  feedPet = createButton("Feed the Dog");
  feedPet.position(700, 95);
  feedPet.mousePressed(feedDog);

  addFood = createButton("Add Foods");
  addFood.position(800, 95);
  addFood.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);

  foodObj.display();

  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog() {
  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<= 0) {
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  } else {
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
}


//function to add food in stock
function addFoods() {
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}