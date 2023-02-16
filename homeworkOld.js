// Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини параметри firstArray
// і secondArray, і повертає новий масив їх загальних елементів, тобто тих що є в обох масивах (foreach).

function getCommonElements(arr, arr1) {
  const commonElements = [];
  arr.forEach((item) => {
    if (arr1.includes(item)) {
      commonElements.push(item);
    }
  });

  return commonElements;
}

console.log(
  "getCommonElements([1, 2, 3], [2, 4]) :>> ",
  getCommonElements([1, 2, 3], [2, 4])
);

console.log(
  " getCommonElements([1, 2, 3], [2, 1, 17, 19]); :>> ",
  getCommonElements([1, 2, 3], [2, 1, 17, 19])
);
console.log(
  " getCommonElements([1, 2, 3], [2, 1, 17, 19]); :>> ",
  getCommonElements([1, 2, 3], [2, 1, 17, 19])
);
console.log(
  " getCommonElements([24, 12, 27, 3], [2, 1, 17, 19]); :>> ",
  getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
);

//  Доповни код так, щоб у змінній планетіLengths вийшов масив довжин назв планет.
//  Обов'язково використовуй метод map().

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsLengths = planets.map((planet) => planet.length);
console.log("planetsLengths :>> ", planetsLengths);

//  Використовуючи метод filter(), доповни код так, щоб:
//  У змінній highSalaryFilter вийшов масив воркерів,
// зарплатня яких  більше або дорівнює значенню змінної MIN_SALARY.
//  У змінній findTopWorker знайшовся топовий робітник за допомогою змінної TOP_WORKER (find)

const workers = [
  { name: "A", salary: 5000 },
  { name: "B", salary: 3000 },
  { name: "C", salary: 2000 },
  { name: "E", salary: 6000 },
  { name: "F", salary: 10000, grade: "top worker" },
  { name: "G", salary: 7000 },
];

const MIN_SALARY = 5000;
const TOP_WORKER = "F";

const highSalaryFilter = workers
  .filter(({ salary }) => salary >= MIN_SALARY)
  .sort((a, b) => a.salary - b.salary);

console.log("highSalaryFilter :>> ", highSalaryFilter);
const findTopWorker = workers.find(({ name }) => name === TOP_WORKER);

console.log("findTopWorker :>> ", findTopWorker);
