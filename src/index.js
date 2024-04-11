import "./style.css";
import Todo from "./todoItem.js";
import Project from "./project.js";

const newProjectWrapper = document.createElement("div");
newProjectWrapper.classList.add("new-project");
document.body.appendChild(newProjectWrapper);

const newProject = document.createElement("input");
newProject.type = "text";
newProject.id = "projectName";
newProject.placeholder = "New Project";
newProjectWrapper.appendChild(newProject);

const newProjectBtn = document.createElement("button");
newProjectBtn.textContent = "Add new project";
newProjectBtn.addEventListener("click", createProject);
newProjectWrapper.appendChild(newProjectBtn);

function createProject() {
  const project = new Project(`${newProject.value}`);
  console.log(project);
  newProject.value = "";
}
