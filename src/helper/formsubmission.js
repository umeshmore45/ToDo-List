import { taskConstractor } from "./taskConstractor.js";
import { Task } from "../compontes/task.js";
import { ToDoData } from "../todolistdata.js";
import { inputValidation } from "./inputvalidation.js";
export const formSubmission = (event) => {
  event.preventDefault();
  const taskObject = new taskConstractor(
    document.forms.userInput.taskInput.value
  );

  localStorage.setItem("task", JSON.stringify(taskObject));

  let local = JSON.parse(localStorage.getItem("task"));

  //console.log(local.id);

  let taskValue = document.forms.userInput.taskInput.value;

  if (inputValidation(taskValue)) {
    ToDoData.push(taskObject);
    document.getElementById("userList").appendChild(Task(local));
    //console.log(Task(local));
    document.forms.userInput.taskInput.value = "";
  }
};
