let username = "seelam";

function userName() {
  let username = "Vinay";
  console.log(username);
}
userName();

console.log(username);

//---------------------------------Scope-----------------
var a = "I am global scope"; //global scope
function simple() {
  var a = "I am Parent Scope"; //parent scope
  function c() {
    //var a = "I am child Scope"; //child scope
    console.log(a);
  }
  return c;
}
simple()();
