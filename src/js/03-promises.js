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

const refs = {
  createPromicesBtn: document.querySelector('button'),
  promiceDelay: document.querySelector('input[name="delay"]'),
  promiceStep: document.querySelector('input[name="step"]'),
  promiceAmount: document.querySelector('input[name="amount"]'),
};

refs.createPromicesBtn.addEventListener('click', onCreatePromices);

function onCreatePromices(event) {
  event.preventDefault();
  let counter = 1;
  let amount = Number(refs.promiceAmount.value);
  let startDelay = Number(refs.promiceDelay.value);

  const promice = setInterval(() => {
    if (counter === amount) {
      clearInterval(promice);
    }
    createPromise(counter, startDelay);
    counter += 1;
    startDelay =
      Number(refs.promiceDelay.value) +
      Number(refs.promiceStep.value) * (counter - 1);
  }, Number(refs.promiceStep.value) * (counter - 1));
}
