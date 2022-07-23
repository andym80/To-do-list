const clearAll = (listArr) => {
  listArr = listArr.filter((element) => element.completed === false);
  listArr.forEach((element, index) => {
    element.index = index + 1;
  });

  localStorage.setItem('todoList', JSON.stringify(listArr));
}

export default clearAll;
