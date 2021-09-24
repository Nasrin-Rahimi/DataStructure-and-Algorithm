/**
 * Given two binary strings a and b, return their sum as a binary string.
 * 
 * Input: a = "11", b = "1"
Output: "100"

Input: a = "1010", b = "1011"
Output: "10101"

Overview
There is a simple way using built-in functions:

Convert a and b into integers.

Compute the sum.

Convert the sum back into binary form.

This method has quite low performance in the case of large input numbers.
 */

/**
 * 
 Approch 1 : 
 Let's consider the numbers bit by bit starting from the lowest one and compute 
 the carry this bit will add.
 */

let addBinary = function(a, b) {
    let carry = 0;
    let res = [];

    for(let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; --i, j--) {
        let aChar = i >= 0 ? parseInt(a[i]) : 0 ;
        let bChar = j >= 0 ? parseInt(b[j]) : 0;

        res.push((aChar + bChar + carry) % 2);
        carry = 1 < aChar + bChar + carry;
    }

    if(carry) {
        res.push(1);
    }

    return res.reverse().join('');
}

/**
 * Time complexity: O(max(N,M)), where N and M are lengths of the input strings a and b.

Space complexity: O(max(N,M)) to keep the answer.

 */