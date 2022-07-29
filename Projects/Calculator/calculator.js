firstNumber = Number(prompt("First Number: "));
secondNumber = Number(prompt("Second Number: "));

const numberAdd = (firstNumber, secondNumber) => firstNumber + secondNumber;

const numberSub = (firstNumber, secondNumber) => firstNumber - secondNumber;

const numberMulti = (firstNumber, secondNumber) => firstNumber * secondNumber;

const numberDivide = (firstNumber, secondNumber) => firstNumber / secondNumber;

const choice = userChoice => {
    if (userChoice == "add") {
        console.log("Adding...");
        console.log(numberAdd(firstNumber, secondNumber));
    } else if (userChoice == "subtract") {
        console.log("Subtracting...");
        console.log(numberSub(firstNumber, secondNumber));
    } else if (userChoice == "multiply") {
        console.log("Multiplying...");
        console.log(numberMulti(firstNumber, secondNumber));
    } else if (userChoice == "divide") {
        console.log("Dividing...");
        console.log(numberDivide(firstNumber, secondNumber));
    } else {
        console.log("There was an error...");
        console.log("Please choose to: add, subtract, multiply, or divide...");
    }
}

userChoice = prompt("Would you like to: add, subtract, multiply, or divide? ");

console.log(choice(userChoice));