//Example 1

function remember() {
  return function (x) {
    return x;
  };
}

const x = remember()(7);
console.log(x);

//Example 2
let name = "seelam";
function vinay() {
  let name = "vinay";
  function kumar() {
    let name = "kumar";
    console.log(name);
    // function reddy() {
    //  let name = "future";
    //  console.log(name);
    //}
    // return reddy;
  }
  return kumar;
}
vinay()();
//vinay()()();
