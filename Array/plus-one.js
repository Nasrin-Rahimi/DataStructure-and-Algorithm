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

/**
 * Approach 2: Schoolbook Addition with Carry
 * 
 * Let us identify the rightmost digit which is not equal to nine and increase that digit 
 * by one. All the following consecutive digits of nine should be set to zero.
 * simplest usecase : 234 => 235
 * 
 * slightly complicated case : 129 => 130
 * 
 * the case which breaks everything, because all the digits are nines: 999 => 1000
 * we need to set all nines to zero and append 1 to the left side of the array.
 * 
 * Move along the input array starting from the end of array.

Set all the nines at the end of array to zero.

If we meet a not-nine digit, we would increase it by one. The job is done - return digits.

We're here because all the digits were equal to nine. Now they have all been set to zero. 
We then append the digit 1 in front of the other digits and return the result.


 */

var plusOne = function(digits) {
    // move along the input array starting from the end
    for(let i = digits.length - 1; i >= 0; i--) {
         // here we have the rightmost not-nine
        if(digits[i] < 9) {
             // increase this rightmost not-nine by 1
            digits[i] += 1;
              // and the job is done
            return digits;
        }
         // set all the nines at the end of array to zeros
        digits[i] = 0;
    }
    
    // we're here because all the digits are nines
    digits.unshift(1);
    return digits;
};

/**
 * Let N be the number of elements in the input list.

Time complexity: O(N) since it's not more than one pass along the input list.

Space complexity: )O(N)

Although we perform the operation in-place (i.e. on the input list itself), in the worst 
scenario, we would need to allocate an intermediate space to hold the result, which 
contains the N+1 elements. Hence the overall space complexity of the algorithm is 
O(N).

 */