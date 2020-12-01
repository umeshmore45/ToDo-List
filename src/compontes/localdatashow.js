import { taskRemoveLocal } from "../helper/tasklocalremove.js";
export const showLocal = (data) => {
  const ul = document.createElement("ul");

  data.forEach((element) => {
    let li = document.createElement("li");
    li.classList.add("li-items1");
    li.innerHTML = element.description;
    li.addEventListener("click", () => {
      li.style.textDecoration = "line-through";
      li.style.color = "#00000066";
    });
    let button = document.createElement("button");
    button.classList.add("button-local");
    button.innerHTML = "Delete";
    button.addEventListener("click", () => {
      taskRemoveLocal();
    });
    li.append(button);
    ul.appendChild(li);
  });
  return ul;
};
