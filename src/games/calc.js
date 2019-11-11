import { cons } from 'hexlet-pairs';
import { frameGame } from '..';
import randomNumb from '../utilities';

const ruleGame = 'What is the result of the expression?\n';

const operandsList = ['+', '*', '-'];
const minNumber = 0;
const maxNumber = 15;

const generateCondition = () => {
  const makeOperandChoice = operandsList[Math.floor(Math.random() * operandsList.length)];
  const firstNumber = randomNumb(minNumber, maxNumber);
  const secondNumber = randomNumb(minNumber, maxNumber);
  switch (makeOperandChoice) {
    case '+': {
      const question = `${firstNumber} + ${secondNumber}`;
      const correctAnswer = firstNumber + secondNumber;
      return cons(question, String(correctAnswer));
    }
    case '*': {
      const question = `${firstNumber} x ${secondNumber}`;
      const correctAnswer = firstNumber * secondNumber;
      return cons(question, String(correctAnswer));
    }
    default: {
      const question = `${firstNumber} - ${secondNumber}`;
      const correctAnswer = firstNumber - secondNumber;
      return cons(question, String(correctAnswer));
    }
  }
};
const gameCalc = () => frameGame(ruleGame, generateCondition);

export default gameCalc;
