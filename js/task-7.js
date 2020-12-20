/*Напиши скрипт, который реагирует на изменение значения 
input#font-size-control (событие input) и изменяет 
инлайн-стиль span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться 
размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>*/

const inputElem = document.querySelector("#font-size-control");
const textElem = document.querySelector("#text");

const changeFontSize = function () {
  textElem.style.fontSize = `${inputElem.value * 3}%`;
};
inputElem.addEventListener("input", changeFontSize);
