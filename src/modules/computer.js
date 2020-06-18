/* eslint-disable linebreak-style */
const computer = () => {
  const num = Math.round(Math.random() * (3 - 1) + 1);

  if (num === 1) {
    document.getElementById('imgComputer').setAttribute('src', './assets/svg/icon-rock.svg');
  } else if (num === 2) {
    document.getElementById('imgComputer').setAttribute('src', './assets/svg/icon-paper.svg');
  } else {
    document.getElementById('imgComputer').setAttribute('src', './assets/svg/icon-scissors.svg');
  }
};

export default computer;
