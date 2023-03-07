// 1)створити у index.html кнопку
// на цю кнопку додати прослуховувач дії "click"
// по кліку на цю кнопку має намалюватись один зі списків минулої ДЗ або можете створити новий список.

// приклад масиву з минулого ДЗ
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createButton = document.querySelector("#create");

createButton.addEventListener("click", onClick);

function onClick(event) {
  const ingredientsList = ingredients.map((item) => {
    const ingrEl = document.createElement("li");
    ingrEl.classList.add("item");
    ingrEl.textContent = `${item}`;
    return ingrEl;
  });

  list.append(...ingredientsList);
}

// 2) при натисканні на "Escape" має змінюватись фон сторінки на #420042
// при натисканні комбінації клавіш ctrl + alt + S має змінюватись фон сторінки на #303030
// при відпусканні ваших клавіш сторінка має знову ставати білою #ffffff

addEventListener("keydown", onKeyDown);

function onKeyDown(e) {
  if (e.code === "Escape") {
    console.log("Я натиснув Escape");
    document.body.style.backgroundColor = "#420042";
  }

  if ((e.altKey || e.ControlLeft) & (e.code === "KeyS")) {
    document.body.style.backgroundColor = "#303030";
  }
}
addEventListener("keyup", onKeyUp);

function onKeyUp(e) {
  if ((e.altKey || e.ControlLeft) & (e.code === "KeyS")) {
    document.body.style.backgroundColor = "#ffffff";
  }
}

// 3) (завдання не обов'язкове до виконання але з цікавинокою)
// Уся середа та саме завдання для виконання знаходиться у папці task можете скопіювати їй собі та працювати тільки з JS
