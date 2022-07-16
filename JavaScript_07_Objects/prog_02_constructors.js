//--------------Constructors------------

//-------------Objects Example -----------
var obj = {
  height: 3,
  width: 7,
  area: function () {
    return this.width * this.height;
  },
};

console.log(obj.area());
obj.diameter = 22;
console.log(obj);

//----------------Constructor function example -------------

function Getstarted(width, height) {
  this.accurecy = "on correct caliculation";
  this.width = width;
  this.height = height;
  this.getFunction = function () {
    return 2 * this.height * this.width;
  };
}

// var result1 = new Getstarted(10, 20);
// console.log(result1.getFunction());
// console.log(result1.accurecy);

var react3 = new Getstarted(40, 30);
console.log(react3);

//----------------Constructor function example -------------

function Getstarted(width, height) {
  this.accurecy = "on correct caliculation";
  this.width = width;
  this.height = height;
  this.getFunction = function () {
    return 2 * this.height * this.width;
  };
}

// var result1 = new Getstarted(10, 20);
// console.log(result1.getFunction());
// console.log(result1.accurecy);

var react3 = new Getstarted(40, 30);
console.log(react3);
