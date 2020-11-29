//import { faker } from "faker";

export const taskConstractor = function (description) {
  this.description = description;
  this.id = faker.random.uuid();
};
