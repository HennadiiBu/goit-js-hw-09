function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let timeOut;

startButton.addEventListener('click', onStartButton);
stopButton.addEventListener('click', onStopButton);

stopButton.disabled = true;

function onStartButton() {
  timeOut = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function onStopButton() {
  clearInterval(timeOut);
  startButton.disabled = false;
  stopButton.disabled = true;
}
