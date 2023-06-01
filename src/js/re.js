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

window.addEventListener('scroll', onScroll);

function onScroll(e) {
  console.log(`${Math.round(scrollY)}px`);
}

// paralax
//scroll
//observer
// DOM
//event loop
// SASS
