/** 
Given an integer array nums, move all the even integers at the beginning of the array 
followed by all the odd integers.

Return any array that satisfies this condition.

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Input: nums = [0]
Output: [0]
*/

/** 
Approch 1: Use helper array

space complecity is no optimal (O(n))
*/

let sortArrayByParity = function(nums) {
    let sortArray = [];

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 == 0) {
            sortArray.push( nums[i]);
        }
    }

   for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 != 0) {
            sortArray.push( nums[i]);
        }
   }
    return sortArray;
};

/** 
Approch 2 : Use 2 pointer
*/

let sortArrayByParity2 = function(nums) {
    let left = 0, right = nums.length - 1;

    while(left < right) {
        if(nums[left] % 2 === 0) {
            left++;
        } else if(nums[right] % 2 !== 0) {
            right--;
        } else {
            const temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }
    
    return nums;
}

//Time Complexity : O(n), space : O(1)

/**
We can write the above solution like below and use ecapsulation
 */

let sortArrayByParity = function(nums) {
    let left = 0, right = nums.length - 1;

    while(left < right) {
        if(isEven(nums[i])) {
            left++;
        } else if(!isEven(nums[i])) {
            right--;
        } else {
            const temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }
    
    return nums;

}

function isEven(number) {
    return (number % 2 === 0);
}