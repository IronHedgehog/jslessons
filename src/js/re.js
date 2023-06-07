const refs = {
  textField: document.querySelector('.textareaItem'),
  counter: document.querySelector('.counter span'),

  //

  div: document.querySelector('.div'),
};

const limit = refs.textField.getAttribute('maxlength');
refs.counter.innerHTML = limit;

refs.textField.addEventListener('keyup', onKeyUp);
refs.textField.addEventListener('keydown', onKeyDown);

function onKeyDown(e) {
  if (e.repeat) onKeyUp();
}

function onKeyUp(e) {
  const limitText = limit - refs.textField.value.trim().length;
  refs.counter.innerHTML = limitText;
}

// dblclick

refs.div.addEventListener('dblclick', onDblclick);
refs.div.addEventListener('contextmenu', onContextMenu);

function onContextMenu(e) {
  // e.preventDefault();
  console.log(e);
}

function onDblclick(e) {
  console.log(e);
}

// SCROLL

// window.addEventListener('scroll', onScroll);

// function onScroll(e) {
//   console.log(`${Math.round(scrollY)}px`);
// }

// paralax - зоряне небо
//scroll - багато обьектів  observer
//observer - безкінечний скрол
//it`s` a trap
// DOM - +
//event loop - +-
// SASS - міксини, адаптація

const dev = document.createElement('ul');

for (let index = 0; index < 5; index++) {
  const listItem = document.createElement('li');
  listItem.textContent = 'привіт';
  dev.appendChild(listItem);
}

const body = document.body;

body.append(dev);

const arr = [1, 2, 3, 4, 5];

const markup = arr.map(number => `<li>${number}</li>`).join('');

dev.innerHTML = markup;
dev.insertAdjacentHTML('beforeend', markup);

// dev.innerHTML = '';
