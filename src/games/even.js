import { cons } from 'hexlet-pairs';
import playGame from '..';
import randomNumb from '../utilities';

const isEven = (num) => num % 2 === 0;

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateCondition = () => {
  const question = randomNumb();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const gameEven = () => playGame(ruleGame, generateCondition);

export default gameEven;
