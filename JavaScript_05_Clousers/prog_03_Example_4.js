function newArray() {
  var firstArray = ["1", "2", "3", "4"];
  function pushArray() {
    return firstArray.push("5");
  }
  return pushArray;
}

var result = newArray()();
console.log(result);
