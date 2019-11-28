import { cons } from 'hexlet-pairs';
import playGame from '..';
import randomNumb from '../utilities';

const ruleGame = 'What is the result of the expression?';

const operand = ['+', '*', '-'];
const minNum = 0;
const maxNum = 15;
const subscript = 0;
const superscript = 2;
const operandChoice = operand[randomNumb(subscript, superscript)];
const firstNum = randomNumb(minNum, maxNum);
const secondNum = randomNumb(minNum, maxNum);

const getOperand = () => {
  switch (operandChoice) {
    case '+': return String(firstNum + secondNum);
    case '*': return String(firstNum * secondNum);
    default: return String(firstNum - secondNum);
  }
};

const generateCondition = () => {
  const correctAnswer = getOperand();
  const question = `${firstNum} ${operandChoice} ${secondNum}`;
  return cons(question, correctAnswer());
};
const gameCalc = () => playGame(ruleGame, generateCondition);

export default gameCalc;
