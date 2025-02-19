// Convert Number to Words – Take a single-digit number and print it in words (Example: 1 → One, 2 → Two).

const numsInWord = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];

for (let i = 0; i < numsInWord.length; i++) {
  console.log(`${i} --> ${numsInWord[i]}`);
}
