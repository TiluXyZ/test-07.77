/* eslint-disable linebreak-style */
import { elements } from './elements';
// eslint-disable-next-line import/no-cycle
import start from './start';

const nextRound = (pointU, pointC, test) => {
  document.getElementById('score').remove();
  document.getElementById('resultC').remove();
  document.getElementById('game').remove();
  if (test === 3) {
    elements(3, pointU, pointC);
    start(3);
  } else {
    elements(2, pointU, pointC);
    start(2);
  }
};

export default nextRound;
