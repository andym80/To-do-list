import checkComplete from './check_complete.js';
import remove from './remove.js';

export default function genHTML(list, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const item = document.createElement('li');
    const descCont = document.createElement('div');
    const checkbox = document.createElement('input');
    const desc = document.createElement('label');
    const itemIcon = document.createElement('i');

    descCont.classList.add('description-container');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      checkComplete(arr);
      list.innerHTML = '';
      genHTML(list, arr);
    });
    checkbox.id = `checkbox-${i}`;
    checkbox.classList.add('checkbox');
    checkbox.checked = arr[i].completed;
    desc.htmlFor = `checkbox-${i}`;
    desc.id = `label-${i}`;
    desc.textContent = arr[i].description;
    if (checkbox.checked) {
      desc.classList.add('done');
    }
    itemIcon.classList.add('add-btn', 'fa-ellipsis-v', 'item-icon');

    itemIcon.addEventListener('click', () => {
      if (itemIcon.classList.contains('red')) {
        remove(i, arr);
        arr.forEach((item) => {
          if (item.index > i) {
            item.index -= 1;
          }
        });
        localStorage.setItem('todoList', JSON.stringify(arr));
        list.innerHTML = '';
        genHTML(list, arr);
      }
    });

    desc.addEventListener('click', (e) => {
      e.preventDefault();
      desc.setAttribute('contenteditable', 'true');
      desc.parentElement.parentElement.classList.add('bisque-bkg');
      desc.parentElement.nextElementSibling.classList.add('red');
      desc.parentElement.nextElementSibling.classList.replace('fa-ellipsis-v', 'fa-trash-alt');
    });

    desc.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        arr[i].description = desc.value;
        localStorage.setItem('todoList', JSON.stringify(arr));
        desc.parentElement.parentElement.classList.remove('bisque-bkg');
        desc.parentElement.nextElementSibling.classList.remove('red');
        desc.parentElement.nextElementSibling.classList.replace('fa-trash-alt', 'fa-ellipsis-v');
        desc.setAttribute('contenteditable', 'false');
      }
    });

    descCont.appendChild(checkbox);
    descCont.appendChild(desc);

    item.appendChild(descCont);
    item.appendChild(itemIcon);

    list.appendChild(item);
  }
}
