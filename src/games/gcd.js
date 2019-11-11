import { cons } from 'hexlet-pairs';
import frameGame from '..';
import randomNumb from '../utilities';

const ruleGame = 'Find the greatest common divisor of given numbers.\n';

const getCommonDiv = (x, y) => {
  if (!y) return y === 0 ? x : NaN;
  return getCommonDiv(y, x % y);
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
