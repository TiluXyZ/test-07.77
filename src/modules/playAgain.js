/* eslint-disable linebreak-style */
import { elements } from './elements';
// eslint-disable-next-line import/no-cycle
import start from './start';

const playAgain = (num) => {
  document.getElementById('score').remove();
  document.getElementById('resultC').remove();
  document.getElementById('game').remove();
  elements(num, 0, 0);
  start(num);
};

export default playAgain;
