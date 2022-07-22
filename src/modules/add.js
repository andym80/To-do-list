export default function addNew(task, num) {
  const newTask = {
    description: task,
    completed: false,
    index: num,
  };
  return newTask;
}