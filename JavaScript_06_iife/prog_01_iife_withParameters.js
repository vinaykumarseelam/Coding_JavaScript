// A function which is immediatly defined after its defined is called IIFE.

// A function declaration defines a function and does not require  a variable to be assigned to it.
// It simply declares a function, and doesn't itself return a value.

//(Immediatly invoked function expression)
(function x(name) {
  console.log(`say hi ${name}`);
})("vinay Kumar Reddy");

//Regular Method

x = function (nationality) {
  console.log(`My nationality is ${nationality}`);
};

x("Indian");

// syntax : (function () {})()

(function (nationality) {
  console.log(`Hi I am from ${nationality}`);
})("USA");
