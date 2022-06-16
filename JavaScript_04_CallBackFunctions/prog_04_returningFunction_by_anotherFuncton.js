//Returning function by another function........

var names = function vinaykumar() {
  return function seelam() {
    console.log("We are calling 'Seelam' function");
    return function reddy() {
      //return "We are calling 'reddy' function";
      console.log("We are calling 'reddy' function");
    };
  };
};

//console.log(names()()());
//names()();
//names()()();

var variable = names();
variable()();
