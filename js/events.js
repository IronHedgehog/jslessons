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
  // console.log("object :>> ", code);
  if (code === "Escape") {
    // console.log("Я натиснув Escape");
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
    // console.log("Я натиснув комбінацію клавіш");
  }
}

const form = document.querySelector("#form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { login, password },
  } = e.currentTarget;

  if (login.value === "" || password.value === "") {
    console.log("Заповніть обов'язкові поля");
    return;
  }

  console.log(login.value, password.value);
}

const passwordInput = document.querySelector("#password");
const text = document.querySelector("#text");

passwordInput.addEventListener("input", onInput);

function onInput(e) {
  console.log(e.currentTarget.value);
  text.textContent = e.currentTarget.value;
}

passwordInput.addEventListener("focus", onFocus);

function onFocus(e) {
  passwordInput.value = "привіт";
  text.textContent = "привіт";
}

passwordInput.addEventListener("blur", onBlur);

function onBlur(e) {
  passwordInput.value = "";
  text.textContent = "";
}

const block1 = document.querySelector("#div1");
const block2 = document.querySelector("#div2");
const block3 = document.querySelector("#div3");

block1.addEventListener("click", (e) => {
  console.log("блок1");
});
block2.addEventListener("click", (e) => console.log("блок2"));
block3.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("блок3");
});

const mmenu = document.querySelector(".menu");

document.addEventListener("click", onClick1);

function onClick1(e) {
  console.log("e.target.nodeName :>> ", e.target.nodeName);
  if (e.target.nodeName === "SPAN") {
    mmenu.classList.toggle("_active");
  }

  if (e.target.nodeName === "BODY") {
    mmenu.classList.remove("_active");
  }
}
