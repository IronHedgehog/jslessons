const names = ["Artem", "Petro", "Anatoliy"];

const upperNames = names.map((el) => el.toUpperCase());
const lowerNames = names.map((el) => el.toLowerCase());

// console.log("upperNames :>> ", upperNames);
// console.log("lowerNames :>> ", lowerNames);
// console.log("names :>> ", names);

const workers = [
  {
    name: "Anton",
    salary: 1000,
  },
  {
    name: "Anton",
    salary: 2000,
  },
  {
    name: "Anton",
    salary: 3000,
  },
  {
    name: "Anton",
    salary: 4000,
  },
  {
    name: "Anton",
    salary: 5000,
  },
];

const salarys = workers.map((el) => el.salary);

// console.log("salarys :>> ", salarys);
// console.log("workers :>> ", workers);

// flatMap

const students = [
  { name: "Artem", courses: ["math", "phylosofy"] },
  { name: "Artem", courses: ["asda", "asd"] },
  { name: "Artem", courses: ["zxc", "zxc"] },
];

const courses = students.flatMap((student) => student.courses);

// console.log("courses :>> ", courses);

// filter

const numbers = [1, 2, 3, 4, 5];

const subscr = [
  {
    name: "ABC",
    sub: "true",
  },
  {
    name: "Unsub",
    sub: "false",
  },
  {
    name: "QWE",
    sub: "true",
  },
  {
    sub: "false",
  },
];

const filteredNumbers = numbers.filter((number) => number >= 4);
const subFiltr = subscr.filter(({ sub }) => sub === "true");

console.log("filteredNumbers :>> ", filteredNumbers);
console.log("subFiltr :>> ", subFiltr);
console.log("numbers :>> ", numbers);

// find

const colors = [
  {
    color: "#000000",
    name: "black",
  },
  { color: "#1231f3", name: "blue" },
  { color: "adada", name: "blue" },
];

const unSub = subscr.find(({ sub }) => sub === "false");
const blue = colors.find(({ name }) => name === "asdadasd");

// console.log("unSub :>> ", unSub);
// console.log("blue :>> ", blue);

// findIndex

const a = colors.findIndex((el) => el.name === "azxczxc");

console.log("a :>> ", a);

// every and some

const b = [0, -2, -3, -4, -5];

const allTrue = b.every((number) => number >= 1);

console.log("allTrue :>> ", allTrue);

const oneTrue = b.some((number) => number >= 0);

console.log("oneTrue :>> ", oneTrue);
