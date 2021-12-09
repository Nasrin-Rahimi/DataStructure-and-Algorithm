/**
Given a number, write a program to find a maximum number that can be formed using all of the digits 
of this number. If the number is exceeds 100000000, retrun -1.

Examples: 

Input : 38293367
Output : 98763332

Input : 1203465
Output: 6543210
 */

/**
Simple Approach: The simple method to solve this problem is to extract and store the digits of the 
given number in an integer array and sort this array in descending order. After sorting the array, 
print the elements of the array. 
 */

function solution(N) {
    if (N < 0 || N > 100000000) {
        return -1;
    }
    if (N === 0) {
        return 0;
    }
    
    let largestSibling = 0;
    let nDigitsArray = [];

    //extract and store the digits of N in nDigitsArray
    getNDigits(N, nDigitsArray);

    //sort the integer array in descending order
    nDigitsArray.sort( (a,b) => b - a);

    largestSibling = parseInt(nDigitsArray.join(''));

    return largestSibling;
}

function getNDigits(N, nDigitsArray) {
    let i = N;
    while (i !== 0) {
        nDigitsArray.push(parseInt(i % 10));
        i = parseInt(i / 10);
    }
}

/**
Time Complexity: O( NlogN ), where N is the number of digits in the given number
 */

/**
Efficient approach : We know that the digits in a number will range from 0-9, so the idea is to create 
a hashed array of size 10 and store the count of every digit in the hashed array that occurs in the 
number. Then traverse the hashed array from index 9 to 0 and calculate the number accordingly.
 */

function solution(N) {

    if (N < 0 || N > 100000000) {
        return -1;
    }

    let largestSibling = 0, multiplier = 1;
    let countArray = new Array(10).fill(0)
  
    //converting N to string
    let nStr = N.toString();

    //updating the countArray
    for (let i = 0; i < nStr.length; i++) {
        countArray[nStr[i] - '0']++;
    }

    //Traversing the countArray to calculate the largestSibling
    for (let i = 0; i <= 9; i++) {
        while(countArray[i] > 0) {
            largestSibling = largestSibling + (i * multiplier);
            countArray[i]--;
            multiplier *= 10;
        }
    }

    return largestSibling; 
}

/**
Time Complexity: O( N ), where N is the number of digits in the given number. 
Note: For very large numbers we can use strings to take input instead of storing input in integer data type.
 */

