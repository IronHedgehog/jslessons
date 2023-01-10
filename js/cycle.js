// let counter = 0;

// while (counter < 20) {
//   console.log("counter :>> ", counter);
//   counter += 1;
// }

// do {
//   counter += 1;
// } while (counter <= 0);

// console.log("counter", counter);

// -------------------------

// let counter = 0;

// for (counter; counter <= 20; counter += 10) {
//   console.log("counter :>> ", counter);
// }

// -----------------------------

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }
//
const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Непарне i: ", i);
}
