// Toggle Case – Ask the user for a word and toggle the case of every character. Example: HeLLo → hEllO.

let str = "loKEsH";
let toggleStr = ""
for (let i = 0; i < str.length; i++) 
{
    char = str[i]
    if(char >= 'a' && char <= 'z')
    {
        toggleStr = toggleStr + char.toUpperCase()
    }
    else{
      toggleStr = toggleStr + char.toLowerCase();
    }
}
console.log(toggleStr);





