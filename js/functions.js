// function declaration

calculator(1, 2, 3, 4); // виклик функції,передача параметрів для обчислення

function calculator(a = 0, b = 0, c = 0, d = 0) {
  // (в круглих дужках приймаються параметри які ви передаєте при виклиці, використовуються тільки у тілі функції)
  console.log(a + b + c + d);
  console.log(a - b - c - d);
  console.log(a * b * c * d);
  console.log(a / b / c / d);
  return a + b + c + d; // оператор return передає розроховане значення у зовнішній код
}
