import { cons } from 'hexlet-pairs';
import { frameGame } from '..';
import randomNumb from '../utilities';

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const conditionsGame = () => {
  const question = randomNumb();
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const gameEven = () => frameGame(ruleGame, conditionsGame);

export default gameEven;
