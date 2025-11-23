
function isEven(number) {
  return number % 2 === 0;
}

function game() {
  alert("Welcome to the Brain Games!");
  const name = prompt("May I have your name?");
  alert(`Hello, ${name}!`);
  alert('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;
  const totalQuestions = 3;

  while (correctAnswers < totalQuestions) {
    const number = Math.floor(Math.random() * 100) + 1;
    const userAnswer = prompt(`Question: ${number}\nYour answer:`).trim().toLowerCase();

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      alert(`'${userAnswer}' is wrong answer ;(.`);
      alert(`Let's try again, ${name}!`);
      return;
    }

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      alert("Correct!");
      correctAnswers += 1;
    } else {
      alert(`'${userAnswer}' is wrong answer ;(.`);
      alert(`Let's try again, ${name}!`);
      return;
    }
  }

  alert(`Congratulations, ${name}!`);
}

game();