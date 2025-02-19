// Nested Condition Challenge – Ask the user for their age and salary. Print a message based on conditions:

// If age is below 18, print “Not eligible”
// If age is 18 or more but salary is less than ₹20,000, print “Low Salary”

// If salary is ₹50,000 or more, print “High Salary”. Otherwise, print “Medium Salary”

let age = prompt("Enter your age ")
let salary = prompt("Enter your salary")

if(age < 18)
{
    console.log("Not eligible"); 
}
else if(age >= 18 )
{
    if(salary < 20000)
    {
        console.log("Low salary");
    }
    else if(salary >= 50000){
        console.log("High salary");
    }
    else{
        console.log("Medium salary");
    }
}