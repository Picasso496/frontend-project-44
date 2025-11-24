#!/usr/bin/env node
import readlineSync from 'readline-sync'

console.log('brain-gcd');
console.log('Welcome to the Brain Games!')

const userName = readlineSync.question('May I have your name? ')
console.log('Hello, ' + userName + '!');
console.log('Find the greatest common divisor of given numbers.')

const totalQuestions = 3
let correctAnswers = 0

function gcd(a, b) {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
};

function generateNumbers() {
  const num1 = Math.floor(Math.random() * 100) + 1
  const num2 = Math.floor(Math.random() * 100) + 1
  return [num1, num2]
};

while (correctAnswers < totalQuestions) {
  const [num1, num2] = generateNumbers()
  const correctAnswer = gcd(num1, num2)

  const userAnswer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `).trim()

  if (!/^\d+$/.test(userAnswer)) {
    console.log(`'${userAnswer}' is wrong answer ;(.`)
    console.log(`Let's try again, ${userName}!`)
    break
  }

  if (parseInt(userAnswer) === correctAnswer) {
    console.log('Correct!')
    correctAnswers += 1
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    console.log(`Let's try again, ${userName}!`)
    break;
  }
};

if (correctAnswers === totalQuestions) {
  console.log(`Congratulations, ${userName}!`)
};