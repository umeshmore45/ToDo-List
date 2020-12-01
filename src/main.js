import { formSubmission } from "./helper/formsubmission.js";
import { showLocal } from "./compontes/localdatashow.js";
// import { local } from "./compontes/local.js";
import { data } from "./compontes/local.js";
import { removeBefore } from "./helper/removebefor.js";
window.onload = () => {
  document.forms.userInput.addEventListener("submit", formSubmission);
  // document.forms.userInput.li.getLocal();
  //let li = getLocal();
  const f1 = showLocal(data);
  console.log(f1);
  document.getElementById("li").appendChild(showLocal(data));

  // document.getElementById("li").innerHTML = local.description;
  // li.addEventListener("click", () => {
  //   li.style.textDecoration = "line-through";
  //   li.style.color = "#00000066";
  // });

  // const button = document.createElement("button");
  // button.addEventListener("click", () => {
  //   localStorage.removeItem("task");
  // });
  // document.getElementById("li").appendchild(button);
};
