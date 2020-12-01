export const removeBefore = (id) => {
  for (var i = 0; i < localStorage.length; i++) {
    let data = JSON.parse(localStorage.getItem(localStorage.key(i)));

    if (id === data.id) {
      localStorage.removeItem(localStorage.key(i));
      console.log(id);
      console.log(data.id);
    }
  }
};
