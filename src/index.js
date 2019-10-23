import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';


const playTime = (gameCondit, currentGame, lastGame) => {
  const regulat = gameCondit();
  const quest = car(regulat);
  const correctAnswer = cdr(regulat);

  if (currentGame > lastGame) {
    return true;
  }

  console.log(`Question: ${quest}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
    return false;
  }
  return playTime(gameCondit, currentGame + 1, lastGame);
};

const lastGame = 3;
const currentGame = 1;

export const frameGame = (ruleGame, conditionsGame) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${ruleGame}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  const isWinner = playTime(conditionsGame, currentGame, lastGame);
  if (isWinner) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
