// Example 1: The filter function filters all the numeric values in the array greater than 5

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result1 = numbers.filter((x) => x > 5);
console.log(result1);

//Example 2: The filter function filters all the words in the array which have length greater than 5

var words = [
  "hi",
  "hello",
  "hey",
  "apple",
  "watermelon",
  "lemon",
  "javascript",
];

var result2 = words.filter((word) => word.length > 5);
console.log(result2);

//Example 3: The filter function filters all invalid id of users from the array.
var jsonarr = [
  {
    id: 1,
    name: "joe",
  },
  {
    id: -19,
    name: "john",
  },
  {
    id: 20,
    name: "james",
  },
  {
    id: 25,
    name: "jack",
  },
  {
    id: -10,
    name: "joseph",
  },
  {
    id: "not a number",
    name: "jimmy",
  },
  {
    id: null,
    name: "jeff",
  },
];
var result3 = jsonarr.filter((positve) => positve.id > 0);
console.log(result3);
