// Create a for loop to iterate of the following array:

const cars = ["Toyota", "Ford", "BMW", "Honda", "Acura"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

const fruitsArr = ["Apple", "Bananas", "Oranges", "Grapes", "Peach"];

for (let i = 0; i < fruitsArr.length; i++) {
    console.log(fruitsArr[i]);
}

// Write a function that will loop through any 

function printNumbers(n) {
    for (i = 0; i < n; i++) {
        console.log(i);
    }
}

printNumbers(25);
printNumbers(1000);

// write a function that will loop through a 2D array and print the values

function printArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            console.log(arr[i][j]);
        }
    }
}
var arr = [[1, 2],
[3, 4],
[5, 6]];

printArray(arr) //1 2 3 4 5 6

// write a function to print EVEN numbers in a given array

// write a function to detele all occurence of an element in a given array

// write a for loop to demonstrate Async loop

// write a function to find the number of digits in a number