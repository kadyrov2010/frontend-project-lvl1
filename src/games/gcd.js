import { cons } from 'hexlet-pairs';
import { frameGame } from '..';
import randomNumb from '../utilities';

const ruleGame = 'Find the greatest common divisor of given numbers.\n';

const getCommonDiv = (a, b) => {
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const generateCondition = () => {
  const num1 = randomNumb();
  const num2 = randomNumb();
  const qustion = `${num1} ${num2}`;
  const correctAnswer = String(getCommonDiv(num1, num2));
  return cons(qustion, correctAnswer);
};

const gameGsd = () => frameGame(ruleGame, generateCondition);

export default gameGsd;
