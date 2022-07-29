/* Write a program that prints out the bubble solution index# and its score
Print the total number of scores
Print the highest scores
Print the Solutions with the highest scores

Example:

Bubble Solution #0 Score: 60
Bubble solution #1 Score: 50
| Rest of Scores go here
| Rest of Scores go here

Bubble tests: 36
Highest Score: 69
Solutions with highest score: #11, #18

*/

const score = [60,50,60,58,54,45,58,50,52,54,48,69,34,55,51,52,44,51,69,64,66,55,52,61,46,31,57,52,44,18,41,53,55,61,51,44];

i = 0;
while(i < score.length) {
  output = `Bubble Solution #${i} Score: ${score[i]}`;
  console.log(output)
  i++;
}

console.log(` Bubble tests: ${score.length}`);
