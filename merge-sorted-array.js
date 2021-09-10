/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside 
the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements 
denote the elements that should be merged, and the last n elements are set to 0 and should be 
ignored. nums2 has a length of n.

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]

The first m elements of nums1 can be 0 too!
 
*/

let merge = function(nums1, m, nums2, n) {
    if(n == 0) {
        return nums1;
    }
    if( m == 0) {
        for(let i = 0; i < n; i++){
            nums1[i] = nums2[i];
        }
        return nums1;
    }

    let i = 0, j = 0, k = 0;

   while(i < m + n && j < n){
       if(nums1[i] === 0 && k === m) {
        nums1[i] = nums2[j];
        j++;
       }
       else if(nums1[i] > nums2[j]){
            for(let x = m + n - 2; x >= i; x--){
                nums1[x+1] = nums1[x];
            }
            nums1[i] = nums2[j];
            j++;
        }
        else {
            k++;
        }
       i++;
    }
    return nums1;
};