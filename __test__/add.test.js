import addNew from '../src/modules/add.js';

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
