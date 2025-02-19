// Palindrome Checker – Ask the user for a word. Check if it reads the same forward and backward. Print “Palindrome” or “Not a Palindrome.”

let word = "lokol"

for(let i = 0 ; i < Math.floor(word.length/2) ; i++)
{
    if(word[i] != word[word.length - i - 1])
    {
        return true
    }
}
return false