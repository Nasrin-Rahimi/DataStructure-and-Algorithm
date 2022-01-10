/** 
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Input: arr = [2,1]
Output: false

Input: arr = [3,5,5]
Output: false

Input: arr = [0,3,2,1]
Output: true
*/

/** 
Approch 1:
If we walk along the mountain from left to right, we have to move strictly up, 
then strictly down.

Algorithm
Let's walk up from left to right until we can't: that has to be the peak.
 We should ensure the peak is not the first or last element. Then, we walk down. 
 If we reach the end, the array is valid, otherwise its not.
*/

let validMountainArray = function (arr) {
    let i = 0; 
    let len = arr.length;
    
    // walk up
    while(i + 1 < len && arr[i] < arr[i + 1]) {
        i++;
    }

    // peak can't be first or last
    if(i === 0 || i === len -1) {
        return false;
    }

    // walk down
    while(i + 1 < len && arr[i] > arr[i + 1]) {
        i++;
    }

    return i === len - 1;
}

/** 
Complexity Analysis

Time Complexity: O(N), where N is the length of A.

Space Complexity: O(1).

*/

/** 
Approch 2:
find the peak or top then check if all elements before peak(top) are less than peak and
all elements after peak are less than peak.

edges:
arr.length < 3 or peak = the first or the last element
*/

var validMountainArray2 = function(arr) {
    let len = arr.length;
    
    if( len < 3 || arr === null || arr[len - 1] > arr[len - 2] ) {
        return false;
    }
    
    let top = 0, topIndex = 0;
    
    for (let i = 0; i < len ; i++) {
        if(top < arr[i]) {
            top = arr[i];
            topIndex = i;
        }
    }
    
    if(topIndex === 0 || topIndex === len- 1) {
        return false;
    }
    
    for(let i = 0; i < topIndex; i++) {
        if(arr[i] >= arr[i + 1]  || arr[i] === top) {
            return false;
        }
    }
    
    for(let i = topIndex + 1; i < len ; i++) {
        if(arr[i] <= arr[i + 1] || arr[i] === top) {
            return false;
        }
    }
    
    return true;
};