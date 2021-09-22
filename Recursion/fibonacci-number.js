/**
 * 
 The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
 that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

 F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 */

/**
 * 
 Approch 1 : Recursion
 Algorithm

Check if the provided input value, N, is less than or equal to 1. If true, return N.

Otherwise, the function fib(int N) calls itself, with the result of the 2 previous numbers 
being added to each other, passed in as the argument. This is derived directly from the 
recurrence relation: F_{n} = F_{n-1} + F_{n-2}F

Do this until all numbers have been computed, then return the resulting answer.

 */

let fib = function(n) {
   if(n < 2) {
       return n;
   }
   return fib(n - 1) + fib(n - 2);
}

/**
 * Time complexity: O(2^N). This is the slowest way to solve the Fibonacci Sequence because 
 * it takes exponential time. The amount of operations needed, for each level of recursion, 
 * grows exponentially as the depth approaches N.

Space complexity: O(N). We need space proportional to N to account for the max size of the 
stack, in memory. This stack keeps track of the function calls to fib(N). This has the 
potential to be bad in cases that there isn't enough physical memory to handle the 
increasingly growing stack, leading to a StackOverflowError.
 */