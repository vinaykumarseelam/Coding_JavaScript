const marks = [80, 80, 50];

function caliculateGrade(marks) {
  const avg = caliculateAvg(marks);
  if (avg < 60) return "F";
  if (avg < 70) return "D";
  if (avg < 80) return "C";
  if (avg < 90) return "B";
  return "A";
}

function caliculateAvg(marks) {
  var sum = 0;
  marks.forEach((x) => {
    sum += x;
  });
  return sum / marks.length;
}

console.log(caliculateGrade(marks));
