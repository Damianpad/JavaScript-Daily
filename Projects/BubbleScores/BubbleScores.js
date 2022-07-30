/* Desired output:

Bubble Solution #0 Score: 60
Bubble solution #1 Score: 50
| Rest of Scores go here
| Rest of Scores go here

Bubble tests: 36
Highest Score: 69
Solutions with highest score: #11, #18

*/

const score = [60, 50, 60, 58, 54, 45, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
const highScore = Math.max(...score);
const highestSolutions = score.indexOf(highScore);

i = 0;
while (i < score.length) {
  output = `Bubble Solution #${i} Score: ${score[i]}`;
  console.log(output)
  i++;
}

const maxIndices = () => {

}

console.log(`Bubble tests: ${score.length}`);


console.log(`Highest Score: ${highScore}`);
console.log(`Solutions with highest score: #${highestSolutions}`);