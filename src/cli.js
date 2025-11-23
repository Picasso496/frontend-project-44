import readlineSync from 'readline-sync';
export const name = () => {
    const games1 = readlineSync.question('May I have your name?');
    console.log('Hello, ' + games1 + '!');
};