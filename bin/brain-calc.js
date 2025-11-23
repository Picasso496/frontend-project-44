#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default function runBrainCalc() {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const totalQuestions = 3;
  let correctAnswers = 0;

  const operations = ['+', '-', '*'];

  while (correctAnswers < totalQuestions) {
    const op = operations[Math.floor(Math.random() * operations.length)];
    let num1 = Math.floor(Math.random() * 50) + 1;
    let num2 = Math.floor(Math.random() * 50) + 1;

    const questionText = `${num1} ${op} ${num2}`;
    const correctAnswer = eval(questionText);

    const userAnswer = readlineSync.question(`Question: ${questionText}\nYour answer: `).trim();

    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}