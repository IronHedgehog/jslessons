funct();

const num = 7;
const num1 = 7;

// console.log(num === num1);

const person = {
  name: 'Artem',
  phone: 72324723742,
  bane: {
    lon: 2934,
    lat: {
      lat: 123,
      lon: 928,
    },
  },
};

const person1 = {
  name: 'Artem',
  phone: 72324723742,
};

const strPr = JSON.stringify(person);
const person3 = JSON.parse(strPr);

person3.name = 'Petro';

console.log(person);
console.log(person3);

const person2 = { ...person, ...person1 };
console.log(person2);

const strPerson = JSON.stringify(person);
const strPerson1 = JSON.stringify(person1);

// console.log(strPerson === strPerson1);

let a;
// console.log(a);
a = 10;

// console.log(a);

const b = '2';

const c = 2;

console.log(b === c);

// функція у функції

function culcPlus(n) {
  return function op(num) {
    // console.log(n, num);
    // console.log(n + num);
  };
}

const calk = culcPlus(5);

calk(10);
calk(20);
calk(30);

function makeQrCodes(domen) {
  return function qr(url) {
    return `https://${url}.${domen}`;
  };
}

const dotCom = makeQrCodes('com');
const dotUa = makeQrCodes('ua');

// console.log(dotCom('google'));

// console.log(dotUa('robota'));

const func = (...arguments) => {
  console.log(arguments);
  return a + b;
};

func(1, 2);

function funct(a, b, c) {
  console.log(arguments);
  const argumentsArr = Array.from(arguments);
  console.log(argumentsArr);
  console.log(a + b + c);
}

funct(1, 2, 3);

// console.log(nummm);
const nummm = {};

const arr = [1, 3, 2, 5, 4];
const arr1 = [6, 7, 8, 9, 10];

const mapArr = arr.map((num, index, arr) => {
  console.log(num, index, arr);
});

console.log(mapArr);

const FilterArr = arr.filter(num => num >= 3);

console.log(FilterArr);

const sortArr = arr.sort((a, b) => b - a);

console.log(sortArr);

const arr3 = arr.concat(arr1);
console.log(arr3);

const arr4 = [...arr, ...arr1];
arr4.push(11);
console.log(arr4);

// console.log(typeof null);
// console.log(Array.isArray(func));
