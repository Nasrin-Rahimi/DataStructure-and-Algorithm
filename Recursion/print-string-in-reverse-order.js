/*
*Print a string in reverse order

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Follow up: Do not allocate extra space for another array. You must do this by modifying 
the input array in-place with O(1) extra memory.
*/


/**
 * Approch 1 : Iteration use two pointer
 */

let reverseString = function(str) {
    let start = 0, end = str.length - 1;

	while(start < end) {
		let tmp = str[start];
		str[start] = str[end];
		str[end] = tmp;
        start++;
        end--;
    }
}
/**
 * 
Time complexity : O(N) to swap N/2 element.

Space complexity : O(1), it's a constant space solution.
 */


/**
 * Approch 2 : Recursion
 * Let's implement recursive function helper which receives two pointers, left and right, 
 * as arguments.

Base case: if left >= right, do nothing.

Otherwise, swap s[left] and s[right] and call helper(left + 1, right - 1).

To solve the problem, call helper function passing the head and tail indexes as arguments: 
return helper(0, len(s) - 1).
 */

// let reversString2 = function(str) {
//     helperRevers(0, str);
// }

// let helperRevers = function(index, str) {
//     if(str == null || index >= str.length) {
//         return;
//     }
//     helperRevers(index + 1, str);
//     console.log(str[index]);
// }

//OR

let reverseString2 = function(str) {
    helperReverse(str, 0, str.length - 1);
}

let helperReverse = function(str, start, end) {
    if(start >= end) {
        return;
    }
    let tmp = str[start];
    str[start] = str[end];
    str[end] = tmp;
    helperReverse(str, start + 1, end - 1);
}

/**
 * Time complexity : O(N) time to perform N/2 swaps.

Space complexity : O(N) to keep the recursion stack.
 */