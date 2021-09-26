/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

 */

/**
 * Approach : Using Extra Array
 * 
 * We use an extra array in which we place every element of the array at its correct position i.e. 
 * the number at index ii in the original array is placed at the index (i + k) % length of array.
 * Then, we copy the new array to the original one.
 */

let rotate = function(nums, k){
    let len = nums.length;
    let newNums = new Array(len);

    for(let i = 0; i < len; i++) {
        newNums[(i + k) % len] = nums[i]; 
    }

    for(let i = 0; i < len; i++ {
        nums[i] = newNums[i];
    }
}

/**
 * Time complexity: O(n). One pass is used to put the numbers in the new array. And another 
 * pass to copy the new array to the original one.

Space complexity: O(n). Another array of the same size is used.
 */