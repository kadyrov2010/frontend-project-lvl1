import { cons } from 'hexlet-pairs';
import { frameGame } from '..';
import randomNumb from '../utilities';

const ruleGame = 'What is the result of the expression?\n';

const conditionsGame = () => {
  const randomExpr = randomNumb(1, 3);
  const num1 = randomNumb();
  const num2 = randomNumb();
  if (randomExpr === 1) {
    const expression = `${num1} + ${num2}`;
    const correctAnswer = String(num1 + num2);
    const quest = expression;
    return cons(quest, correctAnswer);
  } if (randomExpr === 2) {
    const expression = `${num1} - ${num2}`;
    const correctAnswer = String(num1 - num2);
    const quest = expression;
    return cons(quest, correctAnswer);
  }
  const expression = `${num1} * ${num2}`;
  const correctAnswer = String(num1 * num2);
  const quest = expression;
  return cons(quest, correctAnswer);
};

const gameCalc = () => frameGame(ruleGame, conditionsGame);

export default gameCalc;
