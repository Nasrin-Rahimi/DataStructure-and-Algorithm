/**
 * Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part 
of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask 
during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. 
This is consistent to C's strstr() and Java's indexOf().

Input: haystack = "hello", needle = "ll"
Output: 2

Input: haystack = "aaaaa", needle = "bba"
Output: -1

Input: haystack = "", needle = ""
Output: 0
 */

/**
 * 
 One funny solution is to use the indexOf method. But we can't use that as that's the 
 method we need to implement
 */
let strStr = function(haystack, needle) {
   return haystack.indexOf(needle);
}