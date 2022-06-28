// A function which is immediatly defined after its defined is called IIFE.

// A function declaration defines a function and does not require  a variable to be assigned to it.
// It simply declares a function, and doesn't itself return a value.

//(Immediatly invoked function expression)

const name = "scope";
(function x() {
  const lastname = "seelam";
  //const name = "Vinay Kumar Reddy";
  console.log(`say hi ${name}`);
})();
//console.log(lastname);

//Regular Method

x = function (nationality) {
  var nationality = "UK";
  console.log(`My nationality is ${nationality}`);
};

x();
//console.log(nationality);

// syntax : (function () {})()

(function (nationality) {
  console.log(`Hi I am from ${nationality}`);
})("USA");
