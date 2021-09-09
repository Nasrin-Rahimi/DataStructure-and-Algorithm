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
}  // Time complexity = O(N*N)

//Second Approch

let duplicateZeros2 = function(arr) {
    let len = arr.length;
    let dupZeros = 0;
    let lastZIndex = 0;

    for (let i = 0; i < len - 1; i++) {
        if(arr[i] === 0) {
            if(i + dupZeros + 1 < len) {
                dupZeros++;
                lastZIndex = i;
            } else {
                break;
            }
        }
    }
    
    let last = len - 1 - dupZeros;
    let i = last;

    while(i >= 0) {
        if(i > lastZIndex) {
            arr[i + dupZeros] = arr[i];
        }
        else {
            if(arr[i] === 0) {
                 arr[i + dupZeros] = 0;
                 dupZeros--;
                 arr[i + dupZeros] = 0;
            } else {
                arr[i + dupZeros] = arr[i];
            }
        }
        
        i--;
    }

}