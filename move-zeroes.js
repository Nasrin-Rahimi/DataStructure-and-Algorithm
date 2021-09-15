/*
Given an integer array nums, move all 0's to the end of it while maintaining 
the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]
*/

/*
The 2 requirements of the question are:

Move all the 0's to the end of array.

All the non-zero elements must retain their original order.

It's good to realize here that both the requirements are mutually exclusive, i.e., 
you can solve the individual sub-problems and then combine them for the final solution.

Approach #1 (Space Sub-Optimal) 
*/

let moveZeroes = function (nums) {
    let ZerosCount = 0;
    let len = nums.length;
    let tmpNums = [];

    //count zeros number and add none zeros to the temp array
    for(let i = 0; i < len; i++) {
        if(nums[i] === 0) {
            ZerosCount++;
        }
        else {
            tmpNums.push(nums[i]);
        }
    }
    
    // Move all zeroes to the end
   while(ZerosCount--) {
       tmpNums.push(0);
   }

   for(let i = 0; i < len; i++) {
       nums[i] = tmpNums[i];
   }

   return nums;
}

/*
Space Complexity : O(n). Since we are creating the "tmpNums" array to store results.

Time Complexity: O(n). However, the total number of operations are sub-optimal. We can 
achieve the same result in less number of operations.

If asked in an interview, the above solution would be a good start. You can explain 
the interviewer(not code) the above and build your base for the next Optimal Solution.


*/