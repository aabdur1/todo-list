export default class TodoItem {
  constructor(title, description, date, priority, notes = " ", checkList = []) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.notes = notes;
    this.checkList = checkList;
  }
}

const addTodo = document.createElement("button");
addTodo.classList.add("add-todo-btn");
addTodo.textContent = "Add todo";
addTodo.addEventListener("click", createTodo);
document.body.appendChild(newTodo);

function newTodo() {
  const newTodoWrapper = document.createElement("div");
  newTodoWrapper.classList.add("new-todo-wrapper");
  document.body.appendChild(newTodoWrapper);

  const newTodoTitle = document.createElement("input");
  newTodoTitle.id = "new-todo-title";
  newTodoTitle.placeholder = "New todo";
  newTodoWrapper.appendChild(newTodoTitle);

  const newTodoDescription = document.createElement("input");
  newTodoDescription.id = "new-todo-description";
  newTodoDescription.placeholder = "New todo";
  newTodoWrapper.appendChild(newTodoDescription);
}

function addTodoItem() {
  const todo = new TodoItem(
    `${newTodoTitle.value}`,
    `${newTodoDescription.value}`
  );
}
