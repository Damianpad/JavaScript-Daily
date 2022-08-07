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
