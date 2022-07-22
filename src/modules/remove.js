export default function remove(num, list) {
  list.splice(num, 1);
  localStorage.setItem('todoList', JSON.stringify(list));
}
