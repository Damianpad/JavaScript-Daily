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

// Write a function that checks to see if your car is a 1957 Chevy

function prequalify(car) {
    if (car.year == 1957 && car.make == "chevy") {
        console.log("")
    }
}

// Create a function the returns a random car.

const autoMatic = () => {
    const make = ["Chevrolet", "Mazda", "Honda", "BMW", "Lexus"];
    const model = ["Camaro", "MX-5", "Accord", "Z-4", "LS"];
    const year = [2022, 2021, 2020, 2023, 2018];
    const color = ["black", "red", "white", "silver", "blue"];
    const convertable = [true, false];

    let rand1 = Math.floor(Math.random() * make.length);
    let rand2 = Math.floor(Math.random() * model.length);
    let rand3 = Math.floor(Math.random() * year.length);
    let rand4 = Math.floor(Math.random() * color.length);
    let rand5 = Math.floor(Math.random() * convertable.length);


    let car = {
        make: make[rand1],
        model: model[rand2],
        year: year[rand3],
        color: color[rand4],
        convertable: convertable[rand5]
    };
    return car;
};

const displayCar = (car) => {
    console.log(`Your new car is a ${car.year} ${car.make} ${car.model}`)
}

let carToSell = autoMatic();
displayCar(carToSell);