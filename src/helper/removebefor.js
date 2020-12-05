import { ToDoData } from "../todolistdata.js";

export const removeBefore = (id) => {
  ToDoData.forEach((element, index) => {
    if (id == element.id) {
      ToDoData.splice(index, 1);
    }
  });
  localStorage.setItem("data", JSON.stringify(ToDoData));
};
