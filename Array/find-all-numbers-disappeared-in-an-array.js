/**
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of 
all the integers in the range [1, n] that do not appear in nums.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]

Constraints:
n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
 
Follow up: Could you do it without extra space and in O(n) runtime? You may assume the 
returned list does not count as extra space.

 */

/**
Approch 1: Brute-Force - Additional space
This is a really easy problem if you decide to use additional memory.
Iterate from 1 to the length of the array (n), in each iteration check if i is not exists 
in nums, push it to the result disappearedNumbers array.

 */

var findDisappearedNumbers = function(nums) {
    let disappearedNumbers = [];
 
 for(let i = 1; i <= nums.length; i++){
     if(!numbersExists(nums, i)){
         disappearedNumbers.push(i);
     }
 }
     
     return disappearedNumbers;
     
 };
 
 function numbersExists(nums, number) {
     for(let i = 0; i < nums.length; i++) {
         if(nums[i] === number) {
             return true;
         }
     }
 
     return false;
 }

 // Time Complexity : O(n^2) , space : O(n)

 