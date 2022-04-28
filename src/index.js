document.addEventListener('DOMContentLoaded', () => {
   let form = document.querySelector('form');
   form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleTask(e.target['new-task-description'].value);
      form.reset();
   });
});

function handleTask(todo) {
   let p = document.createElement('p');
   let edtbtn = document.createElement('button');
   let dltbtn = document.createElement('button');
   let space = document.createTextNode(' ');

   edtbtn.classList.add('button');
   dltbtn.classList.add('button');

   p.textContent = `${todo} `;
   edtbtn.textContent = 'Edit';
   dltbtn.textContent = 'Completed';

   edtbtn.addEventListener('click', handleEdit);
   dltbtn.addEventListener('click', handleDelete);

   p.appendChild(edtbtn);
   p.appendChild(space);
   p.appendChild(dltbtn);

   document.querySelector('#list').appendChild(p);
}

function handleEdit(e) {
   textUpdate = prompt('Edit Task', e.target.parentNode.firstChild.textContent);
   e.target.parentNode.firstChild.textContent = `${textUpdate} `;
}

function handleDelete(e) {
   e.target.parentNode.remove();
}
