/**
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

/** 
approach1 : simply write the values from nums2 into the end of nums1,
 and then sort nums1. Remember that we do not need to return a value, as we should
modify nums1 in-place. While straightforward to code, this approach has a high
 time complexity as we're not taking advantage of the existing sorting.
*/

let merge = function(nums1, m, nums2, n) {
    for(let i = 0; i < n; i++) {
        nums1[i + m] = nums2[i];
    }
    return nums1.sort((a, b) => a - b);
}

/** 
Time complexity : O((n+m)log(n+m)).

The cost of sorting a list of length x using a built-in sorting algorithm
 is (xlogx). Because in this case we're sorting a list of length 
m + n, we get a total time complexity of O((n+m)log(n+m)).
Space complexity : O(n), but it can vary.

Most programming languages have a built-in sorting algorithm that uses O(n)
space.
*/

/** 
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

/** 
Approach 3 : Three Pointers (Start From the Beginning)
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

/** 
Time complexity : O(n+m).

Space complexity : O(m).
We are allocating an additional array of length m.

this approch already demonstrates the best possible time complexity, O(n+m),
but still uses additional space. This is because the elements of array nums1 have 
to be stored somwhere so that they aren't overwritten.

*/

/** 
Approch4 : Three Pointers (Start From the End)
The algorithm is similar to before, except this time we set p1 to point at
index m - 1 of nums1, p2 to point at index n - 1 of nums2, and p to point at
index m + n - 1 of nums1. This way, it is guaranteed that once we start overwriting
the first m values in nums1, we will have already written each into its new position.
 In this way, we can eliminate the additional space.

Interview Tip: Whenever you're trying to solve an array problem in-place, 
always consider the possibility of iterating backwards instead of forwards through 
the array. It can completely change the problem, and make it a lot easier.
*/

let merge4 = function(nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1;

    for(let p = n + m - 1; p >= 0; p--){
        if(p2 < 0){
            break;
        }
        if(p1 >= 0 && nums1[p1] > nums2[p2]){
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }

    }
}

/** 
Time complexity : O(n+m).
Same as Approach 3.

Space complexity : O(1).
Unlike Approach 3, we're not using an extra array.

Proof (optional)
You might be a bit sceptical of this claim. Does it really work in every case?
 Is it safe to be making such a bold claim?

This way, it is guaranteed that once we start overwriting the first m values in 
nums1, we will have already written each into its new position. In this way, we can
 eliminate the additional space.

Great question! So, why does this work? To prove it, we need to ensure that p never
overwrites a value in nums1 that p1 hasn't yet read from nums1.

*/
