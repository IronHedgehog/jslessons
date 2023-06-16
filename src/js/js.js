console.log(left);
// console.log(t);
name();
// ar();
const obj = {
  name: 'j',
};

// console.log(Object);

// console.log(obj);

const arr = [1, 2, 3, 4, 56, 2, 7, 7, 6, 5, 4];

const arr1 = [...arr];

arr1.slice(1, 7);

// console.log(arr1);

arr1.splice(1, 7);

// console.log(arr1);

const filter = arr.filter(num => num < 7).sort((a, b) => b - a);

const doubles = [...new Set(filter)];

console.log(Array.isArray(doubles));

const find = arr.find(num => {
  return num === 56;
});

// arr.forEach(num => {
//   console.log(num + 2);
// });

var left;
const r = 'asd';
let t;
const ar = () => {
  console.log('NOT');
};

console.log(t);

function name() {
  console.log('HOISTING');
}

const findIndex = arr.findIndex(num => num === 4);

const calc = arr.reduce((prev, num) => {
  return [...prev, num];
}, []);

const every = arr.every(num => num === 4);

console.log(every);

const some = arr.some(num => num === 4);

console.log(some);

((y, x) => {
  console.log(y + x);
})(5, 2);

window.addEventListener('scroll', e => {
  console.log(e);
});
