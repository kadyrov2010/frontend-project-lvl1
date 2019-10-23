import { cons } from 'hexlet-pairs';
import { frameGame } from '..';
import randomNumb from '../utilities';

const ruleGame = 'Find the greatest common divisor of given numbers.\n';

const getCommonDiv = (a, b) => {
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
  const qustion = `${num1} ${num2}`;
  const correctAnswer = String(getCommonDiv(num1, num2));
  return cons(qustion, correctAnswer);
};

const gameGsd = () => frameGame(ruleGame, conditionsGame);

export default gameGsd;
