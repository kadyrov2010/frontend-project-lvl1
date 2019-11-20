import { cons } from 'hexlet-pairs';
import playGame from '..';
import randomNumb from '../utilities';

const ruleGame = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => {
  if (!y) return y === 0 ? x : NaN;
  return findGcd(y, x % y);
};

const generateCondition = () => {
  const num1 = randomNumb();
  const num2 = randomNumb();
  const qustion = `${num1} ${num2}`;
  const correctAnswer = String(findGcd(num1, num2));
  return cons(qustion, correctAnswer);
};

const gameGsd = () => playGame(ruleGame, generateCondition);

export default gameGsd;
