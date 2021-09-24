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

/**
 * Approach 2: Bit Manipulation
Intuition

Here the input is more adapted to push towards Approach 1, but there is popular Facebook 
variation of this problem when interviewer provides you two numbers and asks to sum them 
up without using addition operation.

No addition? OK, bit manipulation then.

How to start? There is an interview tip for bit manipulation problems: if you don't know 
how to start, start from computing XOR for your input data. 

Here XOR is a key as well, because it's a sum of two binaries without taking carry into 
account. (answer without carry : a ^ b)

To find current carry is quite easy as well, it's AND of two input numbers, shifted one 
bit to the left. (carry : (a && b) << 1)

Algorithm

Convert a and b into integers x and y, x will be used to keep an answer, and y for the carry.

While carry is nonzero: y != 0:

Current answer without carry is XOR of x and y: answer = x^y.

Current carry is left-shifted AND of x and y: carry = (x & y) << 1.

Job is done, prepare the next loop: x = answer, y = carry.

Return x in the binary form.
 */