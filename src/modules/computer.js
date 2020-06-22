/* eslint-disable linebreak-style */
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

  if ((num === 1 && num2 === 3) || (num === 2 && num2 === 1) || (num === 3 && num2 === 2)) {
    element.textContent = 'Perdiste';
  } else if (num === num2) {
    element.textContent = 'Empate';
  } else {
    element.textContent = 'Ganaste';
  }
};

export default computer;
