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
  const newProject = new Project(name);
  projectsList.push(newProject);
  displayProjects();
}

function displayProjects() {
  const projectsContainer = document.querySelector("#project-list-wrapper");
  projectsContainer.innerHTML = ""; // Clear the container before displaying updated list

  projectsList.forEach((project) => {
    const projectElement = document.createElement("div");
    const projectName = document.createElement("h2");
    projectName.textContent = project.name;
    projectElement.appendChild(projectName);

    project.todos.forEach((todo) => {
      const todoElement = document.createElement("p");
      todoElement.textContent = todo;
      projectElement.appendChild(todoElement);
    });

    projectsContainer.appendChild(projectElement);
  });
}

export default function Projects() {
  const projectWrapper = document.createElement("div");
  projectWrapper.classList.add("project-wrapper");
  projectWrapper.id = "project-wrapper";

  const newProject = document.createElement("input");
  newProject.type = "text";
  newProject.id = "projectName";
  newProject.placeholder = "New Project";
  projectWrapper.appendChild(newProject);

  const newProjectBtn = document.createElement("button");
  newProjectBtn.textContent = "Add new project";
  newProjectBtn.addEventListener("click", () => {
    addProject(`${newProject.value}`);
    newProject.value = "";
  });
  projectWrapper.appendChild(newProjectBtn);

  const projectListWrapper = document.createElement("div");
  projectListWrapper.classList.add("project-list-wrapper");
  projectListWrapper.id = "project-list-wrapper";
  projectWrapper.appendChild(projectListWrapper);

  return projectWrapper;
}
