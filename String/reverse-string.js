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

/**
 * Approach 2: Recursion, In-Place, O(N) Space
 * 
 * Does in-place mean constant space complexity?

No. By definition, an in-place algorithm is an algorithm which transforms input using no 
auxiliary data structure.

The tricky part is that space is used by many actors, not only by data structures. The classical 
example is to use recursive function without any auxiliary data structures.

Is it in-place? Yes.

Is it constant space? No, because of recursion stack.

 Let's implement recursive function helper which receives two pointers, left and right, 
 as arguments.

 Base case: if left >= right, do nothing.

Otherwise, swap s[left] and s[right] and call helper(left + 1, right - 1).

To solve the problem, call helper function passing the head and tail indexes as arguments: 
return helper(0, len(s) - 1).
 */

let reverseString = function(str) {
    helperReverse(str, 0, str.length - 1);
}

let helperReverse = function(str, start, end) {
    if(start >= end) {
        return;
    }
    let tmp = str[start];
    str[start] = str[end];
    str[end] = tmp;
    helperReverse(str, start + 1, end - 1)
}

/**
 * Time complexity : O(N) time to perform N/2 swaps.

Space complexity : O(N) to keep the recursion stack.

 */