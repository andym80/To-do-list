/**
 * @jest-environment jsdom
 */

import genHTML from "../src/modules/gen_html"

beforeEach(()=>{
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

  const defaultItem = [
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

  genHTML(list, defaultItem);
})

describe('edit description', () =>{

  it('enter submit with click', () =>{
    const desc = document.getElementById('label-0');

    desc.click();
    expect(desc.getAttribute('contenteditable')).toBe('true');
  });

  it('submit edit fails', () =>{
    const desc = document.getElementById('label-0');
    desc.click();
    desc.value = 'new task';
    desc.dispatchEvent(new KeyboardEvent('keydown',{'key':'a'}));

    expect(JSON.parse(localStorage.getItem('todoList'))).toBe(null);
  });

  it('submit edit', () =>{
    const desc = document.getElementById('label-0');
    desc.click();
    desc.value = 'new task';
    desc.dispatchEvent(new KeyboardEvent('keydown',{'key':'Enter'}));

    expect(JSON.parse(localStorage.getItem('todoList'))[0].description).toBe('new task');
  });
});

describe('remove task', () => {
  it('enter remove mode with click', () =>{
    const desc = document.getElementById('label-0');
    desc.click();
    expect(desc.getAttribute('contenteditable')).toBe('true');
  });

  it('remove task with click fails', () => {
    const desc = document.getElementById('label-0');
    const removeBtn = desc.parentElement.parentElement.getElementsByTagName('i')[0];
    removeBtn.click();
    expect(JSON.parse(localStorage.getItem('todoList')).length).toBe(3);
  });

  it('remove task with click from end', () => {
    const desc = document.getElementById('label-2');
    const removeBtn = desc.parentElement.parentElement.getElementsByTagName('i')[0];
    desc.click();
    removeBtn.click();
    expect(JSON.parse(localStorage.getItem('todoList')).length).toBe(2);
  });

  it('remove task with click', () => {
    const desc = document.getElementById('label-0');
    const removeBtn = desc.parentElement.parentElement.getElementsByTagName('i')[0];
    desc.click();
    removeBtn.click();
    expect(JSON.parse(localStorage.getItem('todoList')).length).toBe(2);
  });
});
