/** 
Given an array arr, replace every element in that array with the greatest element
 among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]

Input: arr = [400]
Output: [-1]
*/

let replaceElements = function(arr) {

    let len  = arr.length;

    if(len === 0 || arr === null) {
        return 0;
    }

    if(len === 1) {
        arr[0] = -1;
        return arr;
    }

    for(let i = 0; i < len - 1; i++) {
        let greatest = arr[i + 1];

        for(let j = i + 1; j < len; j++) {
            if(greatest < arr[j]) {
                greatest = arr[j];
            }
        }

        arr[i] = greatest;
    }

    arr[len - 1] = -1;
    return arr;

}

/** 
Time Complexity: O(n*n)
space complexity: O(1) because we do inplace replace and donot use extra space.
*/

/**
 * A better approach would be to replace all elements with a single traversal of the array. The 
 * idea is to start from the rightmost element, move to the left side one by one, keeping a 
 * track of the maximum element. Replace every element with the maximum element.
 */

let replaceElements = function(arr) {
    let len = arr.length;

    let max = arr[len - 1];
    arr[len - 1] = -1;

    for(let i = len - 2; i >= 0; i--) {
        let tmp = arr[i];
        arr[i] = max;
        if(max < tmp) {
            max = tmp;
        }
    }
    return arr;
}