import { taskConstractor } from "./taskConstractor.js";
import { Task } from "../compontes/task.js";
import { ToDoData } from "../todolistdata.js";
import { inputValidation } from "./inputvalidation.js";
import { isStringEmpty } from "../helper/inputvalidation.js";
import { isMarkUp } from "../helper/inputvalidation.js";

export const formSubmission = (event) => {
  event.preventDefault();
  const taskObject = new taskConstractor(
    document.forms.userInput.taskInput.value
  );

  localStorage.setItem("task", JSON.stringify(taskObject));
  let local = JSON.parse(localStorage.getItem("task"));

  let taskValue = document.forms.userInput.taskInput.value;
  if (isMarkUp(taskValue) && isStringEmpty(taskValue)) {
    ToDoData.push(taskObject);
    document.getElementById("userList").appendChild(Task(taskObject));
    document.forms.userInput.taskInput.value = "";
    localStorage.setItem("data", JSON.stringify(ToDoData));
  }
};
