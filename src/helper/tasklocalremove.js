export const taskRemoveLocal = () => {
  localStorage.removeItem("data");
  localStorage.clear("data");
};
