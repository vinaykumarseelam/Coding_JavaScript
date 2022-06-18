//All Falsy values are

//undefined
//null
//''
//false
//0
//NaN
const array = [undefined, null, false, 0, NaN, "", 1, 2, "", 3, 4, 5, 6];
console.log(countTruthy(array));

function countTruthy(array) {
  var count = 0;
  array.forEach((x) => {
    x ? (count += 1) : (count = count);
  });
  console.log(count);
}
