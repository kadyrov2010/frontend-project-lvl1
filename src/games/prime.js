import { cons } from 'hexlet-pairs';
import { frameGame } from '..';
import randomNumb from '../utilities';

const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (x) => {
  if (x < 2) {
    return false;
  }
  for (let i = 2; i < (x / 2); i += 1) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

const generateCondition = () => {
  const question = randomNumb();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const gameIsPrime = () => frameGame(ruleGame, generateCondition);

export default gameIsPrime;
