// CRUD

// С - create - Створити - метод POST
// R - read - прочитатит або отримати - метод GET
// U - update - оновити данні - Якщо оновити об'єкт повністю то PUT, якщо оновити точечно (одне поле) то PATCH
// D - delete - Видалити - метод DELETE

import Notiflix from 'notiflix';

const refs = {
  todoDiv: document.querySelector('#todos'),
  addButton: document.querySelector('#add'),
  input: document.querySelector('#create-input'),
};

async function getTodos() {
  const data = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=10'
  );
  const todos = await data.json();
  console.log(todos);
  todos.forEach(todo => createHTML(todo));
}

window.addEventListener('DOMContentLoaded', getTodos());

function createHTML({ completed, id, title }) {
  console.log(completed);
  const markup = `<div class="form-check" id="todo-${id}">
  <label class="form-check-label">
    <input type="checkbox" class="form-check-input" checked="${completed}"/>
   ${title}
  </label>
  <button
    type="button"
    class="btn-close"
    aria-label="Close"
    style="font-size: 10px"
  ></button>
</div>`;
  refs.todoDiv.insertAdjacentHTML('beforeend', markup);
}

refs.addButton.addEventListener('click', addTodo);

async function addTodo() {
  const todoValue = refs.input.value.trim();

  if (!todoValue) {
    Notiflix.Notify.info('Запиши данні у інпут');
    return;
  }

  const postObj = {
    title: todoValue,
    completed: false,
  };

  refs.input.value = '';

  const data = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(postObj),
  });

  const todo = await data.json();

  createHTML(todo);
}
// Наступне заняття
// refs.todoDiv.addEventListener('click', onDelete);

// async function onDelete(id) {}
