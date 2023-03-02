function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.title = color;
  return color;
}
// Напиши скрипт,
// який змінює кольори фону елемента <body> через інлайн стиль при натисканні на button.change-color
// і виводить значення кольору span.color.
// функція для зміни кольору написана на початку сторінки
