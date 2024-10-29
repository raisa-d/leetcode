/*
Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});
*/

// this solution has linear complexity
// str of characters -> char that appears most often
const maxTimes = str => {
    // str to lowercase
    str = str.toLowerCase();
    const characters = {};
    // loop thru string - create characters object of counts
    for(let char of str) {
      if(characters[char]) {
        characters[char]++
      } else {
        characters[char] = 1
      }
    };

    // set variable for max character and number
    let maxChar = null;
    let maxNum = 0;
    
    // loop through object
    for(let char in characters) {
        // if the value is more than the max num set it as the new max num and character
        if(characters[char] > maxNum) {
            maxNum = characters[char];
            maxChar = char;
        };
    }
    return maxChar
  }
  
  console.log(maxTimes('Hello world')) // 'l'
  console.log(maxTimes('Hey there delilah')) // 'e'

// SOLUTION 2: same as 1 but instead of conditional do charMap[char] = charMap[char] + 1 || 1, declare all variables at the top
const maxTimes = str => {
  // declare map, maxCount, maxChar
  let charMap = {}, maxCount = 0, maxChar = null;
  // map for chars in string and freuency
  for(const char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }
  
  for(const char in charMap) {
    if(charMap[char] > maxCount) {
      maxCount = charMap[char];
      maxChar = char;
    }
  }
  // loop and find most frequent char
  return maxChar
}
  
  console.log(maxTimes('Hello world')) // 'l'
  console.log(maxTimes('Hey there delilah')) // 'e'
