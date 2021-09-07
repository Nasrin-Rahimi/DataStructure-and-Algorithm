/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.
Input: nums = [1,1,0,1,1,1]
Output: 3
*/

let findMaxConsecutiveOnes = function(nums){
    let consCount = 0;
    let maxCount = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 1) {
            consCount++;
            if(consCount > maxCount) {
                maxCount = consCount;
            }
        }
        else {
            consCount = 0;
        }
    }
    return maxCount;
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));