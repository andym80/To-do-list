/**
 * @jest-environment jsdom
 */

import genHTML from "../src/modules/gen_html"

beforeAll(()=>{
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
      description: 'Add your first task',
      completed: false,
      index: 1,
    },
  ];

  genHTML(list, defaultItem);
})

describe('edit description', () =>{

  it('enter submit with click', () =>{
    const desc = document.getElementById('label-0');
    console.log(desc.outerHTML)
    desc.click();
    expect(desc.getAttribute('contenteditable')).toBe('true');
  })

  it('submit edit', () =>{
    const desc = document.getElementById('label-0');
    desc.click();
    console.log(document.getElementById('add-item').outerHTML);
    // desc.dispatchEvent(event);
    // desc.blur();
    console.log(desc.getAttribute('contenteditable'));

    expect(desc.getAttribute('contenteditable')).toBe('true');
  })

})
