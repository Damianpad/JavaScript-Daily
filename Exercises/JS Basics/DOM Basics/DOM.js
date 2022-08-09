/*
DOM Selectors
-------------
getElementByTagName
getElementByClassName
getElementById

querySelector
querySelectorAll

getAttribute
setAttribute
*/

//Using the getElementById selector select and print the milk li

let milk = document.getElementById("milk");
console.log(milk);

// Using querySelector select and print 
let apple = document.querySelector("li");
console.log(apple);

// Using querySelectorAll Select all of the li and h1 in the document

let allElements = document.querySelectorAll("h1", "li");
console.log(allElements);

// Use the getAttribute selector to select the random in Apples
let attSelector = document.querySelector("li").getAttribute("random");
console.log(attSelector);

// Use the setAttribute selector to set the random value to 1000
let newValue = document.querySelector("li").setAttribute("random", "1000");
console.log(newValue);
