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

/**
 * Approach 2: Vertical scanning
 * Imagine a very short string is the common prefix at the end of the array. The above approach 
 * will still do S comparisons. One way to optimize this case is to do vertical scanning.
 * 
 * In this solution, we initially loop through the first provided string’s characters. For each 
 * character, we then loop through the remaining words, checking whether they contain the same 
 * character, in the same position.
If we find one that doesn’t, that means that the previous character tested marked the end of 
the longest prefix, so we return the first string up to and including that character. 
Otherwise, if our loops make it all the way to the end, that means the entire first string 
was found in all other strings, and thus that the entire first string is the longest prefix.
 */

let longestCommonPrefix = function(strs) {
    if(strs.length == 0) {
        return "";
    }

     // Loop through the letters of the first string
    for(let i =0; i < strs[0].length; i++) {
        // Loop through the other strings 
        for(let j = 1; j < strs.length; j++) {
             // Check if this character is also present in the same position of each string
            if(strs[0][i] != strs[j][i]) {
                 // If not, return the string up to and including the previous character
                return strs[0].slice(0, i);
            }
        }
    }

    return strs[0];
}

/**
 * Time complexity : O(S) , where S is the sum of all characters in all strings. In the worst 
 * case there will be n equal strings with length m and the algorithm performs S=m⋅n 
 * character comparisons. Even though the worst case is still the same as Approach 1, in 
 * the best case there are at most minLen comparisons where minLen is 
 * the length of the shortest string in the array.
Space complexity : O(1). We only used constant extra space.
 */