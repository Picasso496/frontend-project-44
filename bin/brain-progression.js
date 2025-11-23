import readlineSync from 'readline-sync';

console.log('brain-progression');
console.log('Welcome to the Brain Games!');

// Спрашиваем имя
const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
console.log('What number is missing in the progression?');

const totalQuestions = 3;
let correctAnswers = 0;

function generateProgression() {
  const length = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 50) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const hiddenIndex = Math.floor(Math.random() * length);

  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }

  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return { progression, correctAnswer };
};

while (correctAnswers < totalQuestions) {
  const { progression, correctAnswer } = generateProgression();
  const progressionString = progression.join(' ');
  
  const userAnswer = readlineSync.question(`Question: ${progressionString}\nYour answer: `).trim();

  if (!/^\d+$/.test(userAnswer)) {
    console.log(`'${userAnswer}' is wrong answer ;(.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }

  if (parseInt(userAnswer) === correctAnswer) {
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