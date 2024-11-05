/*
https://leetcode.com/problems/two-sum/description/ 
Given an array of integers (nums) and an integer (target), return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

// linear complexity

// arr of int, target -> arr of the 2 indices that make up the target
const twoSum = function(nums, target) {
    // declare pairs arr, indexPairs arr 
    let pairs = [], indexPairs = [];
    // hashmap of which nums we have already seen in arr
    let usedNums = {};
    // loop thru nums
    for(const currentNum of nums) {
        numberNeeded = target - currentNum
        // if numNeeded is in hashmap
        if(usedNums[numberNeeded]) {
            // add pair of nums to pairs
            pairs.push(numberNeeded, currentNum);
        }
        // add currentNum to hashmap and frequency
        usedNums[currentNum] = usedNums[currentNum] + 1 || 1
    }
    // map pairs to indexOf each num in pairs arr
    indexPairs = pairs.map(num => nums.indexOf(num))
    // if both indices are the same, use indexOf & lastindexOf instead 
    if(indexPairs[0] === indexPairs[1]) {
        indexPairs = [nums.indexOf(pairs[0]), nums.lastIndexOf(pairs[1])]
    }
    return indexPairs
};

console.log(twoSum([2,7,11,15], 9)) // [0, 1]
console.log(twoSum([-1,-2,-3,-4,-5], -8)) // [2, 4]
console.log(twoSum([5, 5, 2, 1], 10)) // [0, 1]
console.log(twoSum([2,7,11,15], 9)) // [0, 1]
console.log(twoSum([3, 2, 4], 6)) // [1,2]
console.log(twoSum([1, 2, 7], 8)) // [0, 2]