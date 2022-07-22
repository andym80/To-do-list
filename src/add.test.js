// import genHTML from './gen_html.js';
/* import { iteratee } from 'lodash'; */
import addNew from './add.js';

describe('addNew', () => {
  it('create task object', () => {
    const task = 'test';
    const num = 1;
    const newTask = {
      description: task,
      completed: false,
      index: num,
    };
    expect(addNew(task, num)).toEqual(newTask);
  });
});
