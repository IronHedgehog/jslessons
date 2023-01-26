function spliceArray(array) {
  const start = array.indexOf("JavaScript");
  const arr = array.splice(start, 3);
  return arr;
}

const secondPart = spliceArray(["I", "study", "JavaScript", "right", "now"]);

function sliceArray(array) {
  const arr = array.slice(0, 2);
  return arr;
}

const firstPart = sliceArray(["I", "study", "JavaScript", "right", "now"]);

console.log(firstPart);

function сoncatArr(array1, array2) {
  const arr = array1.concat(array2);

  const a = arr.join(" ");
  return a;
}

const message = сoncatArr(firstPart, secondPart);

console.log("message :>> ", message);

// 1)Cтворити функцію  spliceArray яка приймає (масив) таким чином, щоб вона повертала у змінній arr  останні 3
// елементи з масиву ["I", "study", "JavaScript", "right", "now"];

//  2)Створити функцію  sliceArray(масив) так, щоб вона
//  повертала перші два елементи з цього масиву ["I", "study", "JavaScript", "right", "now"]
// (slice(start, end) – створює новий масив, копіюючи в нього елементи з позиції start до end (не включаючи end).
// Приклад:
// let arr = ["t", "e", "s", "t"];

// alert( arr.slice(1, 3) ); // e,s (копіює з 1 до 3)
// )

//  3)Функція сoncatArr(array,array) має поєднувати два масиви які у вас вийшли з
// двох минулих функцій таким чином, щоб у вас вийшов знову цілий масив ["I", "study", "JavaScript", "right", "now"];
