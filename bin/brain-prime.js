import readlineSync from 'readline-sync';

console.log('brain-prime');
console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const totalQuestions = 3;
let correctAnswers = 0;

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
};

function generateNumber() {
  return Math.floor(Math.random() * 100) + 1;
};

while (correctAnswers < totalQuestions) {
  const number = generateNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `).trim().toLowerCase();

  if (userAnswer !== 'yes' && userAnswer !== 'no') {
    console.log(`'${userAnswer}' is wrong answer ;(.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
};

if (correctAnswers === totalQuestions) {
  console.log(`Congratulations, ${userName}!`);
};