const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const number = document.querySelector("#number");
const remove = document.querySelector("#remove");

let value = 0;

value = Number(number.textContent);

increment.addEventListener("click", onClickIncrement);
decrement.addEventListener("click", onClickDecrement);
remove.addEventListener("click", onClickRemove);

function onClickIncrement({ type, target }) {
  console.log("type :>> ", type);

  console.log("target :>> ", target);

  number.innerHTML = value += 1;
}

function onClickDecrement(e) {
  number.innerHTML = value -= 1;
  if (value === -1) {
    decrement.removeEventListener("click", onClickDecrement);
  }
}

function onClickRemove(e) {
  decrement.removeEventListener("click", onClickDecrement);

  console.log("віднімання вимкнуто");
}

addEventListener("keydown", onKeyDown);
addEventListener("keyup", onKeyUp);

function onKeyDown({ key, code }) {
  console.log("object :>> ", code);
  if (code === "Escape") {
    console.log("Я натиснув Escape");
    document.body.style.backgroundColor = "black";
  }
}

function onKeyUp(event) {
  const code = event.code;
  if (code === "Escape") {
    console.log("Я відпустив Escape");
    document.body.style.backgroundColor = "white";
  }
  //   event.preventdefault();

  if ((event.altKey || event.ControlLeft) && event.code === "KeyD") {
    console.log("Я натиснув комбінацію клавіш");
  }
}
