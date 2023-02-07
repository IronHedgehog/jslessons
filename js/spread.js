const arr = [1, 2, 3, 4, 5];
const arr1 = [6, 7, 8, 9, 10];

// console.log("arr :>> ", ...arr);

const arr3 = arr.concat(arr1);

const arr4 = [...arr, ...arr1];

const user = {
  name: "Artem",
  age: 2,
};

// console.log("user :>> ", user);

const user1 = {
  name: "Nazar",
  lastName: "asdasd",
};

// console.log("user1 :>> ", user1);

const user2 = {
  ...user,
  ...user1,
  name: "asda",
};

// console.log("user2 :>> ", user2);

function doSomething(a, b, c, ...args) {
  // console.log("a :>> ", a);
  // console.log("b :>> ", b);
  // console.log("c :>> ", c);
  // console.log("args :>> ", args);
}

doSomething(1, 2, 3, 3, 5);

const bookShelf = ["kniga1", "kniga2", "kniga3", "kniga4", "kniga5", "asd"];
// console.log("arr10 :>> ", arr10);

const [a, b, c, d, e, h] = bookShelf;

// console.log("a :>> ", a);
// console.log("b :>> ", b);
// console.log("c :>> ", c);
// console.log("d :>> ", d);
// console.log("e :>> ", e);
// console.log("h :>> ", h);

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const { yesterday, today, tomorrow } = highTemperatures;

console.log("yesterday :>> ", yesterday);
console.log("today :>> ", today);
console.log("tomorrow :>> ", tomorrow);

const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log("meanTemperature :>> ", meanTemperature);

// Заміни оголошення змінних yesterday, today, tomorrow і
// Icon однією операцією деструктуризації властивостей
// об'єкта високихтемператур.
