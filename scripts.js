const todoList = [{
  name: 'Finish the HTML for the form',
  dueDate: 'Saturday, 11 October',
},
{
  name: 'Start a new project',
  dueDate: 'Saturday, 11 October',
}];

renderTodoList();

function formatDate(value) {
  if (!value) return '';
  return new Date(value + 'T00:00:00').toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
}

function renderTodoList() {
  let todoListHtml = '';

  todoList.forEach((task) => {
    const { name, dueDate } = task;

    const html = `
      <div class='task js-task'>
        <div class="js-task-display">${name}</div>
        <div class="date-display">${formatDate(dueDate)}</div>
        <button class="delete-btn js-delete-btn">Delete</button>
      </div>
    `;
    todoListHtml += html;
  });

  document.querySelector('.js-task').innerHTML = todoListHtml;

  document.querySelectorAll('.js-delete-btn').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList()
    });
  });

};

document.querySelector('.js-add-btn').addEventListener('click', () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector('.js-todo-input');
  const name = inputElement.value;

  const dateInput = document.querySelector('.js-date-input');
  const dueDate = dateInput.value;

  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';
  dateInput.value = '';

  renderTodoList();
};