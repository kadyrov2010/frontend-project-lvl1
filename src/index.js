import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundsToWin = 3;

const playGame = (dataGame, rule) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${rule}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  const playRounds = (data, rounds) => {
    const regulat = data();
    const question = car(regulat);
    const correctAnswer = cdr(regulat);
    if (rounds === 0) {
      return true;
    }
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
      return false;
    }
    return playRounds(dataGame, rounds - 1);
  };
  const isWinner = playRounds(dataGame, roundsToWin);
  if (isWinner) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default playGame;
