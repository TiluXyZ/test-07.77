/* eslint-disable linebreak-style */
import { elements } from './elements';
// eslint-disable-next-line import/no-cycle
import start from './start';

const playAgain = () => {
  document.getElementById('score').remove();
  document.getElementById('resultC').remove();
  document.getElementById('game').remove();
  elements(1);
  start(1);
};

export default playAgain;
