/**
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.

Example 1:

Input: nums = [1,2,0]
Output: 3
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1

Constraints:

1 <= nums.length <= 5 * 105
-2^31 <= nums[i] <= 2^31 - 1
 
 */
/**
When I see the given input is an array of numbers and we are looking for the smallest or 
biggest integer, I’d try to sort the array first. Today we are only looking for positive 
smallest number, I wouldn’t bother using .sort(). We can use object to sort our positive 
numbers.
 */

var firstMissingPositive = function(nums) {
    // if input: [1,2,0]
    // eliminate the edge case 
    if (nums.length < 1) {
        return 1;
    };
    
    // we can use hash/obj to sort the numbers array
    let positiveNumbers = {}; 
    
    // we will take off negative numbers when we create myHash
    for (let num of nums) {
        if (num > 0) positiveNumbers[num] = true
    }

    // myHash = { '0': true, '1': true, '2': true }
    
    // 1 is first positive integer
    let missing = 1; 
    
    for (missing; missing <= nums.length; missing++) {
        
     // if the [missing key] doesn't exit, then we return the number
        if (!positiveNumbers[missing]) {
            return missing;
        };
        // else we increment 1 then keep looping
    };
    
    // otherwise return 1 
    return missing; 
};

/**
This problem is pretty good to practice with using object sorting the positive numbers and 
look up stuff.

Time complexity : O(n), space : O(n)
 */
