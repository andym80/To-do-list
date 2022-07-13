import genHTML from './gen_html';
import addNew from './add';
import './style.css';

let listArr = [];

const list = document.getElementById('list');

const reload = () => {
  if (localStorage.getItem('todoList')) {
    const oldStorage = localStorage.getItem('todoList');
    const newStorage = JSON.parse(oldStorage);
    list.innerHTML = '';
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

//tap Enter key	to add new task
document.getElementById("add-item").addEventListener("text", enterText);

function enterText(event) {
    event.preventDefault();
};


const clrBtn = document.getElementById('clear-all');
clrBtn.addEventListener('click', () => {
  for (let i = 0; i < listArr.length; i += 1) {
    if (listArr[i].completed) {
      listArr.splice(i, 1);
      listArr.forEach((task) => {
        if (task.index > i) {
          task.index -= 1;
        }
      });
      i -= 1;
    }
  }
  localStorage.setItem('todoList', JSON.stringify(listArr));
  reload();
});


