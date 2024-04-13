class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}

const projectsList = [];

function addProject(name) {
  if (name) {
    const newProject = new Project(name);
    projectsList.push(newProject);
  }
  displayProjects();
  console.log(projectsList);
}

function displayProjects() {
  const projectsContainer = document.querySelector("#project-list-wrapper");
  projectsContainer.innerHTML = ""; // Clear the container before displaying updated list

  projectsList.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    const projectName = document.createElement("h2");
    projectName.textContent = project.name;
    projectName.addEventListener("click", () => switchProject(project));
    projectElement.appendChild(projectName);

    projectsContainer.appendChild(projectElement);
  });
}

function switchProject(project) {
  const todosContainer = document.querySelector("#todos-wrapper");
  todosContainer.innerHTML = "";

  project.todos.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item-wrapper");
    todosContainer.appendChild(todoItem);

    const todoItemTitle = document.createElement("h2");
    todoItemTitle.textContent = `${todo.title}`;
    todoItem.appendChild(todoItemTitle);
  });
}

export default function Projects() {
  const projectWrapper = document.createElement("div");
  projectWrapper.classList.add("project-wrapper");
  projectWrapper.id = "project-wrapper";

  const createProjectWrapper = document.createElement("div");
  createProjectWrapper.classList.add("create-project-wrapper");
  projectWrapper.appendChild(createProjectWrapper);

  const newProject = document.createElement("input");
  newProject.type = "text";
  newProject.classList.add("new-project-input");
  newProject.id = "projectName";
  newProject.placeholder = "New Project";
  createProjectWrapper.appendChild(newProject);

  const newProjectBtn = document.createElement("button");
  newProjectBtn.classList.add("new-project-btn");
  newProjectBtn.textContent = "Add project";
  newProjectBtn.addEventListener("click", () => {
    addProject(`${newProject.value}`);
    newProject.value = "";
  });
  createProjectWrapper.appendChild(newProjectBtn);

  const projectListWrapper = document.createElement("div");
  projectListWrapper.classList.add("project-list-wrapper");
  projectListWrapper.id = "project-list-wrapper";
  projectWrapper.appendChild(projectListWrapper);

  return projectWrapper;
}
