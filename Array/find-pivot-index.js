/**
 * Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the 
index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no 
elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
 */

let pivotIndex = function(nums) {
    let len = nums.length;
    if(len == 0) {
        return -1;
    }
    if(len == 1) {
        return 0;
    }
    for(let i = 0; i < len; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for(let l = 0; l < i; l++) {
            leftSum += nums[l];
        }

        for(let r = i + 1; r < len; r++) {
            rightSum += nums[r];
        }

        if(leftSum == rightSum) {
            return i;
        }
    }
    return -1;
}

/**
 * Approach 2: Prefix Sum [Accepted]
 * We need to quickly compute the sum of values to the left and the right of every index.

Let's say we knew S as the sum of the numbers, and we are at index i. If we knew the sum 
of numbers leftsum that are to the left of index i, then the other sum to the right of 
the index would just be S - nums[i] - leftsum.

As such, we only need to know about leftsum to check whether an index is a pivot index 
in constant time. Let's do that: as we iterate through candidate indexes i, we will maintain 
the correct value of leftsum.
 */

let pivotIndex2 = function(nums) {
    let sum = 0, leftSum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(leftSum == sum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i]
    }
    
    return -1;
 
}

/**
 * Time Complexity: O(N), where NN is the length of nums.

Space Complexity: O(1), the space used by leftsum and S.


 */