import readlineSync from 'readline-sync';

console.log('brain-calc');
console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');

const totalQuestions = 3;
let correctAnswers = 0;

function generateQuestion() {
  const operations = ['+', '-', '*'];
  const op = operations[Math.floor(Math.random() * operations.length)];

  let num1 = Math.floor(Math.random() * 50) + 1;
  let num2 = Math.floor(Math.random() * 50) + 1;

  if (op === '-' && num1 < num2) {
    [num1, num2] = [num2, num1];
  }

  let correctAnswer;
  switch (op) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
  }

  const questionText = `${num1} ${op} ${num2}`;
  return { questionText, correctAnswer };
};

while (correctAnswers < totalQuestions) {
  const { questionText, correctAnswer } = generateQuestion();
  const userAnswer = readlineSync.question(`Question: ${questionText}\nYour answer: `).trim();

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