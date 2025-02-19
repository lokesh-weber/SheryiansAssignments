// Simple Login System – Set a predefined username and password. Ask the user to enter their credentials using prompt(). If correct, print “Login Successful”; otherwise, print “Incorrect username or password.”

const userName = "1233@gmail"
const password = "123342"

const userEnterName = prompt("Enter username ")
const userEnterPass = prompt("Enter password ")

if(userName === userEnterName && userEnterPass === password){
    console.log("Login successful");
}
else{
    console.log("Invalid username or password");
    
}