/*Счетчик состоит из спана и кнопок, которые должны увеличивать 
и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится 
текущее значение счетчика.
Создай функции increment и decrement для увеличения и 
уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и 
обновление интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>*/

let counterRef = document.getElementById("value");
let counterValue = +counterRef.textContent;

const elementDecr = document.querySelector('button[data-action="decrement"]');
const elementIncr = document.querySelector('button[data-action="increment"]');

function decrement() {
  return (counterValue -= 1);
}
function increment() {
  return (counterValue += 1);
}

elementDecr.addEventListener("click", () => {
  decrement();
  counterRef.textContent = counterValue;
});
elementIncr.addEventListener("click", () => {
  increment();
  counterRef.textContent = counterValue;
});
