// Reverse Without String Methods – Ask the user for a number and reverse it without using .split(), .reverse(), or .join().

let str = "lokesh"
let revStr = ""
for(let i = str.length-1; i >= 0 ; i--)
{
    revStr += str[i]
}
console.log(revStr);
