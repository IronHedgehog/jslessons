const { default: axios } = require('axios');

function math(x, y) {
  // x = число яке множимо саме на себе,
  //y = число скільки ми будемо множити число саме на себе

  let count = 1;

  for (let index = 0; index < y; index++) {
    count = count * x;
  }

  return count;
}

math(2, 1); // 4
math(2, 3); // 8
math(2, 4); // 16

function math1(x, y) {
  return y == 1 ? x : x * math1(x, y - 1);

  // if (y == 1) {
  //   return x;
  // } else {
  //   return x * math1(x, y - 1);
  // }
}

// console.log(math1(2, 2));
// console.log(math1(2, 3));
// console.log(math1(2, 4));

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    throw new Error('помилка');
  })
  .catch(rej => console.log(rej.message))
  .finally(finaly => console.log('clg'));

const func = async () => {
  try {
    const data = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    return data.data;
  } catch (error) {
    console.log(error.message);
  }
};

console.log(func());

const markUp = async () => {
  const data = await func();
  console.log(data);
};

markUp();
