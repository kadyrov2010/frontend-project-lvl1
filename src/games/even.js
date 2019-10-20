import { cons } from 'hexlet-pairs';
import { frameGame } from '..';
import randomNumb from '../utilities';

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const conditionsGame = () => {
  const num = randomNumb();
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  const quest = num;
  return cons(quest, correctAnswer);
};

const gameEven = () => frameGame(ruleGame, conditionsGame);

export default gameEven;
