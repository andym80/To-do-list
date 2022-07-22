/* import { iteratee } from 'lodash'; */
// import { get } from 'lodash';
import remove from '../src/modules/remove.js';

describe('remove', () => {
  const list = [{
    description: 'test',
    completed: false,
    index: 1,
  }];

  class LocalStorage {
    constructor() {
      this.store = {};
    }

    getItem(key) {
      return this.store[key] || null;
    }

    setItem(key, value) {
      this.store[key] = String(value);
    }
  }

  global.localStorage = new LocalStorage();
  it('remove task from list', () => {
    const num = 0;
    const newList = [];
    remove(num, list);
    expect(localStorage.getItem('todoList')).toEqual(JSON.stringify(newList));
  });
/* xpect setItem('key', 'value'); */
});
