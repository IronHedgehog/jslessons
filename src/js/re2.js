const user = {
  name: '47',
  connection: true,
};

const a = '7';
const b = 7;

// console.log(a == b);
// console.log(a === b);

const arrrr = [2, 3];

// console.log(Number.parseInt('7.12asdakusdkasdg8'));
// console.log(Number.parseFloat('7.12asdakusdkasdg8'));

// console.log(Array.isArray(arrrr));

if (user.connection) console.log(':hello');

if (!user.connection) console.log('offline');

const namee = 'Artem';
console.log(`My name is ${namee}`);
console.log(namee.length);

console.log(arrrr.includes(3));

if (!user.connection || namee.length === 5) console.log('пока');

const falsee = [false, null, undefined, '', NaN, 0];

const type = 18 === '18' ? 'ТАК' : 'НІ';

function name(x, y) {}

name(5, 4);

const arr = (a, c, b) => a + c + b;

const arr = {
  goWalk: function name(params) {},
};
