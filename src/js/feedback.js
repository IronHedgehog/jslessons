import throttle from 'lodash.throttle';

const id = 15;

const LOCAL = 'id';

const setings = {
  them: 'black',
  token: 'a;akfpkasodkasd',
  id: 'asd',
};

// console.log(localStorage.getItem(LOCAL));
const row = localStorage.getItem(LOCAL);
const jksdf = JSON.parse(row);
// console.log(jksdf);
// setings.id = '75';
// console.log(jksdf);

// localStorage.setItem(LOCAL, JSON.stringify(setings));

// localStorage.removeItem(LOCAL);
// localStorage.clear();

// ------------------------------------- Приклад ----------------------------------------- //

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.input5'),
  textArea: document.querySelector('.textArea'),
};

const FEEDBACK = 'feedback';
const value = {};
const item = localStorage.getItem(FEEDBACK);

refs.form.addEventListener('input', throttle(reloadInput, 500));

function reloadInput(e) {
  value[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK, JSON.stringify(value));
}
saveValue();

function saveValue() {
  if (JSON.parse(item)) {
    refs.input.value = JSON.parse(item).email;
    refs.textArea.value = JSON.parse(item).message;
  }
  return;
}

refs.form.addEventListener('submit', removeItem);

function removeItem(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK);
}
