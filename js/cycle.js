// const users = ["Artem", "Vanya", "Petya"];

// const clientName = "Petya";

// let message;

// for (let i = 0; i < users.length; i += 1) {
//   console.log("users[index] :>> ", users[i]);
// }

// -------------------------------------------

// for (const user of users) {
//   if (user === clientName) {
//     message = "Я є Петя";
//     break;
//   }
//   message = "Юзера не знайденo";
// }

// console.log("message :>> ", message);

// -------------------------------------------

const numbers = [1, 12, 14, 20, 5, 10];
const target = 13;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < 13) {
    continue;
  }
  console.log("object :>> ", numbers[index]);
}
