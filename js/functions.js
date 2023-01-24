// // function declaration

// const number = multiply();

// function multiply(x = 0, y = 2, z = 1, n = 2) {
//   console.log("arguments :>> ", arguments); // псевдомасив переданих у функцію аргументів
//   console.log("x+y+z+n :>> ", x + y + z + n);

//   const arr = Array.from(arguments); // перетворення псевдомасиву на масив

//   console.log("arr :>> ", arr);

//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//     //   total += argument;
//     //   total -= argument;
//     //   total /= argument;
//     //   total = total * argument;
//     //   total = total - argument;
//     //   total = total + argument;
//     //   total = total / argument;
//   }

//   return total;
// }

// // function expression

// const plus = function () {
//   console.log("arguments :>> ", arguments);

//   const arr = Array.from(arguments);

//   console.log("arr :>> ", arr);

//   let total = 1;

//   for (const argument of arguments) {
//     total += argument;
//   }

//   return total;
// };

// const sum = plus(1, 2, 3);

// console.log("sum :>> ", sum);

// function payment(amount, balance) {
//   let message = "Операція пройшла успішно";

//   // if (amount === 0) {
//   // message = "введіть значення окреме від 0";
//   // } else if(amount > balance) {
//   // message = "недсотатньо коштів";
//   // } else{
//   // message = "Операція пройшла успішно";
//   // }

//   if (amount === 0) {
//     message = "введіть значення окреме від 0";
//     return message; // раннє повернення
//   }

//   if (amount > balance) {
//     message = "недсотатньо коштів";
//     return message; // раннє повернення
//   }

//   return message;
// }

// const money = payment(0, 300);
// const money2 = payment(500, 300);
// const money3 = payment(100, 300);

// console.log("money :>> ", money);
// console.log("money2 :>> ", money2);
// console.log("money3 :>> ", money3);

// function splitMessage(message, delimiter) {
//   console.log("arguments :>> ", arguments);

//   const u = Array.from(arguments);
//   console.log("u :>> ", u);
//   const arr = message.split(delimiter);
//   console.log("arr :>> ", arr);
//   return arr; // return оператор який повертає значення у зовнішній код
// }

// const b = splitMessage("A love JS", " ");
// // console.log("b :>> ", b);

// function makeStringFromArray(array, delimiter) {
//   const string = array.join(delimiter);
//   return string; // return оператор який повертає значення у зовнішній код
// }

// const c = makeStringFromArray(["js", "is", "cool"], " ");
// console.log("c :>> ", c);

// function checkFruit(fruit) {}

// const t = checkFruit("груша");
// console.log("t :>> ", t);

// const users = [1, 2, 3];
// const clients = ["a", "a", "a"];

// const doublearr = users.concat(clients);
// console.log("doublearr :>> ", doublearr);

// users.slice(2);

// console.log("users :>> ", users);

// function concatArrays(arr1, arr2) {
//   return arr1.concat(arr2);
// }

// const n = concatArrays([], [1]);
// console.log("n :>> ", n);

// function asdas(arr) {
//   return arr.splice(1, 3, 7, 8, 9);
// }

// const m = asdas([1, 2, 3, 4, 5, 6]);
// console.log("m :>> ", m);
