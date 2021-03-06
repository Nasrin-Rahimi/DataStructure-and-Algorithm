/** 
Given an integer array nums sorted in non-decreasing order, remove the duplicates 
in-place such that each unique element appears only once. The relative order of the
 elements should be kept the same.

Since it is impossible to change the length of the array in some languages, 
you must instead have the result be placed in the first part of the array nums. 
More formally, if there are k elements after removing the duplicates, then the first 
k elements of nums should hold the final result. It does not matter what you leave beyond
the first k elements.
Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input 
array in-place with O(1) extra memory.

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
*/

/**
 Approach 1: Extra space
 Let A be the array and n its length. If we can use additional space, we can initialize a set
 (set does't stores duplicates) and for every element in A, add it to set, if there isn't in
 there, then copy back the set to A array again.

 In js array's are dynamic and we don't need to define the size of array in initialization.
 But for some languages we need to define the size of array, when we initialize it.
 So we should first count the number of unique elements and create the extra array with the size 
 of unique elements.

 let uniqueNumbers = 0;
 for(let i = 0; i < array.length; i++) {
     if(i === 0 || array[i] !== array[i + 1]) {
         uniqueNumbers++;
     }
 }

 let result = new array(uniqueNumbers);
 */

 /**
Approach 2: Brute-force that use O(1) additional space. Iterate through the array A,
testing if A[i] is equal A[i+1], and, if so shift all elements at and after i+2 to the left
by one. When all entries are equal, the number of shifts is (n-1) + (n-2) + ... + 2+ 1 = O(n^2)
where n is the length of the array. 
  */

/** 
Approach 3: Two Pointers

Since the array is already sorted, we can keep two pointers i and j, where i is
the slow-runner while j is the fast-runner. As long as nums[i] = nums[j],
we increment j to skip the duplicate.

When we encounter nums[j] is not equal nums[i], the duplicate run has ended so we must 
copy its value to nums[i + 1]. i is then incremented and we repeat the same process again
until j reaches the end of array.

*/

let removeDuplicates = function(nums) {

    let i = 0, j = 0 ;

    if(nums.length === 0) {
        return 0;
    }

    while(j < nums.length) {
        if(nums[i] === nums[j]) {
            j++;
        }
        else {
            nums[i + 1] = nums[j];
            i++;
        }
    }
    return i + 1;
};

/** 
Time complextiy : O(n). Assume that n is the length of array.
 Each of i and j traverses at most n steps.

Space complexity : O(1).
*/
