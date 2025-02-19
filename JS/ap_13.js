// Swapping without third variable

let num1 = 23
let num2 = 44

// num1 = num1 ^ num2
// num2 = num1 ^ num2
// num1 = num1 ^ num2

num1 = num1 + num2
num2 = num1 - num2
num1 = num1 - num2

console.log(num1 , num2);
