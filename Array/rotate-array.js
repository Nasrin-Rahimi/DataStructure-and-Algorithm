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

/**
Approach 2: Using Reverse
This approach is based on the fact that when we rotate the array k times, k elements from the 
back end of the array come to the front and the rest of the elements from the front shift backwards.

In this approach, we firstly reverse all the elements of the array. Then, reversing the first k 
elements followed by reversing the rest n−k elements gives us the required result.

Let n = 7 and k = 3.
Original List                   : 1 2 3 4 5 6 7
After reversing all numbers     : 7 6 5 4 3 2 1
After reversing first k numbers : 5 6 7 4 3 2 1
After revering last n-k numbers : 5 6 7 1 2 3 4 --> Result

 */

let rotate = function(nums, k) {
    let len = nums.length;
    //if we change k, it will not work for k > nums.lenght [1, 2], k = 3
    k %= len; 
    reverseArray(nums, 0, len - 1);
    reverseArray(nums, 0, k - 1);
    reverseArray(nums, k, len - 1);
}

let reverseArray = function(nums, start, end){
    while(start < end) {
        let tmp = nums[start];
        nums[start] = nums[end];
        nums[end] = tmp;
        start++;
        end--;
    }
}