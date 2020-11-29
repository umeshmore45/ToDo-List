export const isStringEmpty = (str) => {
  if (str.length) {
    return true;
  } else {
    window.alert("Add Some Task");
    return false;
  }
  //console.log(str);
};

export const isMarkUp = (str) => {
  //   if (str.matchAll()) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  return true;
};

export const inputValidation = (str) => {
  isStringEmpty(str);
  isMarkUp(str);

  return isStringEmpty(str) && isMarkUp(str);
};
