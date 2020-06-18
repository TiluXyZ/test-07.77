/* eslint-disable linebreak-style */
import create from './create';

const game = document.createElement('div');

const elements = () => {
  const container = document.getElementById('container');

  game.classList.add('game');

  container.appendChild(game);

  const score = document.createElement('div');

  score.classList.add('score');

  game.appendChild(score);

  const titleS = document.createElement('h2');

  titleS.textContent = 'Puntos';

  score.appendChild(titleS);

  const panelS = document.createElement('div');

  panelS.classList.add('s-panel');

  score.appendChild(panelS);

  const userS = document.createElement('span');

  userS.textContent = '0';

  userS.classList.add('s-user', 'points');

  panelS.appendChild(userS);

  const computerS = document.createElement('span');

  computerS.textContent = '0';

  computerS.classList.add('s-computer', 'points');

  panelS.appendChild(computerS);

  const optionsG = document.createElement('div');

  optionsG.classList.add('options-g');

  game.appendChild(optionsG);

  optionsG.setAttribute('id', 'optionsG');

  const titleO = document.createElement('h3');

  titleO.textContent = 'Opciones';

  optionsG.appendChild(titleO);

  const imagesO = document.createElement('div');

  imagesO.classList.add('o-images');

  optionsG.appendChild(imagesO);

  const first = document.createElement('div');

  first.classList.add('first-g', 'option-g');

  first.setAttribute('id', 'first');

  imagesO.appendChild(first);

  const imgR = document.createElement('img');

  imgR.setAttribute('src', './assets/svg/icon-rock.svg');

  imgR.setAttribute('id', 'img-f');

  first.appendChild(imgR);

  const textR = document.createElement('span');

  textR.textContent = 'Piedra';

  textR.classList.add('rock', 'o-text');

  imagesO.appendChild(textR);

  const second = document.createElement('div');

  second.classList.add('second-g', 'option-g');

  second.setAttribute('id', 'second');

  imagesO.appendChild(second);

  const imgP = document.createElement('img');

  imgP.setAttribute('src', './assets/svg/icon-paper.svg');

  imgP.setAttribute('id', 'img-s');

  second.appendChild(imgP);

  const textP = document.createElement('span');

  textP.textContent = 'Papel';

  textP.classList.add('paper', 'o-text');

  imagesO.appendChild(textP);

  const third = document.createElement('div');

  third.classList.add('third-g', 'option-g');

  third.setAttribute('id', 'third');

  imagesO.appendChild(third);

  const imgS = document.createElement('img');

  imgS.setAttribute('src', './assets/svg/icon-scissors.svg');

  imgS.setAttribute('id', 'img-t');

  third.appendChild(imgS);

  const textS = document.createElement('span');

  textS.textContent = 'Tijera';

  textS.classList.add('scissor', 'o-text');

  imagesO.appendChild(textS);
};

const layout = (img) => {
  document.getElementById('optionsG').remove();

  create('div', 'container-c', 'resultC', game);

  const resultC = document.getElementById('resultC');

  create('h3', 'result', 'result', resultC);

  create('div', 'card-u', 'userCard', resultC);

  const userCard = document.getElementById('userCard');

  create('div', 'card-c', 'computerCard', resultC);

  const computerCard = document.getElementById('computerCard');

  create('span', 'versus', 'vs', resultC);

  document.getElementById('vs').textContent = 'VS';

  create('h3', 'card-t', 'title-u', userCard);

  document.getElementById('title-u').textContent = 'Jugador';

  create('h3', 'card-t', 'title-c', computerCard);

  document.getElementById('title-c').textContent = 'Computadora';

  create('img', 'images-u', 'imgUser', userCard);

  document.getElementById('imgUser').setAttribute('src', img);

  create('img', 'images-c', 'imgComputer', computerCard);

  create('div', 'buttons', 'btns', resultC);
};

export { elements };
export { layout };
