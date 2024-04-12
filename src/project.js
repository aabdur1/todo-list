export default class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}

const projects = [];

function addProject(name) {
  const newProject = new Project(name);
  projects.push(newProject);
  displayProjects();
}

const newProject = document.createElement("input");
newProject.type = "text";
newProject.id = "projectName";
newProject.placeholder = "New Project";
newProjectWrapper.appendChild(newProject);

const newProjectBtn = document.createElement("button");
newProjectBtn.textContent = "Add new project";
newProjectBtn.addEventListener("click", createProject);
newProjectWrapper.appendChild(newProjectBtn);
