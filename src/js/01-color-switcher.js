const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};

let intervalId = null;

refs.start.addEventListener('click', changeBodyTheme);
refs.stop.addEventListener('click', stopChangeBodyTheme);

function changeBodyTheme() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
  refs.start.disabled = true;
}

function stopChangeBodyTheme() {
  clearInterval(intervalId);
  refs.start.disabled = false;
  // release our intervalID from the variable
  intervalId = null;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
