// const dirty = (array, number) => {
//   for (let i = 0; i < array.length; i += 1) {
//     return (array[i] += number);
//   }
// };

// const numbers = [1, 2, 3, 4, 5];

// const result = dirty(numbers, 2);

// console.log("result :>> ", result);

// console.log("numbers :>> ", numbers);

const pureFunction = (array, number) => {
  const newArr = [];

  array.forEach((item) => {
    newArr.push(item + number);
  });

  return newArr;
};

const numbers = [1, 2, 3, 4, 5];

const result = pureFunction(numbers, 2);
console.log("numbers :>> ", numbers);

console.log("result :>> ", result);




const workers = {
  salary: 1000,
};
