// Character Case Checker – Ask the user for a single character.
// Check if it's uppercase, lowercase, or neither (not a letter).

let char = "A";

if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
  console.log("Character is uppercase");
} else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
  console.log("Character is lowercase");
} else{
    console.log("Not a letter");
}
