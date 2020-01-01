import { cons } from 'hexlet-pairs';
import playGame from '..';
import randomNumb from '../utilities';

const ruleGame = 'What is the result of the expression?';

const operators = ['+', '*', '-'];
const minNum = 0;
const maxNum = 15;
const subscript = 0;
const superscript = operators.length - 1;

const getValue = (choice, num1, num2) => {
  switch (choice) {
    case '+': return String(num1 + num2);
    case '*': return String(num1 * num2);
    default: return String(num1 - num2);
  }
};

const generateCondition = () => {
  const num1 = randomNumb(minNum, maxNum);
  const num2 = randomNumb(minNum, maxNum);
  const operand = operators[randomNumb(subscript, superscript)];
  const correctAnswer = getValue(operand, num1, num2);
  const question = `${num1} ${operand} ${num2}`;
  return cons(question, correctAnswer);
};

const gameCalc = () => playGame(generateCondition, ruleGame);

export default gameCalc;
