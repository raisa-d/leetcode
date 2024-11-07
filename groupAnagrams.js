/*
Given an array of strings strs, group the 
anagrams
 together. You can return the answer in any order.

 

Example 1:

Input: strs = ['eat','tea','tan','ate','nat','bat']

Output: [['bat'],['nat','tan'],['ate','eat','tea']]

Explanation:

There is no string in strs that can be rearranged to form 'bat'.
The strings 'nat' and 'tan' are anagrams as they can be rearranged to form each other.
The strings 'ate', 'eat', and 'tea' are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = ['']

Output: [['']]

Example 3:

Input: strs = ['a']

Output: [['a']]

 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

// arr of strings -> arr of arrays of anagrams
const groupAnagrams = function(arr) {
    // hash of arr of letters in each anagram
    let anagrams = {};
    // add property to obj of the current word split and sorted (so it only appears once) = []
    for(const word of arr) {
        let sortedSplitWord = word.split('').sort()
        anagrams[sortedSplitWord] = []
    };
    // arr - loop
    for(const word of arr) {
    // if all the letters in the current word match all the letters in any of the obj property, add that word to an array as the value of that obj property
    let splitSorted = word.split('').sort()
    if (anagrams[splitSorted]) {
        anagrams[splitSorted].push(word)
        }
    ;}
    let res = []
    // obj - loop to create array of all the values/subarrays & return
    for(const key in anagrams) {
        res.push(anagrams[key])
    }
    return res
};

console.log(groupAnagrams(['eat','tea','tan','ate','nat','bat'])) // [['eat', 'tea', 'ate'], ['tan, nat'], ['bat']]

console.log(groupAnagrams([''])) // [['']]

console.log(groupAnagrams(['ear', 'are', 'red'])) // [['ear', 'are'], ['red']]