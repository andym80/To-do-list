/**
 * @jest-environment jsdom
 */

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

describe('clear completed', () => {
  it('change status for a task', () => {
    document.getElementById('checkbox-2').click();
    expect(JSON.parse(localStorage.getItem('todoList'))[2].completed).toBe(true);
  });
});
