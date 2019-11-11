import { cons } from 'hexlet-pairs';
import { frameGame } from '..';
import randomNumb from '../utilities';

const isEven = num => num % 2 === 0;

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".\n';


const generateCondition = () => {
  const question = randomNumb();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const gameEven = () => frameGame(ruleGame, generateCondition);

export default gameEven;
