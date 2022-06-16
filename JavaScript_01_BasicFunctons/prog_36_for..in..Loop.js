const person = {
  name: "Vinay",
  age: 20,
  University: "SJSU",
};

for (let key in person) {
  console.log(key, person[key]);
}

const array = ["vinay", "javeed", "reddy"];

for (let something in array) {
  console.log(something, array[something]);
}
