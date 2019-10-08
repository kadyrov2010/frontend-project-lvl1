import readlineSync from 'readline-sync';

export const randomNumb = (min = 0, max = 189) => Math.floor(Math.random() * (max - min + 1)) + min;
export const brainEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}\n`);
  let count = 0;
  while (count < 3) {
    const num = randomNumb();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (num % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (num % 2 !== 0 && answer === 'no') {
      console.log('Correct');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      break;
    }
    count += 1;
  }
  if (count === 3) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Let's try again, ${username}!`);
  }
};

export const brainCalc = () => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?\n');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}\n`);
  let count = 0;
  while (count < 3) {
    count += 1;
    const cos = randomNumb(1, 3);
    const num1 = randomNumb(1, 10);
    const num2 = randomNumb(1, 10);
    if (cos === 1) {
      console.log(`Question: ${num1} + ${num2}`);
      const answer = readlineSync.question('Your aswer: ');
      if (num1 + num2 === Number(answer)) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
        break;
      }
    } else if (cos === 2) {
      console.log(`Question: ${num1} - ${num2}`);
      const answer = readlineSync.question('Your aswer: ');
      if (num1 - num2 === Number(answer)) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
        break;
      }
    } else if (cos === 3) {
      console.log(`Question: ${num1} * ${num2}`);
      const answer = readlineSync.question('Your aswer: ');
      if (num1 * num2 === Number(answer)) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
        break;
      }
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Let's try again, ${username}!`);
  }
};
