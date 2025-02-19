// Grade Calculator – Ask the user for their marks (0-100).
// Assign grades based on the range:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F

let marks = 55;
let grade = "";
if (marks < 60) {
  grade += "F";
} else if (marks <= 100 && marks >= 90) {
  grade += "A";
} else if (marks <= 89 && marks >= 80) {
  grade += "B";
} else if (marks <= 79 && marks >= 70) {
  grade += "C";
} else {
  grade += "D";
}

console.log(grade);
