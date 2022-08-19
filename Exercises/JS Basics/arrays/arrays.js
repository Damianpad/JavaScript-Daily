/* Basics: JavaScript Arrays */

// Create an array named fruits that contains 4 dirrerent types of fruits
const fruits = ["Apples", "Grapes", "Bananas", "Watermelon"]

// Print out the "Grapes" element to the console
console.log(fruits[1]);

// Change the "Bananas" value to "Peach"
fruits[2] = "Peach"

// Add a Strawberry value to the fruits array
fruits.push("Strawberry");
for (let i = 0; i < fruits.length; i++) {
  console.log(`Here's a: ${fruits[i]}`);
}

// Print the length of the fruits array
console.log(fruits.length);

// iterate over the fruits array
for (var i = 0; i < fruits.length; i++) {
  console.log("Hello " + fruits[i])
}


// Print the last item in the array
const lastItem = fruits.length - 1;
console.log(fruits[lastItem]);

// Loop through the fruits array and print out each one to the console
for (let i = 0; i < fruits.length; i++) {
  console.log(i);
}

// Write a JavaScript function that returns the first element of fruits

const first = (n) => {
  return n[0];
}

console.log(first(fruits));

//