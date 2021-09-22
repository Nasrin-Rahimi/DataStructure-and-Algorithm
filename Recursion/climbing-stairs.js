/**
 * You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb 
to the top?

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 
 */

/**
 * Approach 1: Brute Force
Algorithm

In this brute force approach we take all possible step combinations i.e. 1 and 2, at every 
step. At every step we are calling the function climbStairs for step 1 and 2, and return 
the sum of returned values of both functions.

climbStairs(i,n) = climbStairs(i + 1, n) + climbStairs(i + 2, n)

where i defines the current step and n defines the destination step.
 */

let climbStairs = function(n) {
    return recursionHelper(0, n);
}

let recursionHelper = function(i, n) {
    if(i > n) {
        return 0;
    }
    if(i == n) {
        return 1;
    }
    return recursionHelper(i + 1, n) + recursionHelper(i + 2, n);
}

/**
 * Time complexity : O(2^n) , Size of recursion tree will be 2^n 

For n = 3 , the size of recusrion tree is 9.

Space complexity : O(n). The depth of the recursion tree can go upto n.

 */