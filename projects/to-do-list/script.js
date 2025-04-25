const addTaskButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.addEventListener('click', () => {
    li.remove();
  });

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);
  taskInput.value = '';
});
