import { deleteTask } from "./deletetask.js";
import { removeBefore } from "../helper/removebefor.js";
export const Task = (taskObject) => {
  const li = document.createElement("li");
  li.id = taskObject.id;
  li.classList.add("li-tag");
  li.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
    li.style.color = "#00000066";
  });
  li.innerHTML = taskObject.description; //.strike();
  const button = document.createElement("button");
  button.innerHTML = "Delete";
  button.addEventListener("click", () => {
    deleteTask(taskObject.id);
    removeBefore(taskObject.id);
  });
  li.append(button);
  return li;
};
