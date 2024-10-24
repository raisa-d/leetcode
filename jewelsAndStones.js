/*
https://leetcode.com/problems/jewels-and-stones/description/
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0

Constraints:
1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.
*/

// SOLUTION 1: O(n) linear
function numJewelsInStones(jewels, stones) {
  const map = {} // map to keep track of jewels
  let count = 0
  // confirm all the jewels - loop
  for(const jewel of jewels) {
    // set property of map[a] to a value of true
    // now when we acces these properties it will be in constant time
    map[jewel] = true 
  }
  // compare all of my stones to see if jewels
  for(const stone of stones) {
    if(map[stone]) {
      count++
    }
  }
  return count
}


// SOLUTION 2: quadratic O(log n)
// 2 strings, 1 "jewels", 1 "stones"
// count how many of the jewels are in the stones 
// return num of stones that are jewels
function numJewelsInStones(jewels, stones) {
  let numJewels = 0;
  // loop through stones
  for (let stone of stones) {
    // if the jewels has the stone
    if(jewels.indexOf(stone) !== -1) {
      numJewels += 1
    }
  }
  return numJewels
}

// examples
numJewelsInStones('aA', 'aAAbbbb') // 3
numJewelsInStones('z', 'ZZ') // 0
