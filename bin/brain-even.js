#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

function isEven(number) {
  return number % 2 === 0;
};

let correctAnswers = 0;
const totalQuestions = 3;

  while (correctAnswers < totalQuestions) {
    const number = Math.floor(Math.random() * 100) + 1;
    const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `).trim().toLowerCase();

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
        console.log(`'${userAnswer}' is wrong answer ;(.`);
        console.log(`Let's try again, ${userName}!`);
        break;
    }

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
        console.log('Correct!');
        correctAnswers += 1;
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        break;
    }
};

if (correctAnswers === totalQuestions) 
    console.log(`Congratulations, ${userName}!`);