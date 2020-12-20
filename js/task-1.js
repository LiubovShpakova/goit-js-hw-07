/*Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, 
то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет 
и выведет в консоль текст заголовка элемента (тега h2) и 
количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4*/

const items = [...document.querySelectorAll("li.item")];
console.log(`В списке ${items.length} категории`);

/*const array = items
  .map((item) => {
    const itemtitle = item.querySelector(`h2`);
    const itemlist = item.querySelectorAll(`ul li`);
    return {
      itemtitle: itemtitle.textContent,
      itemlist: itemlist.length,
    };
  })
  .forEach((entry) => {
    console.log(
      `Категория: `,
      entry.itemtitle,
      `\r\nКоличество элементов: `,
      entry.itemlist
    );
  });*/

items.forEach((item) => {
  console.log(
    `Категория: ${
      item.querySelector("h2").textContent
    }\r\nКоличество элементов: ${item.querySelectorAll("li").length}`
  );
});
