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
   let calendar = document.createElement('tag');
   let clock = document.createElement('tag');
   let priority = document.createElement('select');
   let edtbtn = document.createElement('button');
   let dltbtn = document.createElement('button');
   let space = document.createTextNode(' ');

   calendar.classList.add('button');
   clock.classList.add('button');
   priority.classList.add('button');
   edtbtn.classList.add('button');
   dltbtn.classList.add('button');

   p.textContent = `${todo} `;
   calendar.innerHTML = ` Date: <input type="date"> `;
   clock.innerHTML = ` Time: <input type="time"> `;
   priority.innerHTML = `
   <option>Priority</option>
   <option>High</option>
   <option>Medium</option>
   <option>Low</option>
   `;
   edtbtn.textContent = 'Edit';
   dltbtn.textContent = 'Completed';

   edtbtn.addEventListener('click', handleEdit);
   dltbtn.addEventListener('click', handleDelete);

   p.appendChild(calendar);
   p.appendChild(space);
   p.appendChild(clock);
   p.appendChild(space);
   p.appendChild(priority);
   p.appendChild(space);
   p.appendChild(edtbtn);
   p.appendChild(space);
   p.appendChild(dltbtn);

   document.querySelector('#list').appendChild(p);
}

function handleEdit(e) {
   textUpdate = prompt('Edit Task', e.target.parentNode.firstChild.textContent);
   textUpdate === null
      ? {}
      : (e.target.parentNode.firstChild.textContent = `${textUpdate} `);
}

function handleDelete(e) {
   e.target.parentNode.remove();
}
