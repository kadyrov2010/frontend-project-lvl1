import { cons } from 'hexlet-pairs';
import { frameGame } from '..';
import randomNumb from '../utilities';

const ruleGame = 'What number is missing in this progression?\n';

const conditionsGame = () => {
  let start = randomNumb();
  const step = randomNumb(1, 5);
  const findElem = randomNumb(2, 7);
  let count = 0;
  let res = '';
  while (count < 9) {
    start += step;
    res = `${res}  ${start}`;
    if (count === findElem) {
      res = `${res}  ..`;
    }
    count += 1;
  }
  const quest = res;
  const correctAnswer = String(step);
  return cons(quest, correctAnswer)
};

const gameProgres = () => frameGame(ruleGame, conditionsGame);

export default gameProgres;
