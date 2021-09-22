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

/**
 * Approach 2: Bottom-Up Approach using Tabulation
Improve upon the recursive approach by using iteration, still solving for all of the 
sub-problems and returning the answer for N, using already computed Fibonacci values. 
While using a bottom-up approach, we can iteratively compute and store the values, only 
returning once we reach the result.

Algorithm

If N is less than or equal to 1, return N
Otherwise, iterate through N, storing each computed answer in an array along the way.
Use this array as a reference to the 2 previous numbers to calculate the current Fibonacci 
number.
Once we've reached the last number, return it's Fibonacci number.

 */

let fib2 = function(n) {
    if(n < 2) {
        return n;
    }

    let fibArray = new Array(n + 1);
    fibArray[0] = 0;
    fibArray[1] = 1;

    for(let i = 2; i < n + 1; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i -2];
    }

    return fibArray[n];
}

/**
 * Time complexity: O(N). Each number, starting at 2 up to and including N, is visited, 
 * computed and then stored for O(1) access later on.

Space complexity: O(N). The size of the data structure is proportional to N.
 */

/**
 * Approach 3: Top-Down Approach using Memoization
 * Solve for all of the sub-problems, use memoization to store the pre-computed answers, 
 * then return the answer for NN. We will leverage recursion, but in a smarter way by not 
 * repeating the work to calculate existing values.

Algorithm

At first, create a map with 0 -> 0 and 1 -> 1 pairs.
Call fib(N) function.
At every recursive call of fib(N), if N exists in the map, return the cached value for N.
Otherwise, set the key N, in our mapping, to the value of fib(N - 1) + fib(N - 2) and 
return the computed value.
 */

let map = new Map;
map.set(0, 0);
map.set(1, 1);

let fib3 = function(n) {
    if(map.has(n)) {
        return map.get(n);
    }
    map.set(n, fib3(n - 1) + fib3(n - 2));
    return map.get(n);
}

/**
 * Time complexity: O(N). Each number, starting at 2 up to and including N, is visited, 
 * computed and then stored for O(1) access later on.

Space complexity: O(N). The size of the stack in memory is proportional to N. Also, the 
memoization hash table is used, which occupies O(N) space.

 */

/**
 * Approach 4: Iterative Bottom-Up Approach
Let's get rid of the need to use all of that space and instead use the minimum amount 
of space required. Notice that during each recursive call in the top-down approach and 
each iteration in the bottom-up approach, we only needed to look at the results of 
fib(N-1) and fib(N-2) to determine the result of fib(N). Therefore, we can achieve O(1) 
space complexity by only storing the value of the two previous numbers and updating them 
as we iterate to N.
 */

let fib4 = function(n) {
    if(n < 2) {
        return n;
    }

    let prev1 = 1, prev2 = 0, cur;

    for(let i = 2; i <=  n; i++) {
       cur = prev1 + prev2;
       prev2 = prev1;
       prev1 = cur;
    }

    return cur;
}

/**
 * Time complexity: O(N). Each value from 2 to N is computed once. Thus, the time it takes 
 * to find the answer is directly proportional to N where N is the Fibonacci Number we are 
 * looking to compute.

Space complexity: O(1). This requires 1 unit of space for the integer N and 3 units of 
space to store the computed values (current, prev1, and prev2) for every loop iteration. 
The amount of space used is independent of N, so this approach uses a constant amount of 
space.
 */