import { cons } from 'hexlet-pairs';
import { frameGame } from '..';
import randomNumb from '../utilities';

const ruleGame = 'What number is missing in this progression?\n';

const minStep = 1;
const maxStep = 5;
const leftBorder = 2;
const rightBorder = 7;

const conditionsGame = () => {
  let start = randomNumb();
  const step = randomNumb(minStep, maxStep);
  const hiddenNumb = randomNumb(leftBorder, rightBorder);
  let count = 0;
  let res = '';
  let answer = 0;
  while (count < 9) {
    start += step;
    if (count === hiddenNumb) {
      res = `${res}  ..`;
      answer = start;
    } else {
      res = `${res}  ${start}`;
    }
    count += 1;
  }
  const question = res;
  const correctAnswer = String(answer);
  return cons(question, correctAnswer);
};

const gameProgres = () => frameGame(ruleGame, conditionsGame);

export default gameProgres;
