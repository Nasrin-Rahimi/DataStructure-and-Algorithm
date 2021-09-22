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
For larger n maybe we get stack overflow error.
 */

/**
 * Approach 2: Recursion with Memoization
 * 
 * In the previous approach we are redundantly calculating the result for every step. 
 * Instead, we can store the result at each step in memomemo array and directly returning 
 * the result from the memo array whenever that function is called again.

In this way we are pruning recursion tree with the help of memomemo array and reducing 
the size of recursion tree upto nn.
 * 
 */

let climbStairs2 = function(n) {
    let memo = new Array(n + 1);
    return recursionHelper2(0, n)
}

let recursionHelper2 = function(i, n, memo){
    if(i > n) {
        return 0;
    }
    if(i == n) {
        return 1;
    }
    if(memo[i] > 0) {
        return memo[i];
    }
    memo[i] = recursionHelper2(i + 1, n, memo) + recursionHelper2(i + 2, n, memo);
    return memo[i];
}

/**
 * Time complexity : O(n). Size of recursion tree can go upto n.

Space complexity : O(n). The depth of recursion tree can go upto n.
 */

/**
 * Approach 3: Dynamic Programming
 * As we can see this problem can be broken into subproblems, and it contains the optimal 
 * substructure property i.e. its optimal solution can be constructed efficiently from 
 * optimal solutions of its subproblems, we can use dynamic programming to solve this problem.

One can reach i^{th}
  step in one of the two ways:

Taking a single step from (i−1)th
  step.

Taking a step of 22 from (i−2)th
  step.

So, the total number of ways to reach ith
  is equal to sum of ways of reaching (i−1)th step and ways of reaching (i−2) th step.

Let dp[i] denotes the number of ways to reach on ithstep:

dp[i]=dp[i-1]+dp[i-2]
*/

let climbStairs3 = function(n) {
    if(n == 1) {
        return 1;
    }

    let dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;

    for(let i = 3; i < n + 1; i++){ 
        dp[i] = dp[i - 1] + dp[i -2];
    }

    return db[n];
}

/**
 * Time complexity : O(n). Single loop upto n.

Space complexity : O(n). dp array of size n is used.
 */