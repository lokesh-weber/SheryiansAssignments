// Find Second Largest – Take three numbers as input and find the second largest number (without using sort() or Math.max()).

let n1 = 12;
let n2 = 24;
let n3 = 14;
let sl = 0;
if (n1 > n2 && n1 < n3) {
  sl = n1;
} else if (n2 > n1 && n2 < n3) {
  sl = n2;
} else {
  sl = n3;
}

console.log(sl);
