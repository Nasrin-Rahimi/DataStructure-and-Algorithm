/**
 * You are given a large integer represented as an integer array digits, where each 
 * digits[i] is the ith digit of the integer. The digits are ordered from most significant 
 * to least significant in left-to-right order. The large integer does not contain any 
 * leading 0's.

Increment the large integer by one and return the resulting array of digits.

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Input: digits = [0]
Output: [1]
Explanation: The array represents the integer 0.
Incrementing by one gives 0 + 1 = 1.
Thus, the result should be [1].

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

 
 */

/**
 * Approch 1: a straightforward idea is convert everything into integers and then apply 
 * the addition. It could be risky, especially for the implementation in Java, due to 
 * the potential integer overflow issue.
 * 
 * As one can imagine, once the array gets long, the result of conversion cannot fit into 
 * the data type of Integer, or Long, or even BigInteger.
 */

let plusOne = function(digits) {
    let num = "";

    for (let i = 0; i < digits.length; i++) {
        num += digits[i] 
    }

    return(parseInt(num) + 1).toString().split('');

}

/**
 * Ok the above approch doesn't work for big big integers! for example
    [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
*/