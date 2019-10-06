import readlineSync from 'readline-sync';

export const randomNumb = (min = 0, max = 189) => Math.floor(Math.random() * (max - min + 1)) + min;
export const firstGame = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}\n`);
  let count = 0;
  while (count < 3) {
    const num = randomNumb();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (num % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (num % 2 !== 0 && answer === 'no') {
      console.log('Correct');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      break;
    }
    count += 1;
  }
  if (count === 3) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Let's try again, ${username}!`);
  }
};
