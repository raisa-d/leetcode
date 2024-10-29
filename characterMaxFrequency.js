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
