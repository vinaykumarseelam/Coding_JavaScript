//---------------------------------------------example-5
function count() {
  var counts = 0;

  return function () {
    // count += 1;
    //return (count = count + 1);
    return (counts += 1);
    //return count;
  };
}

var IncrementCount = count()();
console.log(IncrementCount);
