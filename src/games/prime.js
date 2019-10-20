import { cons } from 'hexlet-pairs';
import { frameGame } from '..';
import randomNumb from '../utilities';

const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (x) => {
  if (x < 2) {
    return false;
  }
  for (let i = 2; i < x; i += 1) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

const conditionsGame = () => {
  const num = randomNumb();
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  const quest = num;
  return cons(quest, correctAnswer);
};

const gameIsPrime = () => frameGame(ruleGame, conditionsGame);

export default gameIsPrime;
