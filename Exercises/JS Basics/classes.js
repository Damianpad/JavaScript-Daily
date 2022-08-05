//ES6 introduced JavaScript Classes
// JavaScript classes are templates for JavaScript Objects


// Create a Car class

class Car {
  constructor(make, model, year, color, convertable) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.convertable = convertable;
  }
}

/*
QUESTION: What is the constructor method used for?
*************************
WRITE YOUR RESPONSE HERE:
The constructor method is used to initialize object properties
*************************
*/


// Use the Car class to create a car

let myCar1 = new Car("Mazda", "3", 2019, "Black", false);
console.log(``)