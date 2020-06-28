/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
import playAgain from './playAgain';
import nextRound from './nextRound';

const computer = (num2, test) => {
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

  const point = 1;
  let pointU = parseInt(document.getElementById('point-u').textContent, 10);
  let pointC = parseInt(document.getElementById('point-c').textContent, 10);

  if ((num === 1 && num2 === 3) || (num === 2 && num2 === 1) || (num === 3 && num2 === 2)) {
    if (test === 1) {
      element.textContent = 'Perdiste';
    } else if (test === 2) {
      if (pointC === 1) {
        element.textContent = 'Perdiste';
      } else {
        element.textContent = 'Punto para la computadora';
      }
    } else if (pointC === 2) {
      element.textContent = 'Perdiste';
    } else {
      element.textContent = 'Punto para la computadora';
    }
    pointC += point;
    document.getElementById('point-c').textContent = pointC;
  } else if (num === num2) {
    element.textContent = 'Empate';
  } else {
    if (test === 1) {
      element.textContent = 'Ganaste';
    } else if (test === 2) {
      if (pointU === 1) {
        element.textContent = 'Ganaste';
      } else {
        element.textContent = 'Punto para el jugador';
      }
    } else if (pointU === 2) {
      element.textContent = 'Ganaste';
    } else {
      element.textContent = 'Punto para el jugador';
    }
    pointU += point;
    document.getElementById('point-u').textContent = pointU;
  }

  document.getElementById('button-1').addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });

  if (test === 1) {
    document.getElementById('button-2').addEventListener('click', playAgain);
  } else if (test === 2) {
    if (pointC === 2 || pointU === 2) {
      document.getElementById('button-2').addEventListener('click', playAgain);
    } else {
      document.getElementById('button-2').addEventListener('click', () => {
        nextRound(pointU, pointC);
      });
    }
  } else if (pointC === 3 || pointU === 3) {
    document.getElementById('button-2').addEventListener('click', playAgain);
  } else {
    document.getElementById('button-2').addEventListener('click', () => {
      nextRound(pointU, pointC, test);
    });
  }
};

export default computer;
