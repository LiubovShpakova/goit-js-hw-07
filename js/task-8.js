/*Задание 8 - дополнительное, выполнять не обязательно
Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и 
нажимает кнопку Создать, после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 
1 параметр amount - число. Функция создает столько div, 
сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше 
предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.
<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>

*/

const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const input = document.querySelector("#controls>input");
const root = document.querySelector("#boxes");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function createBoxes(amount) {
  const result = [];
  root.innerHTML = "";

  if (amount > 0 && amount <= 100) {
    for (let i = 0; i < amount; i += 1) {
      const element = document.createElement("div");
      element.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(
        255
      )},${getRandomInt(255)})`;
      element.style.width = i * 10 + 30 + "px";
      element.style.height = i * 10 + 30 + "px";
      result.push(element);
    }
    root.append(...result);
  }
}
function destroyBoxes() {
  root.innerHTML = "";
  input.value = "";
}

render.addEventListener("click", () => createBoxes(input.value));

destroy.addEventListener("click", destroyBoxes);
