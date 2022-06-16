// Callback function :

// A callback is a function that is to be executed after another function has finished executing - hence the name "callback"

function google(v, adobe) {
  return v + adobe();
}

function apple() {
  return 10;
}

console.log(google(5, apple));
