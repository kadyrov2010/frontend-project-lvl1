import { cons } from 'hexlet-pairs';
import playGame from '..';
import randomNumb from '../utilities';

const ruleGame = 'What number is missing in this progression?';

const startItemMin = 1;
const startItemMax = 9;

const progressionLength = 10;
const minStep = 1;
const maxStep = 9;

const generateCondition = () => {
  const progressionStep = randomNumb(minStep, maxStep);
  const startItem = randomNumb(startItemMin, startItemMax);
  const hiddenItemIndex = randomNumb(0, progressionLength - 1);
  let question = '';
  const correctAnswer = String(startItem + (hiddenItemIndex * progressionStep));
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenItemIndex) {
      question = `${question} ..`;
    } else {
      const nextItem = startItem + (i * progressionStep);
      question = `${question} ${nextItem}`;
    }
  }
  return cons(question.trim(), correctAnswer);
};

const gameProgression = () => playGame(generateCondition, ruleGame);

export default gameProgression;
