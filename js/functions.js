// 1)Створити об'єкт, який буде описувати вас, створити не менше 5 ключів, вставити
// туди декілька функції з ваших повсякденних справ ( наприклад виконання домашки та прогулянка)
// за аналогією книжкової шафи яку ми з вами робили на уроці

// 2)Напишіть функцію, яка приймає як аргумент відстань в кілометрах і повертає відстань в милях.
// Формула для перетворення : милі = кілометри * 0.6214.

// 3)Створіть функцію spliceArr(array),що приймає масив,
// знаходить індекс 2-го елементу у масиві ["Apple","Orange","Plum",]
// за допомогою методу масива та запишіть їй у змінну старт,
// потім використайте цю змінну для заміни цього фрукта на "grapefruit"

const artem = {
  name: "Artem",
  lastName: "Faust",
  age: 22,
  jobs: [1, 2, 3, 4],
  rest: 5,

  minusJob() {
    this.jobs.pop();
  },

  changeAge() {
    this.age += 1;
  },
};

artem.changeAge();
artem.minusJob();
artem.minusJob();
// console.log("artem :>> ", artem);

function convertor(kilometrs) {
  const miles = kilometrs * 0.6214;
  return miles;
}

const miles = convertor(1000);
// console.log("miles :>> ", miles);

function spliceArr(array) {
  const start = array.indexOf("Orange");
  array.splice(start, 1, "grapefruit");
  return array;
}

const b = spliceArr(["Apple", "Orange", "Plum"]);
// console.log("b :>> ", b);

//
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log("number :>> ", number);

// Доповни код так, щоб у змінну number записувалося перше число від start до end,
// яке ділиться на 5 без залишку.

// function calculateTotalPrice(order) {
//   let total = 0;

// for (let i = 0; i < order.length; i += 1) {
//   total += order[i];
// }

//   for (const i of order) {
//     total = total + i;
//   }

//   return total;
// }

// const total = calculateTotalPrice([12, 85, 37, 4]);

// console.log("total :>> ", total);

// Виконай рефакторинг коду функції calculateTotalPrice(order) замінивши цикл for на for...of

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }

// const a = filterArray([1, 2, 3, 4, 5], 3);
// console.log("a :>> ", a);
// виконай рефакторинг функції filter Array(numbers, value) замінивши цикл for на for...of.

function includes(array, value) {
  for (const i of array) {
    if (i === value) {
      return true;
    }
  }
  return false;
}
const a = includes([1, 2, 3, 4, 5], 3);
console.log("a :>> ", a);

// Напиши функцію includes(array, value), яка робить те саме,
// що і метод масиву масив.includes(значення) - перевіряє,
// чи є в масиві array значення value, повертаючи true якщо є і false в іншому випадку.

// При виконанні цього завдання у тілі функції includes()
// не можна використовувати метод масив.includes(значення).

// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i += 1) {
//     console.log("i :>> ", i);
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// console.log("findNumber(0, 20, 5) :>> ", findNumber(0, 20, 5));

// Виконай рефакторинг функції findNumber(start, end, divisor) так, щоб вона:

// повертала перше число від start до end, яке ділиться на divisor без залишку
// не використала оператор break
// не використовувала змінну number

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const i of order) {
//     total += i;
//   }

//   return total;
// }

// const a = calculateTotalPrice([12, 85, 37, 4]);

// console.log("a :>> ", a);

// 8)Напиши функцію calculateTotalPrice(order),
// яка приймає один параметр order - масив чисел і розраховує загальну суму його елементів.
//  Загальна сума елементів повинна зберігатись у змінній total, яка повертається, як результат роботи функції.
