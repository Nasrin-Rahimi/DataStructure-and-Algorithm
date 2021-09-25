/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * 
 * Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Follow up: Do not allocate extra space for another array. You must do this by modifying the 
input array in-place with O(1) extra memory.

 */

/**
 * Approach 1: Two Pointers, Iteration, O(1) Space

In this approach, two pointers are used to process two array elements at the same time. 
Usual implementation is to set one pointer in the beginning and one at the end and then to 
move them until they both meet.

Sometimes one needs to generalize this approach in order to use three pointers
 */

let reverseString = function(str) {
    let p1 = 0, p2 = str.length -1;

    while(p1 < p2) {
        let tmp = str[p1];
        str[p1++] = str[p2];
        str[p2--] = tmp;
    }

    return str;
}

/**
 * Time complexity : O(N) to swap N/2 element.

Space complexity : O(1), it's a constant space solution.
 */

