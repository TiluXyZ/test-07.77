/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-cycle
import verificationO from './verifications';

const start = (test) => {
  const option = document.querySelectorAll('.option-g');

  option.forEach((opt) => {
    opt.addEventListener('click', (e) => {
      verificationO(e, test);
    });
  });
};

export default start;
