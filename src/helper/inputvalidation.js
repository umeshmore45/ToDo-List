export const isStringEmpty = (str) => {
  if (str.length) {
    return true;
  } else {
    window.alert("Add Some Task");
    return false;
  }
};

export const isMarkUp = (str) => {
  var letters = /^[a-zA-Z]+$/;
  if (str.match(letters)) {
    return true;
  } else {
    document.forms.userInput.taskInput.value = "";
    window.alert("Add Some Task");
    return false;
  }
};

export const inputValidation = (str) => {
  isStringEmpty(str);
  isMarkUp(str);

  return isStringEmpty(str) && isMarkUp(str);
};
