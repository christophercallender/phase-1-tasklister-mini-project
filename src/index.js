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
   let btn = document.createElement('button');
   btn.addEventListener('click', handleDelete);
   p.textContent = `${todo} `;
   btn.textContent = 'Completed';
   p.appendChild(btn);
   document.querySelector('#list').appendChild(p);
}

function handleDelete(e) {
   e.target.parentNode.remove();
}
