const checker = (a, b) => a === 100 || b === 100 || a + b === 100;

console.log(checker(100, 0));
console.log(checker(0, 100));
console.log(checker(5, 50));
console.log(checker(80, 20));


const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension("index.html"));
console.log(getFileExtension("webpack.config.js"));




const numberAdd = (a,b) => a + b;
console.log(numberAdd(1000,2));

