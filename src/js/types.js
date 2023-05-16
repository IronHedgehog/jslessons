const num = 7;
const num1 = 7;

console.log(num === num1);

const person = {
  name: 'Artem',
  phone: 72324723742,
};

const person1 = {
  name: 'Artem',
  phone: 72324723742,
};

let a;
console.log(a);
a = 10;

console.log(a);

const b = '2';

const c = 2;

console.log(b === c);

// функція у функції

function culcPlus(n) {
  return function op(num) {
    console.log(n, num);
    console.log(n + num);
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

console.log(dotCom('google'));

console.log(dotUa('robota'));
