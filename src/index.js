import readlineSync from 'readline-sync';

export const comNod = (a, b) => {
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};
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
    const cos = randomNumb(1, 3);
    const num1 = randomNumb(1, 10);
    const num2 = randomNumb(1, 10);
    if (cos === 1) {
      console.log(`Question: ${num1} + ${num2}`);
      const answer = readlineSync.question('Your aswer: ');
      if (num1 + num2 === Number(answer)) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was ${num1 + num2}.`);
        break;
      }
    } else if (cos === 2) {
      console.log(`Question: ${num1} - ${num2}`);
      const answer = readlineSync.question('Your aswer: ');
      if (num1 - num2 === Number(answer)) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was ${num1 - num2}.`);
        break;
      }
    } else if (cos === 3) {
      console.log(`Question: ${num1} * ${num2}`);
      const answer = readlineSync.question('Your aswer: ');
      if (num1 * num2 === Number(answer)) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was ${num1 * num2}.`);
        break;
      }
    }
    count += 1;
  }
  if (count === 3) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Let's try again, ${username}!`);
  }
};

export const brainGcd = () => {
  console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.\n');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}\n`);
  let count = 0;
  while (count < 3) {
    const num1 = randomNumb(1, 10);
    const num2 = randomNumb(1, 10);
    console.log(`Question: ${num1}  ${num2}`);
    const answer = readlineSync.question('Your aswer: ');
    if (comNod(num1, num2) === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${comNod(num1, num2)}.`);
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

export const brainProg = () => {
  console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.\n');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}\n`);
  let count1 = 0;
  while (count1 < 3) {
    let start = randomNumb();
    const step = randomNumb(1, 5);
    const findElem = randomNumb(2, 7);
    let count = 0;
    let res = '';
    while (count < 9) {
      start += step;
      res = `${res}  ${start}`;
      if (count === findElem) {
        res = `${res}  ..`;
      }
      count += 1;
    }
    console.log(`Question: ${res}`);
    const answer = readlineSync.question('Your aswer: ');
    if (step === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${step}.`);
      break;
    }
  }
  if (count1 === 3) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Let's try again, ${username}!`);
  }
};
