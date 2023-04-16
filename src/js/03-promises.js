function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}

const createPromicesBtn = document.querySelector('button');
const promiceDelay = document.querySelector('input[name="delay"]');
const promiceStep = document.querySelector('input[name="step"]');
const promiceAmount = document.querySelector('input[name="amount"]');

createPromicesBtn.addEventListener('submit', onCreatePromices);

function onCreatePromices(event) {
  event.preventDefault();

  console.log(`123`);
  // let amount = promiceAmount.value;

  // const promice = setInterval(() => {
  //   if (amount < 0) {
  //     clearInterval(promice);
  //   }
  //   createPromise(amount, promiceDelay.value);
  //   amount -= 1;
  // }, promiceStep);
}
