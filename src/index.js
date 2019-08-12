import readlineSync from 'readline-sync';
const greeting = console.log('Welcome to the Brain Games!\n'); 
const username = readlineSync.question('May I have your nam? ');
console.log(`Hello, ${username}!`);