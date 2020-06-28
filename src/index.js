/* eslint-disable linebreak-style */
import { elements } from './modules/elements';
import start from './modules/start';

const options = document.getElementById('options');

const button = document.querySelectorAll('.button');

button.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.toElement.id === 'first') {
      e.preventDefault();
      options.remove();
      elements(1);
      start(1);
    } else if (e.toElement.id === 'second') {
      e.preventDefault();
      options.remove();
      elements(2, 0, 0);
      start(2);
    } else {
      e.preventDefault();
      options.remove();
      elements(2, 0, 0);
      start(3);
    }
  });
});
