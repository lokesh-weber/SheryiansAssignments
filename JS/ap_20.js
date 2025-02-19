// Find First Non-Repeating Character – Ask the user for a word and find the first character that does not repeat. Example: hello → h (since e, l, and o repeat).

let word = "loveleetcode";
let mp = {};
for (let a of s) {
  mp[a] = (mp[a] || 0) + 1;
}

for (let i = 0; i < s.length; i++) {
  if (mp[s[i]] === 1) {
    return i;
  }
}

return -1;
