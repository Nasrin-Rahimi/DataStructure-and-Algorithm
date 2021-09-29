/** 
Given an integer array nums and an integer val, remove all occurrences of val 
in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, 
you must instead have the result be placed in the first part of the array nums.
 More formally, if there are k elements after removing the duplicates, then the
first k elements of nums should hold the final result. It does not matter what
 you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.
Do not allocate extra space for another array. You must do this by modifying the 
input array in-place with O(1) extra memory.

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/

/** 
Approch 1: start from the first element of the array, if any element is equal to val, then
move all the right element of that index to the left by one and add one to the counter. 
It's  not an efficient solution the time complexity should be O(n^2)
*/

/** 
Approch 2:
The problem statement clearly asks us to modify the array in-place and it also says 
that the element beyond the new length of the array can be anything. Given an element, 
we need to remove all the occurrences of it from the array. We don't technically need 
to remove that element per-say.

We can move all the occurrences of this element to the end of the array. Use two pointers!
*/
let removeElement = function(nums, val) {
    let p1 = 0, p2 = nums.length - 1, k = 0;;
    
    //we use equal in condition for case of we have just one element and we want to remove that
    //nums = [1], val = 1
    while(p1 <= p2) {
        if(nums[p2] === val) {
            p2--;
            k++;
        } else if(nums[p1] === val) {
            nums[p1] = nums[p2];
            p1++;
            p2--;
            k++;
        } else {
            p1++;
        }
    }
    
    nums.length = nums.length - k;
};

/** 
Time Complexity : O(n)
Space Complexity: O(1)
*/