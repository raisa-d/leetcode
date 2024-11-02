/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

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

// number n -> return last num in seq
// F(n) = F(n - 1) + F(n - 2), for n > 1.
function fibonacci(num) {
    // arr to keep track of sequence
    let seq = [0, 1];
    
    // start loop at 2 because we already have 2 numbers in the sequence so we'll start at index 2. i keeps track of how many numbers we generated
    for(let i = 2; i <= num; i++) {
        let a = seq[i-1]
        let b = seq[i-2]
        seq.push(a + b)
    }
    return seq[num]
}

// fib ->  0, 1, 1, 2, 3, 5, 8, 13. is 0 the first num in the sequence? it's the 0th
// want to generate that many nums in the fib sequence, starts at 0 
console.log(fibonacci(3)) // 2
console.log(fibonacci(4)) // 3
console.log(fibonacci(5)) // 5
console.log(fibonacci(8))// 21

// recursive countdown function
function countDown(n) {
    if(n === 0) {
        console.log('achieved our base case, donezo')
    } else {
        console.log(n)
        countDown(n-1)
    }
}

countDown(3)