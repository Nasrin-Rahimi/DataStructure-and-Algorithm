/***
 * You are given an integer array nums where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every 
other number in the array. If it is, return the index of the largest element, or return -1 
otherwise.

Input: nums = [3,6,1,0]
Output: 1
Explanation: 6 is the largest integer.
For every other number in the array x, 6 is at least twice as big as x.
The index of value 6 is 1, so we return 1.

Input: nums = [1,2,3,4]
Output: -1
Explanation: 4 is less than twice the value of 3, so we return -1.

Input: nums = [1]
Output: 0
Explanation: 1 is trivially at least twice the value as any other number because 
there are no other numbers.
 */
let dominantIndex = function(nums) {
    let max = 0, maxIndex;

    for(let i = 0 ; i < nums.length; i++) {
        if(nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
    }

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != max && max < nums[i] * 2) {
            return -1;
        }
    }

    return maxIndex;


}

/**
 * time complexity = O(n)
 * space complexity = O(1)
 */
