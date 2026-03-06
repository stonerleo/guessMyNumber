'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/
const gameVar = {
  og: newNumberGenerator(),
  //document.querySelector('.number').textContent = og;
  score: 20,
  highScore: 0,
};
function newNumberGenerator() {
  return Math.floor(Math.random() * 20) + 1;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '🐑 No number!';
  } else if (guess < gameVar.og) {
    if (gameVar.score > 1) {
      document.querySelector('.message').textContent = '⤵ Too low!';
      document.querySelector('.score').textContent = --gameVar.score;
    } else {
      document.querySelector('.message').textContent = '😵 You loose!';
      gameVar.score = 0;
      document.querySelector('.score').textContent = gameVar.score;
    }
  } else if (guess > gameVar.og) {
    if (gameVar.score > 1) {
      document.querySelector('.message').textContent = '⤴ Too high!';
      document.querySelector('.score').textContent = --gameVar.score;
    } else {
      document.querySelector('.message').textContent = '😵 You loose!';
      gameVar.score = 0;
      document.querySelector('.score').textContent = gameVar.score;
    }
  } else {
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = gameVar.og;
    if (gameVar.highScore < gameVar.score) {
      gameVar.highScore = gameVar.score;
      document.querySelector('.highscore').textContent = gameVar.highScore;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  gameVar.og = newNumberGenerator();
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  gameVar.score = 20;
  document.querySelector('.score').textContent = gameVar.score;
  document.querySelector('body').style.backgroundColor = '#020202';
  document.querySelector('.number').style.width = '15rem';
});
