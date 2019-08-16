import readlineSync from 'readline-sync';
export const greeting = console.log('Welcome to the Brain Games!\n')
export const username = readlineSync.question('May I have your name? ');
console.log(`Hello, ${username}`);