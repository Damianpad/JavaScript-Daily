//Exercise 1

// Guess what answers you would get if you ran this in the
// Javascript Console in Google Chrome. Once you have an answer  to the questions then 
// check them by copying them and running it in the console yourself line by line 


//Evaluate the below:
5 + "34"

5 - "4"

10 % 5

5 % 10

"Java" + "Script"

" " + " "

" " + 0

true + true

true + false

false + true

false - true

3 - 4

"Bob" - "bill"



//Evaluate the below comparisons:
5 >= 1

0 === 1

4 <= 1

1 != 1

"A" > "B"

"B" < "C"

"a" > "A"

"b" < "A"

true === false

true != true



// Make the string: "Hi There! It's "sunny" out" by using the + sign:
console.log("Hi" + " there! It\'s \"sunny\" out");


//Exercise 2

// Evaluate what answers you would get if you ran this in the
// Javascript Console in Google Chrome. Answer the questions then 
// check them by copying them and running it in the console yourself 
// line by line 


// add variable "firstName" and "lastName" // so that they equal your name


// create a variable that holds the answer // of "firstName" + " " + "lastName"

// Evaluate this question. What is a + b?
var a = 34;
var b = 21;
a = 2;
a + b // what is the answer here?

// What is c equal to?
var c;

//Excercise 3

// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
prompt("What's the first number?")
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  


// BONUS: Make a program that can subtract, multiply, and also divide!


//Excercise 4
// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"




//Excercise 5
// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter: checkDriverAge(92);
//it returns "Powering On. Enjoy the ride!"
