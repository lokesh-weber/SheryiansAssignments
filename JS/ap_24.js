// Find the Missing Number in a Sequence – Take a list of consecutive numbers (except one missing) and find the missing number. Example: 1, 2, 3, 5 → Missing number is 4.

let userList = [1,2,3,4,5,7]

for(let i = 0 ; i < userList.length-1 ; i++)
{
    if(userList[i+1] - userList[i] > 1)
    {
        console.log("Missing number is",userList[i]+1);
    }
}