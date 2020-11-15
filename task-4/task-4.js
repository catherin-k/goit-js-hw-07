const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

let counterValue = 0;
const increment = () => {
  counterValue++;

  counter.textContent = counterValue;
};

const decrement = () => {
  counterValue--;

  counter.textContent = counterValue;
};

btnInc.addEventListener("click", increment);
btnDec.addEventListener("click", decrement);
console.dir(counter);
