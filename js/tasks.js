const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

apartment.owner = {
  name: "Henry",
  phone: "982-126-1588",
  email: "henry.carter@aptmail.com",
};

// console.log("apartment :>> ", apartment);
// Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з
// інформацією про власника. Додай йому такі властивості:

// name - ім'я власника, значення "Henry";
// phone – телефон, значення "982-126-1588";
// email – пошта, значення "henry.carter@aptmail.com".

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log("hexColors :>> ", hexColors);
// console.log("rgbColors :>> ", rgbColors);

// Перебери масив об'єктів colors, використовуючи цикл for...of.
// Додай до масиву hexColors значення властивостей hex,
// а масив rgbColors значення властивостей rgb з
//  усіх об'єктів масиву colors

const products = [
  { name: "Computer", price: 1300, quantity: 4 },
  { name: "keyboard", price: 2700, quantity: 3 },
  { name: "mouse", price: 400, quantity: 7 },
  { name: "camera", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;
}

// console.log("object :>> ", getProductPrice("Computer"));
// console.log("object :>> ", getProductPrice("keyboard"));
// console.log("object :>> ", getProductPrice("mouse"));
// console.log("object :>> ", getProductPrice("camera"));
// console.log("object :>> ", getProductPrice("asdad"));

// Напиши функцію getProductPrice(productName),
// яка приймає один параметр productName - назву продукту.
// Функція шукає об'єкт продукту з такою назвою (властивість name)
// у масиві products і повертає його ціну (властивість price).
// Якщо продукт не знайдено з такою назвою, функція повинна повертати null.

const products1 = [
  { name: "Computer", price: 1300, quantity: 4 },
  { name: "keyboard", price: 2700, quantity: 3 },
  { name: "mouse", price: 400, quantity: 7 },
  { name: "camera", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let totalPrice = null;

  for (const product of products1) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
    }
  }
  return totalPrice;
}

// Напиши функцію calculateTotalPrice(productName),
// яка приймає один параметр productName - назву товару.
// Функція повинна повернути загальну вартість
// (ціна * кількість) товару з таким ім'ям з масиву products.

console.log("object :>> ", calculateTotalPrice("Computer"));
console.log("object :>> ", calculateTotalPrice("keyboard"));
console.log("object :>> ", calculateTotalPrice("mouse"));
console.log("object :>> ", calculateTotalPrice("camera"));
console.log("object :>> ", calculateTotalPrice("qweqwesd"));
