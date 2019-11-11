import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';


const playRounds = (conditionsGame, currentRound, roundsToWin) => {
  const regulat = conditionsGame();
  const quest = car(regulat);
  const correctAnswer = cdr(regulat);

  if (currentRound > roundsToWin) {
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
  return playRounds(conditionsGame, currentRound + 1, roundsToWin);
};

const roundsToWin = 3;
const currentRound = 1;

const frameGame = (ruleGame, conditionsGame) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${ruleGame}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  const isWinner = playRounds(conditionsGame, currentRound, roundsToWin);
  if (isWinner) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default frameGame;
