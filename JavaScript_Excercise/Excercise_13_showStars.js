showStars(10);

function showStars(rows) {
  for (i = 1; i <= rows; i++) {
    let pattern = "";
    for (j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
