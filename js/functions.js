// function declaration

const number = multiply();

function multiply(x = 0, y = 2, z = 1, n = 2) {
  console.log("arguments :>> ", arguments); // псевдомасив переданих у функцію аргументів
  console.log("x+y+z+n :>> ", x + y + z + n);

  const arr = Array.from(arguments); // перетворення псевдомасиву на масив

  console.log("arr :>> ", arr);

  let total = 1;

  for (const argument of arguments) {
    total *= argument;
    //   total += argument;
    //   total -= argument;
    //   total /= argument;
    //   total = total * argument;
    //   total = total - argument;
    //   total = total + argument;
    //   total = total / argument;
  }

  return total;
}

// function expression

const plus = function () {
  console.log("arguments :>> ", arguments);

  const arr = Array.from(arguments);

  console.log("arr :>> ", arr);

  let total = 1;

  for (const argument of arguments) {
    total += argument;
  }

  return total;
};

const sum = plus(1, 2, 3);

console.log("sum :>> ", sum);

function payment(amount, balance) {
  let message = "Операція пройшла успішно";

  // if (amount === 0) {
  // message = "введіть значення окреме від 0";
  // } else if(amount > balance) {
  // message = "недсотатньо коштів";
  // } else{
  // message = "Операція пройшла успішно";
  // }

  if (amount === 0) {
    message = "введіть значення окреме від 0";
    return message; // раннє повернення
  }

  if (amount > balance) {
    message = "недсотатньо коштів";
    return message; // раннє повернення
  }

  return message;
}

const money = payment(0, 300);
const money2 = payment(500, 300);
const money3 = payment(100, 300);

console.log("money :>> ", money);
console.log("money2 :>> ", money2);
console.log("money3 :>> ", money3);

//

// function calculator() {
//   plus();
//   minus();

//   for (let index = 0; index < array.length; index++) {
//     multiply();
//   }
// }
