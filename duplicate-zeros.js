/*
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the 
remaining elements to the right.

Note that elements beyond the length of the original array are not written. 
Do the above modifications to the input array in place and do not return anything.

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]

Input: arr = [1,2,3]
Output: [1,2,3]
*/

let duplicateZeros = function(arr) {
    let len = arr.length;
    let i = 0;

    while(i < len - 1){
        if(arr[i] == 0){
            for (let j = len - 2; j >= i; j--){
                arr[j+1] = arr[j];
            }
            i = i + 2;
        }
        else {
            i++;
        }
    }
    
    return arr;
}