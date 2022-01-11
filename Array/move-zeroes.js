/** 
Given an integer array nums, move all 0's to the end of it while maintaining 
the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]
*/

/** 
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

//Or we can do the above approch like below:

var moveZeroes = function(nums) {
    let arr = [];
     for(let i = 0; i < nums.length; i++) {
         if(nums[i] != 0) {
             arr.push(nums[i]);
         }
     }
 
     for(let i = 0; i < nums.length; i++) {
         if(i >= arr.length) {
             nums[i] = 0;
         } else {
             nums[i] = arr[i];
         }
     }
 
 };

/**In the above solution, we do't even have to count zeros and then add them to the array,
 * we cann simply initialize tmpNums with the size of nums and fill all elements with 0.
 * like below:
*/

let moveZeroes = function(nums){
    const n = nums.length;
    const tmpNums = new Array(n).fill(0);
    let j = 0;

    for(let i = 0; i < n; i++) {
        if(nums[i] !== 0) {
            tmpNums[j] = nums[i];
            j++;
        }
    }

    for(let i = 0; i < n; i++) {
        nums[i] = tmpNums[i];
    }

    return nums;
}


/** 
Space Complexity : O(n). Since we are creating the "tmpNums" array to store results.

Time Complexity: O(n). However, the total number of operations are sub-optimal. We can 
achieve the same result in less number of operations.

If asked in an interview, the above solution would be a good start. You can explain 
the interviewer(not code) the above and build your base for the next Optimal Solution.

*/

/**
 * two pointer, one is keep tracking 0's and the other keep tracking in non zeros elements.
 *  */
var moveZeroes = function(nums) {
 let n = nums.length;
    let i = 0, j = 0;
    
    while(i < n && j < n) {
        if(nums[i] !== 0) {
            i++;
        } else if(nums[j] === 0) {
            j++;
        //we don't want to swap any element with 0 that located after that.([1,0])
        } else if(j >= i){
            nums[i] = nums[j];
            nums[j] = 0;
            i++;
        } else {
            j++;
        }
    }
};


/**
 * Approach #2 (Space Optimal, Operation Sub-Optimal) 
 This is a 2 pointer approach. The fast pointer which is denoted by variable "cur" does the job 
 of processing new elements. If the newly found element is not a 0, we record it just after 
 the last found non-0 element. The position of last found non-0 element is denoted by the slow 
 pointer "lastNonZeroFoundAt" variable. As we keep finding new non-0 elements, we just overwrite 
 them at the "lastNonZeroFoundAt + 1" 'th index. This overwrite will not result in any loss of 
 data because we already processed what was there(if it were non-0,it already is now written at 
it's corresponding index,or if it were 0 it will be handled later in time).

After the "cur" index reaches the end of array, we now know that all the non-0 elements have 
been moved to beginning of array in their original order. Now comes the time to fulfil other 
requirement, "Move all 0's to the end". We now simply need to fill all the indexes after the 
"lastNonZeroFoundAt" index with 0.

 */

 var moveZeroes = function(nums) {
     let lastNonZero = 0;

     for(let i = 0; i < nums.length; i++) {
         if(nums[i] != 0) {
             nums[lastNonZero] = nums[i];
             lastNonZereo++;
         }
     }

     for(let i = lastNonZero; i < nums.length; i++) {
         nums[i] = 0;
     }
 
 };

 /**
  * Space Complexity : O(1). Only constant space is used.

Time Complexity: O(n). However, the total number of operations are still sub-optimal. The 
total operations (array writes) that code does is n (Total number of elements).
  */

/**
 * Approach #3 (Optimal)
 * The total number of operations of the previous approach is sub-optimal. For example, the 
 * array which has all (except last) leading zeroes: [0, 0, 0, ..., 0, 1].How many write 
 * operations to the array? For the previous approach, it writes 0's n−1 times, which is not 
 * necessary. We could have instead written just once. How? ..... By only fixing the non-0 
 * element,i.e., 1.

The optimal approach is again a subtle extension of above solution. A simple realization is 
if the current element is non-0, its' correct position can at best be it's current position 
or a position earlier. If it's the latter one, the current position will be eventually 
occupied by a non-0 ,or a 0, which lies at a index greater than 'cur' index. We fill the 
current position by 0 right away,so that unlike the previous solution, we don't need to 
come back here in next iteration.

Therefore, when we encounter a non-zero element, we need to swap elements pointed by current 
and slow pointer, then advance both pointers. If it's zero element, we just advance 
current pointer.
 */

let moveZeroes = function(nums) {
   
    for(let lastNonZero = 0, cur = 0; cur < nums.length; cur++) {
       if(nums[cur] != 0) {
           const tmp = nums[lastNonZero] 
           nums[lastNonZero] = nums[cur];
           nums[cur] = tmp;
           lastNonZero++;
       }
   }
 
 };

 /**
  * Space Complexity : O(1). Only constant space is used.

Time Complexity: O(n). However, the total number of operations are optimal. The total operations 
(array writes) that code does is Number of non-0 elements.This gives us a much better best-case 
(when most of the elements are 0) complexity than last solution. However, the worst-case 
(when all elements are non-0) complexity for both the algorithms is same.


  */