/*
https://leetcode.com/problems/contains-duplicate/
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

function charDuplicates(arr) {
    let map = {}
    // add nums and freq to map object
    for(const num of arr) {
        map[num] = map[num]+1 || 1
    }
    // loop thru map
    // if any value >= 2, true
    for(const num in map) {
        if(map[num] >= 2) {
            return true
            }
        }
    // if all unique return false
    return false
}
