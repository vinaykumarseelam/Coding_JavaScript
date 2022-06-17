function fizzbuzz(number) {
  var numberType = typeof number;
  if (numberType == "number") {
    if (number % 3 == 0 && number % 5 == 0) {
      return "FizzBuzz";
    } else if (number % 3 == 0) {
      return "Fizz";
    } else if (number % 5 == 0) {
      return "Buzz";
    } else {
      return number;
    }
  } else {
    return NaN;
  }
}

var result = fizzbuzz("15");
console.log(result);
