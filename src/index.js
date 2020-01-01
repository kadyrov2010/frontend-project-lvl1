import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundsToWin = 3;

const playGame = (getData, rule) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${rule}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  const iter = (count) => {
    const data = getData();
    const question = car(data);
    const correctAnswer = cdr(data);
    if (count === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    return iter(count - 1);
  };
  return iter(roundsToWin);
};

export default playGame;
