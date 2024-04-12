import "./style.css";
import header from "./header.js";
// import Todo from "./todoItem.js";
import Project from "./project.js";

document.body.appendChild(header());

const mainWrapper = document.createElement("div");
mainWrapper.classList.add("main-wrapper");
document.body.appendChild(mainWrapper);

const newProjectWrapper = document.createElement("div");
newProjectWrapper.classList.add("new-project");
mainWrapper.appendChild(newProjectWrapper);
