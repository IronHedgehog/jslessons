// console.log("hello :>> ", hello);

// const a = {
//   name: "A",
// };

// const Artem = {
//   name: "Artem",
//   showName: hello,
//   showa: hello.bind(a),
// };
// Artem.showName();

// const person = {
//   name: "Petro",
//   lastName: " petro",
//   getFullName() {
//     return `${this.name} ${this.lastName}`;
//   },
// };

// console.log("person :>> ", person.getFullName());

// function hello(callback) {
//   console.log(`Привіт,${callback()}`);
// }

// function hello(callback) {
//   console.log(`Привіт,${callback()}`);
// }

// const showThis = () => {
//   console.log("this :>> ", this);
// };

// showThis();

// const user = {
//   name: "Artem",

// };

// user.showContext = showThis;

// user.showContext();

// function hello() {
//   console.log("this :>> ", this.name);
// }

const B = {
  name: "Petro",
  age: 20,
  score: 100,
};

const Artem = {
  name: "Artem",
  showName: hello,
};

console.log("this :>> ", this);
Artem.showName.call(B, 20, 30, "Petro");
Artem.showName.apply(B, [20, 30, "Petro"]);
const b = Artem.showName.bind(B);

b();
function hello() {
  console.log("this :>> ", this.name);
}

hello.bind(Artem);
