const workers = [
  {
    name: "bill",
    job: "architect",
    salary: 10000,
  },
  {
    name: "Arni",
    job: "actor",
    salary: 100000,
  },
  {
    name: "Bob",
    job: "singer",
    salary: 40000,
  },
  {
    name: "Ann",
    job: "manager",
    salary: 30000,
  },
  {
    name: "Antony",
    job: "Footballer",
    salary: 90000,
  },
  {
    name: "John",
    job: "builder",
    salary: 25000,
  },
  {
    name: "Arthur",
    job: "teacher",
    salary: 20000,
  },
];

//1) створити функцію яка порахує середню зарплатню робітників.

function calculateMidleWage(array) {
  const salarys = [];

  let result = 0;
  for (const worker of array) {
    salarys.push(worker.salary);

    result += worker.salary;
  }
  const total = result / salarys.length;
  return total;
}

const a = calculateMidleWage(workers);
// console.log("a :>> ", a);
//

const workers1 = [
  {
    name: "Robert",
    job: "Dentist",
    salary: 90000,
  },
  {
    name: "Pietro",
    job: "Computer Systems Analyst",
    salary: 120000,
  },
  {
    name: "James",
    job: "Web Developer",
    salary: 100000,
  },
];

// 2) за допомогою синтаксису трьох крапок(...spread) поєднати масиви workers та workers1 та вивести у консоль

const workers2 = [...workers, ...workers1];
// console.log("workers2 :>> ", workers2);

//

const arr = [
  {
    name: "James",
    job: "Web Developer",
    salary: 100000,
  },
  [1, 2],
  3,
  4,
  5,
  6,
  7,
];

console.log("arr :>> ", arr);
const [b, d, c, e, y, z, i] = arr;
console.log("b :>> ", b);
console.log("d :>> ", d);
console.log("c :>> ", c);
console.log("e :>> ", e);
console.log("e :>> ", y);
console.log("e :>> ", z);
console.log("e :>> ", i);

//3) виконати деструктуризацію масиву arr та вивести отримані константи у консоль.
