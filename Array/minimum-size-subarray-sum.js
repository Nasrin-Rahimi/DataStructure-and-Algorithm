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

/**
 * Approach #2 A better brute force [Accepted]
 * In Approach #1, you may notice that the sum is calculated for every surarray in O(n) time. 
 * But, we could easily find the sum in O(1) time by storing the cumulative sum from the 
 * beginning(Memoization). After we have stored the cumulative sum in sums, we could easily 
 * find the sum of any subarray from i to j.

 */

 let minSubArrayLen = function(target, nums) {
    let len = nums.length;
    let ans = Number.MAX_SAFE_INTEGER;
    let sums = new Array(len);
    sums[0] = nums[0];
    
    for (let i = 1; i < len; i++)
        sums[i] = sums[i - 1] + nums[i];
    
    for(let i = 0; i < len; i++) {
        for(let j = i; j < len; j++) {
            let sum = sums[j] - sums[i] + nums[i];
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
 * Time complexity: O(n^2).

Time complexity to find all the subarrays is O(n^2).
Sum of the subarrays is calculated in O(1) time.
Thus, the total time complexity: O(n^2 * 1) = O(n^2)
Space complexity: O(n) extra space.

Additional O(n) space for sums array than in Approach #1.

 */

/**
 * Approach #3 Using 2 pointers [Accepted]

Until now, we have kept the starting index of subarray fixed, and found the last position. 
Instead, we could move the starting index of the current subarray as soon as we know that no 
better could be done with this index as the starting index. We could keep 2 pointer,one for 
the start and another for the end of the current subarray, and make optimal moves so as to 
keep the sum greater than ss as well as maintain the lowest size possible.
 */

var minSubArrayLen = function(target, nums) {
    let res = Infinity;
    let sum = 0;
    let left = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= target) {
      res = Math.min(res, i + 1 - left);
      sum -= nums[left++];
    }
  }

  return res === Infinity ? 0 : res;

};

/**
 * Time complexity: O(n). Single iteration of O(n).
Each element can be visited atmost twice, once by the right pointer(i) and (atmost)once by 
the left pointer.
Space complexity: O(1) extra space. Only constant space required for left, sum, ans and i.
 */