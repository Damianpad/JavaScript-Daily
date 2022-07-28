//Create a car class
//Give it the properties: make, year, and model
class Car {
    constructor(year,make,model){
        this.year = year;
        this.make = make;
        this.model = model;
    }
}

class Dog {
    constructor(name, breed, age){
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
}

let myDog1 = new Dog("Pug", 2);
console.log(myDog1.breed);
console.log(myDog1.age);

//instantiate a car
let myCar1 = new Car(2009,"Mazda", "Mazda 3");


//Return the sum of Two Number
const numAdd = (a, b) => a + b;

console.log(numAdd(500, 100));

//Convert Minutes into seconds
const converter = (a) => {
    let result = a * 60;
    console.log(`There are ${result} seconds in ${a} minutes`);
}

console.log(converter(500));

/* Write a JavaScript program to display the current day and time in the following format:
 Sample Output:
 Today is: Tuesday
 Current time is: 10:30 PM
*/




// Write a JavaScript program to find the area of a triangle where lengths of the three sides are: 5,6,7

/*  Write a program where the program takes a random integer between 1 to 10 and the user is prompted to input a guess. If the user
matches with 
*/