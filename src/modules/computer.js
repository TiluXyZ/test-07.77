/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-cycle
import playAgain from './playAgain';

const computer = (num2) => {
  const num = Math.round(Math.random() * (3 - 1) + 1);

  if (num === 1) {
    document.getElementById('imgComputer').setAttribute('src', './assets/svg/icon-rock.svg');
    document.getElementById('imagesC').classList.add('rock-b');
  } else if (num === 2) {
    document.getElementById('imgComputer').setAttribute('src', './assets/svg/icon-paper.svg');
    document.getElementById('imagesC').classList.add('paper-b');
  } else {
    document.getElementById('imgComputer').setAttribute('src', './assets/svg/icon-scissors.svg');
    document.getElementById('imagesC').classList.add('scissor-b');
  }

  if (num2 === 1) {
    document.getElementById('imagesU').classList.add('rock-b');
  } else if (num2 === 2) {
    document.getElementById('imagesU').classList.add('paper-b');
  } else {
    document.getElementById('imagesU').classList.add('scissor-b');
  }

  const element = document.getElementById('result');

  let point = 0;

  if ((num === 1 && num2 === 3) || (num === 2 && num2 === 1) || (num === 3 && num2 === 2)) {
    element.textContent = 'Perdiste';
    point += 1;
    document.getElementById('point-c').textContent = point;
  } else if (num === num2) {
    element.textContent = 'Empate';
  } else {
    element.textContent = 'Ganaste';
    point += 1;
    document.getElementById('point-u').textContent = point;
  }

  document.getElementById('button-1').addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });
  document.getElementById('button-2').addEventListener('click', playAgain);
};

export default computer;
