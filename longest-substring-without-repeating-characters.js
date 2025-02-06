/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

// SOLUTION 1: 207 test cases passed
const lengthOfLongestSubstring = str => {
    // longest substring
    let longest = '';
    // current substring
    let current = '';
    // loop thru str
    for(const char of str) {
        // if substring doesn't include the char
        if(!current.includes(char)) {
            // add char to substring
            current += char;
        // else if the substring does have the character
        } else {
            // if current is longer than longest
            if(current.length > longest.length) {
                // reassign longest to current
                longest = current;
                // reset current to empty string
                current = `${char}`;
            };
        };
    };
    return longest.length;
};

// SOLUTION 2: 223 test cases passed
const lengthOfLongestSubstring = str => {
    let longest = '';
    let current = '';
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        if(!current.includes(char)) {
            current += char;
        } else {
            if(current.length > longest.length) {
                longest = current;
                // find where the repeated character is in the current string
                // set current substring to start after that character
                let index = [...current].findIndex(e => e === char);
                current = `${current.slice(index+1)}${char}`;
            };
        };
    };
    console.log(`Longest: ${longest} | Current: ${current}`)
    return longest.length > current.length ? longest.length : current.length;
};

console.log(lengthOfLongestSubstring('dvdf'), 'vdf', 3);
console.log(lengthOfLongestSubstring('anviaj'), 'nviaj', 5);

console.log(lengthOfLongestSubstring('abcabcbb'), 3);
console.log(lengthOfLongestSubstring('bbbbb'), 1);
console.log(lengthOfLongestSubstring('pwwkew'), 3);
