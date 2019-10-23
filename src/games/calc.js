import { cons } from 'hexlet-pairs';
import { frameGame } from '..';
import randomNumb from '../utilities';

const ruleGame = 'What is the result of the expression?\n';

const firstCase = 1;
const secondCase = 2;
const lastCase = 3;

const conditionsGame = () => {
  const randomExpr = randomNumb(firstCase, lastCase);
  const num1 = randomNumb();
  const num2 = randomNumb();
  if (randomExpr === firstCase) {
    const question = `${num1} + ${num2}`;
    const correctAnswer = String(num1 + num2);
    return cons(question, correctAnswer);
  } if (randomExpr === secondCase) {
    const question = `${num1} - ${num2}`;
    const correctAnswer = String(num1 - num2);
    return cons(question, correctAnswer);
  }
  const question = `${num1} * ${num2}`;
  const correctAnswer = String(num1 * num2);
  return cons(question, correctAnswer);
};

const gameCalc = () => frameGame(ruleGame, conditionsGame);

export default gameCalc;
