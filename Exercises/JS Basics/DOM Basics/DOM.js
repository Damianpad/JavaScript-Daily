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

/* Changing Styles
style.{property}

className
classList

classList.add
classList.remove
classList.toggle
*/

// Using the style.{property} change the color of the h1
let newBackground = document.querySelector("h1").style.color = "Blue";


// Using the style.{property} to add a border to the h1
let newBorder = document.querySelector("h1").style.border = "solid";
let newStyle = document.querySelector("ul").style.color = "red";

// Use querySelector to select the bth and make it print thanks when clicked

let btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
  console.log("Thanks!");
})