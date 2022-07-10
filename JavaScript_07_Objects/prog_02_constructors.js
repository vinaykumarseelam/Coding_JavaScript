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
