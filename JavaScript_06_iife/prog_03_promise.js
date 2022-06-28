//-------------Promise----------------

var x = new Promise(function (resolve, reject) {
  var a = "VinayKumarReddy";
  var b = "VinayKumarReddy";
  if (a == b) resolve();
  else reject();
});

x.then((success) => console.log("You gave both names correct vinay")).catch(
  (failure) => console.log("Both names are different vinay")
);
