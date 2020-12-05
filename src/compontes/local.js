import { ToDoData } from "../todolistdata.js";

export let data = JSON.parse(localStorage.getItem("data") || "[]");
