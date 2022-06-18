function sum(limit) {
  //   var threeMultiples = [];
  //   var fiveMultiples = [];
  //   var threeCal = 0;
  //   var fiveCal = 0;
  //   var sum = 0;
  //   var fiveSum = 0;
  //   var result = 0;
  //   for (i = 1; threeCal <= limit; i++) {
  //     threeCal = 3 * i;
  //     if (threeCal <= limit) threeMultiples.push(threeCal);
  //   }
  //   for (i = 1; fiveCal < limit; i++) {
  //     fiveCal = 5 * i;
  //     if (fiveCal <= limit) fiveMultiples.push(fiveCal);
  //   }
  //   for (let key of threeMultiples) {
  //     sum += key;
  //   }
  //   for (let key of fiveMultiples) {
  //     fiveSum += key;
  //   }
  //   result = sum + fiveSum;
  //   console.log(result);

  var sum = 0;
  for (i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sum(12));
