/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import { layout } from './elements';
// eslint-disable-next-line import/no-cycle
import computer from './computer';

const VerificationO = (e) => {
  const { id } = e.path[0];
  let { src } = e.path[0];
  let opt;

  if (id === 'first' || id === 'img-f') {
    opt = 1;

    if (src === undefined) {
      src = e.path[0].firstElementChild.src;

      layout(src);
      computer(opt);
    } else {
      layout(src);
      computer(opt);
    }
  } else if (id === 'second' || id === 'img-s') {
    opt = 2;

    if (src === undefined) {
      src = e.path[0].firstElementChild.src;

      layout(src);
      computer(opt);
    } else {
      layout(src);
      computer(opt);
    }
  } else {
    opt = 3;

    if (src === undefined) {
      src = e.path[0].firstElementChild.src;

      layout(src);
      computer(opt);
    } else {
      layout(src);
      computer(opt);
    }
  }
};

export default VerificationO;
