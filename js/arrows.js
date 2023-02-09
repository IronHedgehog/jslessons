function helloa(a, c, b) {
  return a + b + c;
}

const plus = (a, b, c) => a + b + c;

console.log("object :>> ", helloa(1));

console.log("object :>> ", plus(1, 2, 3));

const minus = (...args) => {
  const [a, b] = args;
  return a + b;
};

console.log("object :>> ", minus(1, 2));

const upgradeUser = (user, update) => {
  update(user);
};

function qweqwe() {
  //   console.log("arguments :>> ", arguments);
}

qweqwe(1, 2, 3, 4, 5);

//

const number = [1, 2, 3, 4, 5];

const logMessage = (number, index) => {
  console.log("number :>> ", `Iндекс ${index}, значення ${number}`);
};

number.forEach(logMessage);
