/*
https://leetcode.com/problems/sum-of-variable-length-subarrays/
You are given an integer array nums of size n. For each index i where 0 <= i < n, define a 
subarray
 nums[start ... i] where start = max(0, i - nums[i]).

Return the total sum of all elements from the subarray defined for each index in the array.

 

Example 1:

Input: nums = [2,3,1]

Output: 11

Explanation:

i	Subarray	Sum
0	nums[0] = [2]	2
1	nums[0 ... 1] = [2, 3]	5
2	nums[1 ... 2] = [3, 1]	4
Total Sum	 	11
The total sum is 11. Hence, 11 is the output.

Example 2:

Input: nums = [3,1,1,2]

Output: 13

Explanation:

i	Subarray	Sum
0	nums[0] = [3]	3
1	nums[0 ... 1] = [3, 1]	4
2	nums[1 ... 2] = [1, 1]	2
3	nums[1 ... 3] = [1, 1, 2]	4
Total Sum	 	13
The total sum is 13. Hence, 13 is the output.

 

Constraints:

1 <= n == nums.length <= 100
1 <= nums[i] <= 1000
*/

// SOLUTION 1: O(n^2), brute force
// P: arr of nums, R: sum
function subarraySum(nums) {
    let subarrays = [];
    // loop through nums - i
    for(let i = 0; i < nums.length; i++) {
        let subarr = [];
        // calculate start, subarr: nums[start] thru nums[i]
        const start = Math.max(0, i - nums[i]);
        // for loop starts at start and ends at i - j
        for(let j = start; j <= i; j++) {
            subarr.push(nums[j]);
        };
        subarrays.push(subarr);
    };
    // sum nums in subarray and return
    const sum = subarrays.flat().reduce((a, b) => a + b, 0);
    return sum;
};

console.log(subarraySum([2, 3, 1]), 11);

// in progress answer
// nums arr
/*
const subarraySum = nums => {
    let sum = [];
    // loop through array
    const n = nums.length;
    for(let i = 0; i < n; i++) {
        if(i === 0) {
            sum.push(nums[i])
        } else if(i >= 0 && i < n) {
            const start = Math.max(0, i - nums[i]);
            // create subarray by slicing from nums[start] through nums[i]
            let subarray = nums.slice(nums[start], nums[i+1]);
            console.log(`starting index: ${start}`)
            console.log(`Subarray ${i+1} start: ${nums[start]}\nEnd: ${nums[i]}`);
            console.log(`Subarray: ${subarray}`)
            // add suba rray to sum
            sum.push(subarray);
        } else {
            sum.push(nums[i]);
        };
    };
    return sum
    // add up numbers in sum
    // sum = sum.flat().reduce((a, b) => a + b, 0);
    // return sum;
};

console.log(subarraySum([2, 3, 1]), 11)
*/
