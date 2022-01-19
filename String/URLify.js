/**
Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given 
the 'true' lenngth of the string. You can use a character array so that you can perform this
operation inplace.

Example:
Input: 'Mr John Smith    ', 13
output: 'Mr%20John%20Smith'
 */

/**
Hint 1 : It's often easiest to modify strings by going from the end of the string to the begin.

Hint 2 : You might find you need to know the number of spaces. Can you just count them?
 */

/** 
Solution 1: Brute-Force
Because string is not mmutable in js, We put it in a character array. Then iterate over the
array and when we get to a space, move all characters at the right of that space two to the
right and add %20 in the 3 white space. It takes O(n^2) time and is not efficient.
 */