// Passing function as a argument

function sayHello() {
  return "Hello Everyone";
}

function greeting(google, apple) {
  console.log(google() + apple);
}
greeting(sayHello, " Good Morning!!");
