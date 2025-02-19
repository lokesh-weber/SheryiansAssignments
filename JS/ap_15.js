// Number Reversal – Take a three-digit number from the user and print its reverse. (Example: 123 → 321).

let num = 123
let revNum = 0
while(num > 0)
{
    let rem = num%10
    revNum = (revNum*10)+rem
    num = Math.floor(num / 10);
}
console.log(revNum);
