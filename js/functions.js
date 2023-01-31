// 1)Створити об'єкт, який буде описувати вас, створити не менше 5 ключів, вставити
// туди декілька функції з ваших повсякденних справ ( наприклад виконання домашки та прогулянка)
// за аналогією книжкової шафи яку ми з вами робили на уроці

// 2)Напишіть функцію, яка приймає як аргумент відстань в кілометрах і повертає відстань в милях.
// Формула для перетворення : милі = кілометри * 0.6214.

// 3)Створіть функцію spliceArr(array),що приймає масив,
// знаходить індекс 2-го елементу у масиві ["Apple","Orange","Plum",]
// за допомогою методу масива та запишіть їй у змінну старт,
// потім використайте цю змінну для заміни цього фрукта на "grapefruit"

//

// 1)Напиши функцію includes(array, value), яка робить те саме,
// що і метод масиву масив.includes(значення) - перевіряє,
// чи є в масиві array значення value, повертаючи true якщо є і false в іншому випадку.

// При виконанні цього завдання у тілі функції includes()
// не можна використовувати метод масив.includes(значення).

// 2) function findNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number += i
//       break
//     }
//   }
//   return number;
// }

// Виконай рефакторинг функції findNumber(start, end, divisor) так, щоб вона:

// повертала перше число від start до end, яке ділиться на divisor без залишку
// не використала оператор break
// не використовувала змінну number

// 3)const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//   }
// }

// Доповни код так, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без залишку.

// 4)function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   return total;
// }

// console.log('calculateTotalPrice([12, 85, 37, 4]) :>> ', calculateTotalPrice([12, 85, 37, 4]));

// Виконай рефакторинг коду функції calculateTotalPrice(order) замінивши цикл for на for...of

// 5)function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }

// console.log('filterArray([1, 2, 3, 4, 5], 3) :>> ', filterArray([1, 2, 3, 4, 5], 3));
// виконай рефакторинг функції filter Array(numbers, value) замінивши цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;

//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4])

// Напиши функцію calculateTotalPrice(order),
// яка приймає один параметр order - масив чисел і розраховує загальну суму його елементів.
//  Загальна сума елементів повинна зберігатись у змінній total, яка повертається, як результат роботи функції.
