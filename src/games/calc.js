import { cons } from 'hexlet-pairs';
import playGame from '..';
import randomNumb from '../utilities';

const ruleGame = 'What is the result of the expression?';

const operand = ['+', '*', '-'];
const minNum = 0;
const maxNum = 15;
const subscript = 0;
const superscript = 2;

const generateCondition = () => {
  const firstNum = randomNumb(minNum, maxNum);
  const secondNum = randomNumb(minNum, maxNum);
  const operandChoice = operand[randomNumb(subscript, superscript)];
  const getOperand = (choice) => {
    switch (choice) {
      case '+': return String(firstNum + secondNum);
      case '*': return String(firstNum * secondNum);
      default: return String(firstNum - secondNum);
    }
  };
  const correctAnswer = getOperand(operandChoice);
  const question = `${firstNum} ${operandChoice} ${secondNum}`;
  return cons(question, correctAnswer);
};
const gameCalc = () => playGame(generateCondition, ruleGame);

export default gameCalc;
