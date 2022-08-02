// Create a checy Object. Give it the following properties: make, model, year, color, passengers.

const chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2
};

// Access the model of your chevy object

console.log(chevy.make);

// Access the year of your chevy object

console.log(chevy.year);

// Change the color of your chevy object

chevy.color = "black"
console.log(chevy.color);

// Create a new property to your chevy object called "needsWashing" and set it to true

chevy.needsWashing = true;
console.log(chevy.needsWashing);

// Create an if statement to check if we need to wash our chevy or not

if (chevy.needsWashing == true) {
    console.log("Let's wash our chevy");
} else {
    console.log("Our Chevy doesn't need to be washed.");
}

// Use a for loop to check how many passengers are in the chevy. Add more until the chevy is full of passengers.

for (let i = 0; i <= chevy.passengers; i++) {
    console.log(`There are ${i} passengers in our car`);
}



const dog = {
    weight: 21
}

var bark;


if (dog.weight > 20) {
    bark = "WOOF WOOF"
} else {
    bark = "woof woof"
}

var speak = bark

console.log(speak)