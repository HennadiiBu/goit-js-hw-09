import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise(() => {
    setTimeout(() => {
      if (shouldResolve) {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      } else {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      }
    }, delay);
  });
}

const createPromicesBtn = document.querySelector('button');
const promiceDelay = document.querySelector('input[name="delay"]');
const promiceStep = document.querySelector('input[name="step"]');
const promiceAmount = document.querySelector('input[name="amount"]');

createPromicesBtn.addEventListener('click', onCreatePromices);

function onCreatePromices(event) {
  event.preventDefault();
  let counter = 1;
  let amount = Number(promiceAmount.value);
  let startDelay = Number(promiceDelay.value);

  const promice = setInterval(() => {
    if (counter === amount) {
      clearInterval(promice);
    }
    createPromise(counter, startDelay);
    counter += 1;
    startDelay =
      Number(promiceDelay.value) + Number(promiceStep.value) * (counter - 1);
  }, Number(promiceStep.value) * (counter - 1));
}
