/**
 * Given an array of integers nums and an integer target, return indices of the two numbers 
 * such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same 
element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]
 */

/**
 * 
Approch 1:
The brute force approach is simple. Loop through each element x and find if there is another 
value that equals to target - x.
 */
let twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++){ 
            //or nums[j] = target - nums[i]
            if(nums[i] + nums[j] == target) {
                return[i, j];
            }
        }
    }
    return null;
}

/**
 * Time complexity: O(n^2)
 For each element, we try to find its complement by looping through the rest of the array 
 which takes O(n) time. Therefore, the time complexity is O(n^2)

Space complexity: O(1). The space required does not depend on the size of the input array, so 
only constant space is used.


 */