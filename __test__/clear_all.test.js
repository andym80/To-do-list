/**
 * @jest-environment jsdom
 */

// import checkComplete from "../src/modules/check_complete.js";
import clearAll from '../src/modules/clear_all.js';
import genHTML from '../src/modules/gen_html.js';

const listArr = [
  {
    description: 'task 1',
    completed: false,
    index: 1,
  },
  {
    description: 'task 2',
    completed: false,
    index: 2,
  },
  {
    description: 'task 3',
    completed: false,
    index: 3,
  },
];

beforeAll(() => {
  document.body.innerHTML = `
  <main>
    <div class="heading container">
      <h1>To-Do List</h1>
      <i class="fas fa-sync-alt"></i>
    </div>
    <div class="add-container container">
      <input type="text" id="add-item" placeholder="Add to your list...">
      <i id="add-new-btn" class="fas fa-level-down-alt"></i>
    </div>
    <ul id="list"></ul>
    <div  id="clear-all" class="list-foot">
      <p>
        Clear all completed
      </p>
    </div>
  </main>
  `;

  const list = document.getElementById('list');

  genHTML(list, listArr);
});

it('clear all checked tasks', () => {
  document.getElementById('checkbox-2').click();
  // document.getElementById('clear-all').click();
  clearAll(JSON.parse(localStorage.getItem('todoList')));
  // console.log(JSON.parse(localStorage.getItem('todoList')));
  expect(JSON.parse(localStorage.getItem('todoList')).length).toBe(2);
});
