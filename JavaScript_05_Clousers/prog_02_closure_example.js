// Definition : A closure is an inner function which has access to the outer function variables, in
// addition to its own varaibles and global variables.

function addNumber(numberOne, numberTwo) {
  var result = "Result is ";
  function cal(numberThree) {
    return result + (numberOne + numberTwo + numberThree);
  }
  return cal;
}

const addResult = addNumber(1, 2)(3);
console.log(addResult);
