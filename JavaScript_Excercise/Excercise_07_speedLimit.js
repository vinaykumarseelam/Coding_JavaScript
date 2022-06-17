function checkSpeed(speed) {
  var currentSpeed = speed - 70;
  if (speed <= 74) {
    console.log("ok");
  } else if (currentSpeed < 60) {
    var points = Math.floor(currentSpeed / 5);
    console.log("Points " + points);
  } else {
    console.log("Suspended");
  }
}

checkSpeed(150);
