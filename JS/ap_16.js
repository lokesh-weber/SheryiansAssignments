// Sum of Digits – Take a number from the user and print the sum of its digits. (Example: 123 → 1+2+3 = 6).

let num = 1239
let sum = 0
while(num > 0)
{
    let ld = num%10
    sum = sum + ld
    num = Math.floor(num/10)
}
console.log(sum);
