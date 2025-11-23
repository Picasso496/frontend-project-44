#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default function runBrainCalc() {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  
  const operations = ['+', '-', '*'];
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i++) {
    const op = operations[Math.floor(Math.random() * operations.length)];
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;

    const question = `${num1} ${op} ${num2}`;
    const correctAnswer = eval(question).toString();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').trim();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};