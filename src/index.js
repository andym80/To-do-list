/* eslint-disable no-alert */
import genHTML from './modules/gen_html.js';
import addNew from './modules/add.js';
import './style.css';
import clearAll from './modules/clear_all.js';

let listArr = [];

const list = document.getElementById('list');

const reload = () => {
  if (localStorage.getItem('todoList')) {
    const oldStorage = localStorage.getItem('todoList');
    const newStorage = JSON.parse(oldStorage);
    list.textContent = '';
    listArr = newStorage;
    genHTML(list, listArr);
  } else {
    const defaultItem = [
      {
        description: 'Add your first task',
        completed: false,
        index: 1,
      },
    ];
    const newStorage = JSON.stringify(defaultItem);
    listArr = defaultItem;
    localStorage.setItem('todoList', newStorage);
    list.innerHTML = '';
    genHTML(list, JSON.parse(newStorage));
  }
  const checkboxes = document.querySelectorAll('.checkbox');
  for (let i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].addEventListener('change', () => {
      reload();
    });
  }
};

window.onload = reload();

const task = document.getElementById('add-item');
const addNewBtn = document.getElementById('add-new-btn');
addNewBtn.addEventListener('click', () => {
  if (task.value.length > 0) {
    listArr.push(addNew(task.value, listArr.length + 1));
    const newStorage = JSON.stringify(listArr);
    localStorage.setItem('todoList', newStorage);
    task.value = '';
    reload();
  } else {
    alert('Tasks must contain text.\nTry typing something into the "Add to your list..." input.');
  }
});

const clrBtn = document.getElementById('clear-all');
clrBtn.addEventListener('click', () => {
  clearAll(listArr);
  reload();
});

const checkBtn = document.getElementById('check-all');
checkBtn.addEventListener('click', () => {

});
