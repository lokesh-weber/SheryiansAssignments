// Even Digit Counter – Take a number from the user and count how many even digits it has.

let num = 34241;
let evenDig = 0;
while (num > 0) {
  let dig = num % 10;
  if (dig%2 === 0) {
    evenDig++;
  }
  num = Math.floor(num/10);
}
console.log(evenDig);
