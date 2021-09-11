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

/*
A naive approach would be to simply write the values from nums2 into the end of nums1,
 and then sort nums1. Remember that we do not need to return a value, as we should
modify nums1 in-place. While straightforward to code, this approach has a high
 time complexity as we're not taking advantage of the existing sorting.
*/

let merge = function(nums1, m, nums2, n) {
    for(let i = 0; i < n; i++) {
        nums1[i + m] = nums2[i];
    }
    return nums1.sort();
}

/*
Time complexity : \mathcal{O}((n + m)\log(n + m))O((n+m)log(n+m)).

The cost of sorting a list of length xx using a built-in sorting algorithm
 is (xlogx). Because in this case we're sorting a list of length 
m + nm+n, we get a total time complexity of O((n+m)log(n+m)).
Space complexity : O(n), but it can vary.

Most programming languages have a built-in sorting algorithm that uses O(n)
space.
*/

/*
Approch 2
*/
let merge2 = function(nums1, m, nums2, n) {
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

//time complexity : O(m + n)(m + n)

/*
Approach 2 : Three Pointers (Start From the Beginning)
Because each array is already sorted, we can achieve an O(n+m)
 time complexity with the help of the two-pointer technique.

 Algorithm

The simplest implementation would be to make a copy of the values in nums1, called 
nums1Copy, and then use two read pointers and one write pointer to read values from
 nums1Copy and nums2 and write them into nums1.

Initialize nums1Copy to be a new array containing the first m values of nums1.
Initialize read pointer p1 to the beginning of nums1Copy.
Initialize read pointer p2 to the beginning of nums2.
Initialize write pointer p to the beginning of nums1.
While p is still within nums1:
If nums1Copy[p1] exists and is less than or equal to nums2[p2]:
Write nums1Copy[p1] into nums1[p], and increment p1 by 1.
Else
Write nums2[p2] into nums1[p], and increment p2 by 1.
Increment p by 1.

*/

let merge3 = function(nums1, m, nums2, n) {
    let nums1Copy = new Array(m);
    
    for(let i = 0; i < m; i++) {
        nums1Copy[i] = nums1[i];
    }
    
    let p1 = 0, p2 = 0, p = 0;

    while (p < m + n) {
        if(p2 >= n || p1 < m && nums1Copy[p1] <= nums2[p2]) {
            nums1[p] = nums1Copy[p1];
            p1++;
        } else {
            nums1[p] = nums2[p2];
            p2++
        }
        p++;
    }
}
