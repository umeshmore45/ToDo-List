// export const getLocal = async () => {
//   let local = await JSON.parse(localStorage.getItem("task"));
//   //   let li = document.createElement("li");
//   //   li.innerHTML = "hello";
//   //   return li;
//   return local;
// };
// export let local = JSON.parse(localStorage.getItem("task"));
import { ToDoData } from "../todolistdata.js";

export let data = JSON.parse(localStorage.getItem("data") || "[]");
