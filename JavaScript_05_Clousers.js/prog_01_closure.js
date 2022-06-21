//Example 1

function remember() {
  return function (x) {
    return x;
  };
}

const x = remember()(7);
console.log(x);

//Example 2

function vinay() {
  let name = "vinay";
  function kumar() {
    let name = "kumar";
    function reddy() {
      let name = "reddy";
      return name;
    }
  }
}

console.log(vinay()());
