// Примітив присвоюється за значенням та кожна змінна має свою комірку в пам'яті
// тому вони ніяк не впливають одне на одного

let a = 5;

let b = a;

console.log("a", a);
console.log("b", b);

a = 10;

console.log("a", a);
console.log("b", b);

// складний тип має посилання на одну комірку в пам'яті 
//  при зміні інформації у ції комірці їх підхоплюють усі підписники

const users = ["a"];

const clients = users;

console.log("users :>> ", users);
console.log("clients :>> ", clients);

users.push("b");
users.pop();

console.log("users :>> ", users);
console.log("clients :>> ", clients);

clients.unshift("0");
clients.shift();

console.log("users :>> ", users);
console.log("clients :>> ", clients);

// console.log(Array.isArray(users)); Перевірка на масив
