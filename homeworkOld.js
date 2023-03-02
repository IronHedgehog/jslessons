//1) створити в Html розмітці пустий список та додати у цей список продукти з масиву "ingredients"
// (створювати лішки за допомогою методу createElement("li"))
// до кожної лішки застосувати класс item(потрібно створити у css)  за допомогою JS
// Додати кожній лішці текстовий контент у вигляді одного з продуктів
//  та додати ці лішки до списку використовуючи синтаксис (...) додавати щось до дом дерева можна тільки один раз.

const list = document.querySelector("#list");
const list1 = document.querySelector("#list1");
const imgs = document.querySelector("#imgs");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = ingredients.map((item) => {
  const ingrEl = document.createElement("li");
  ingrEl.classList.add("item");
  ingrEl.textContent = `${item}`;
  return ingrEl;
});

console.log(ingredientsList);

list.append(...ingredientsList);

//2) створити список в HTML розмітці та за допомогою JS коду додати у цей список справи на тиждень
// використовуючи  синтаксис похилих крапок та insertAdjacentHTML
//  додати стилі на ваш розсуд (класи можна одразу додавати коли створюєте розмітку li)

const events = ["click", "input", "submit", "keyup", "keydown"];

const markup = events
  .map((item) => {
    return `<li class="item2"> ${item}</li>`;
  })
  .join(" ");

list1.insertAdjacentHTML("beforeend", markup);

//3) вивести масив данних на екран будь-яким зручним способом
// додати стилі
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const el = images
  .map(({ url, alt }) => {
    return `<li > <img src="${url}" alt="${alt}" width="420"/> </li>`;
  })
  .join(" ");

imgs.insertAdjacentHTML("beforeend", el);

imgs.style.display = "flex";
imgs.style.justifyContent = "space-between";
imgs.style.listStyle = "none";
