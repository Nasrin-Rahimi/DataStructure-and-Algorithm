/**
 * Given an array of positive integers nums and a positive integer target, return the minimal 
 * length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum 
 * is greater than or equal to target. If there is no such subarray, return 0 instead.
 * 
 * Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Input: target = 4, nums = [1,4,4]
Output: 1

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

Input: target = 11, nums = [1,2,3,4,5]
Output: 3
 */

/**
 * Approach #1 Brute force [Time Limit Exceeded]
 * Find the sum for all the possible subarrays and update the ans as and when we get a better 
 * subarray that fulfill the requirements (sum ≥ s).

Initialize ans = INT_MAX
Iterate the array from left to right using i:
    Iterate from the current element to the end of vector using j:
    Find the sum of elements from index i to j
    If sum is greater then s:
        Update ans = min(ans,(j−i+1))
    Start the next ith iteration, since, we got the smallest subarray with sum ≥ s starting 
    from the current index.
 */

    var minSubArrayLen = function(target, nums) {
        let len = nums.length;
        let ans = Number.MAX_SAFE_INTEGER;
        
        for(let i = 0; i < len; i++) {
            for(let j = i; j < len; j++) {
                let sum = 0;
                for(let k = i; k <= j; k++) {
                    sum += nums[k];
                }
                if(sum >= target) {
                    //Found the smallest subarray with sum>=s starting with index i, hence  move to next index
                    ans = Math.min(ans, (j - i + 1));
                    break;
                }
            }
        }
        
        return (ans != Number.MAX_SAFE_INTEGER) ? ans : 0;
    };
    
/**
* Time complexity: O(n^3).

For each element of array, we find all the subarrays starting from that index which is O(n2).
Time complexity to find the sum of each subarray is O(n).
Thus, the total time complexity : O(n2 ∗ n) = O(n3)
Space complexity: O(1) extra space.
*/