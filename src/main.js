import { formSubmission } from "./helper/formsubmission.js";
import { local } from "./compontes/local.js";

window.onload = () => {
  // document.forms.userInput.li.getLocal();
  //let li = getLocal();
  document.getElementById("li").innerHTML = local.description;
  li.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
    li.style.color = "#00000066";
    // console.log("hello");
  });

  // const button = document.createElement("button");
  // button.addEventListener("click", () => {
  //   localStorage.removeItem("task");
  // });
  // document.getElementById("li").appendchild(button);

  document.forms.userInput.addEventListener("submit", formSubmission);
};
