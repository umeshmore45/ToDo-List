export const taskConstractor = function (description) {
  this.description = description;
  this.id = faker.random.uuid();
  this.date = Date.now();
};
