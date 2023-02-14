// Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини параметри firstArray 
// і secondArray, і повертає новий масив їх загальних елементів, тобто тих що є в обох масивах (foreach).



 getCommonElements([1, 2, 3], [2, 4]) повертає [2]
 getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
 getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
 getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
 getCommonElements([1, 2, 3], [10, 20, 30]) повертає []



//  Доповни код так, щоб у змінній планетіLengths вийшов масив довжин назв планет. 
//  Обов'язково використовуй метод map().

 const planets = ["Earth", "Mars", "Venus", "Jupiter"];
 const planetsLengths = planets;


//  Використовуючи метод filter(), доповни код так, щоб:
//  У змінній highSalaryFilter вийшов масив воркерів, 
// зарплатня яких  більше або дорівнює значенню змінної MIN_SALARY.
//  У змінній findTopWorker знайшовся топовий робітник за допомогою змінної TOP_WORKER (find)

 const workers = [
   {name: "A",salary:5000},
   {name: "B",salary:3000},
   {name: "C",salary:2000},
   {name: "E",salary:6000},
   {name: "F",salary:10000,grade: "top worker"},
   {name: "G",salary:7000},

  ];
  
  const MIN_SALARY = 5000;
  const TOP_WORKER = "F"

  
  const highSalaryFilter = workers;
  const findTopWorker = workers;
  