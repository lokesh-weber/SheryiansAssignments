let name = prompt("Enter your name ");
let time = prompt("Enter current time in 24 hour format ");

function greet(n, t) {
  if (t > 5 && t < 12) {
    console.log(`Good Morning, ${n}`);
  } else if (t >= 12 && t < 17) {
    console.log(`Good Afternoon, ${n}`);
  } else if (t >= 17 && t < 21) {
    console.log(`Good Evening, ${n}`);
  } else {
    console.log(`Good Night, ${n}`);
  }
}
