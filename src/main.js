import { formSubmission } from "./helper/formsubmission.js";
import { showLocal } from "./compontes/localdatashow.js";
import { removeBefore } from "./helper/removebefor.js";
import { data } from "./compontes/local.js";

window.onload = () => {
  document.forms.userInput.addEventListener("submit", formSubmission);
  const hamburger = document.getElementById("hamburger");
  const navUL = document.getElementById("nav-ul");
  hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");
  });
  document.getElementById("li").appendChild(showLocal(data));
};
