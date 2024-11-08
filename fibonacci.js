/*
https://leetcode.com/problems/fib-number/
The fib numbers, commonly denoted F(n) form a sequence, called the fib sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
*/

// SOLUTION 1: linear complexity
// number n -> return last num in seq
// F(n) = F(n - 1) + F(n - 2), for n > 1.
function fib(n) {
    // arr to keep track of sequence
    let seq = [0, 1];
    
    // start loop at 2 because we already have 2 numbers in the sequence so we'll start at index 2. i keeps track of how many numbers we generated
    for(let i = 2; i <= n; i++) {
        let a = seq[i-1]
        let b = seq[i-2]
        seq.push(a + b)
    }
    return seq[n]
}

// fib ->  0, 1, 1, 2, 3, 5, 8, 13. is 0 the first num in the sequence? it's the 0th
// want to generate that many nums in the fib sequence, starts at 0 
console.log(fib(3)) // 2
console.log(fib(4)) // 3
console.log(fib(5)) // 5
console.log(fib(8))// 21

// SOLUTION 2: use recursion
// F(n) = F(n - 1) + F(n - 2), for n > 1.
function fib2(n) {
    // base case (less than 2)
    if(n < 2) {
        return n;
    } 
    return fib(n - 1) + fib(n - 2)
}

fib2(5) // 5 bc 0, 1, 1, 2, 3, 5