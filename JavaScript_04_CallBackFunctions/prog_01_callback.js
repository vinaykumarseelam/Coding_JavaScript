// Callback function :

// A callback is a function that is to be executed after another function has finished executing - hence the name "callback"

// A function calling another function is called call back function.
function google(v, adobe) {
  return v + adobe();
}

function apple() {
  return 10;
}

console.log(google(5, apple));
