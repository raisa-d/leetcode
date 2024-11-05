/*
Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

describe("Two Sum", () => {
 it("Should implement two sum", () => {
  assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
 });
});
*/

// SOLUTION 1
// arr & sum -> arr of pairs that add up to sum
function twoSum(arr, sum) {
    // arr for pairs, arr for used numbers
    let pairs = [], usedNums = [];
    // loop thru arr, see if num + anything in usednums = sum
    for(const num of arr) {
        let numNeeded = sum - num;
        // if usedNums has the number we need
        if(usedNums.indexOf(numNeeded) !== -1) {
            pairs.push([num, numNeeded])
        }
        // add current num to usedNums
        usedNums.push(num)
    }
    return pairs
}

// SOLUTION 2: use hashmap
function twoSum2(arr, sum) {
    // pairs arr
    const pairs = [];
    // hashmap obj
    const usedNums = {};
    // loop
    for(const currentNum of arr) {
        const difference = sum - currentNum
        // if the difference exists in object, we have a pair
        if(usedNums[difference]) {
            pairs.push([currentNum, difference])
        } 
        usedNums[currentNum] = true;
    }
    return pairs
}

console.log(twoSum([1, 2, 2, 3, 4], 4)) // [[2, 2], [3, 1]]
console.log(twoSum([1, 2, 2, 3, 4], 5)) // [[1, 4], [2, 3]]