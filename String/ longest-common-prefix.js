/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

/**
 Approach 1: Horizontal scanning
start from the first str and put it in the prefix. then iterate over the array and for each 
iteration, find the longest common prefix of strings until the end of the array.
 */

let longestCommonPrefix = function(strs) {
    
    if(strs.length == 0) {
        return "";
    }

    let prefix = strs[0];

    for(let i = 1; i < strs.length; i++) {
        while(strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if(prefix.length == 0) {
                return "";
            }
        }
    }

    return prefix;
}

/**
 * Time complexity : O(S) , where S is the sum of all characters in all strings.

In the worst case all n strings are the same. The algorithm compares the string S1 with the 
other strings [S2 … Sn] There are S character comparisons, where S is the sum of all characters 
in the input array.

Space complexity : O(1). We only used constant extra space
 */