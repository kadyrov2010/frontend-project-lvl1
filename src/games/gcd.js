import { cons } from 'hexlet-pairs';
import { frameGame } from '..';
import randomNumb from '../utilities';

const ruleGame = 'Find the greatest common divisor of given numbers.\n';

const comDiv = (a, b) => {
  while (a !== 0 && b !== 0) {
    if (a > b) {
      // eslint-disable-next-line no-param-reassign
      a %= b;
    } else {
      // eslint-disable-next-line no-param-reassign
      b %= a;
    }
  }
  return a + b;
};

const conditionsGame = () => {
  const num1 = randomNumb();
  const num2 = randomNumb();
  const nums = `${num1} ${num2}`;
  const correctAnswer = String(comDiv(num1, num2));
  const quest = nums;
  return cons(quest, correctAnswer);
};

const gameGsd = () => frameGame(ruleGame, conditionsGame);

export default gameGsd;
