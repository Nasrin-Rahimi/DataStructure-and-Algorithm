/**
 * Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
 * 
 * Input: x = 2.00000, n = 10
Output: 1024.00000

Input: x = 2.10000, n = 3
Output: 9.26100

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
 */

/**
 * 
Approach 1: Brute Force
Intuition

Just simulate the process, multiply x for n times.

If n < 0, we can substitute x, n with 1/x, -n to make sure n≥0. This restriction can 
simplify our further discussion.

But we need to take care of the corner cases, especially different range limits for 
negative and positive integers.

Algorithm

We can use a straightforward loop to compute the result.
 */

let myPow = function(x, n) {
    if(n < 0) {
        n = -n;
        x = 1 / x;
    }

    let ans = 1;
    for(let i = 0; i < n; i++) {
        ans = ans * x;
    }
    return ans;
};

/**
 * Time complexity : O(n). We will multiply x for n times.

Space complexity : O(1). We only need one variable to store the final product of x.
 */

/**
 * Approach 2: Fast Power Algorithm Recursive
Intuition

Assuming we have got the result of x ^ n, how can we get x ^ 2∗n? Obviously we do not need 
to multiply x for another n times. Using the formula (x ^ n) ^ 2 = x ^ 2n, we can get x ^ 2n
at the cost of only one computation. Using this optimization, we can reduce the time 
complexity of our algorithm.

We call this method "Fast Power", because we only need at most O(logn) computations to get
x ^ n
 .
 */

 var myPow = function(x, n) {
    if(n < 0) {
        x = 1 / x;
        n = -n;
    }
       
       return fastPow(x, n);
   };
   
   let fastPow = function(x, n) {
      if( n == 0) {
          return 1;
      }
       let half = fastPow(x, parseInt(n / 2));
       if(n % 2 == 0) {
           return half * half; // n is even
       } else {
           return half * half * x; // n is odd
       }
   }

/**
 * Time complexity : O(logn). Each time we apply the formula (x ^ n) ^ 2 = x ^ 2∗n
 , n is reduced by half. Thus we need at most O(logn) computations to get the result.

 Space complexity : O(logn). For each computation, we need to store the result of x ^ n/2
 . We need to do the computation for O(logn) times, so the space complexity is O(logn).

 */

 /**
  * Approach 3: Fast Power Algorithm Iterative
  */