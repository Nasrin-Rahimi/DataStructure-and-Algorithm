/*
Given an array arr of integers, check if there exists two integers N and M such that
 N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]

Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

Input: arr = [3,1,7,11]
Output: false
*/

/*
Approch 1:
Use leaner search.
*/

let checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(i !== j && arr[i] === 2* arr[j]) {
                return true;
            }
        }
    }
    return false;
};