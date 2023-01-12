const users = ["Artem", "Vanya", "Petya"];

const userIndex = users.length - 1;

const person = users.indexOf("Vanya");

console.log(person);

console.log(users[0].toUpperCase());
console.log(users[1]);
console.log(users[2]);

console.log((users[0] = "Kolya"));
console.log((users[1] = "Artem"));
console.log((users[2] = "Petro"));

console.log("users :>> ", users);
