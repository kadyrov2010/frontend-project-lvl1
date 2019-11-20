import { cons } from 'hexlet-pairs';
import playGame from '..';
import randomNumb from '../utilities';

const ruleGame = 'What is the result of the expression?';

const operands = ['+', '*', '-'];
const minNumber = 0;
const maxNumber = 15;

const generateCondition = () => {
  const operandChoice = operands[Math.floor(Math.random() * operands.length)];
  const firstNumber = randomNumb(minNumber, maxNumber);
  const secondNumber = randomNumb(minNumber, maxNumber);
  const correctAnswer = () => {
    switch (operandChoice) {
      case '+': return String(firstNumber + secondNumber);
      case '*': return String(firstNumber * secondNumber);
      default: return String(firstNumber - secondNumber);
    }
  };
  const question = `${firstNumber} ${operandChoice} ${secondNumber}`;
  return cons(question, correctAnswer());
};
const gameCalc = () => playGame(ruleGame, generateCondition);

export default gameCalc;
