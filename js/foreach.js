const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Індекс ${i}, значення ${numbers[i]}`);
}

const a = [{ a: "b" }, { c: "e" }];

// Метод перебирання forEach
numbers.forEach(function (element) {
  console.log(` значення ${element}`);
});
