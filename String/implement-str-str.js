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

/**
 * Approch 1 :
 * The approach is very simple

we will loop over haystack and for every index, check if the needle is equal to haystack 
substring from that index
we can optimize this a bit as we don't need to loop till the end of the haystack, only 
till haystack length minus needle length as beyond that, there's not enough characters 
in the haystack to be equal to needle
we will use the substring method and simple equality operations to write the logic in 
the loop body

 */

let strStr = function(haystack, needle) {
    let lenHay = haystack.length;
    let lenNee = needle.length;
    
    if(lenNee == 0 || haystack === needle) {
        return 0;
    }
    
    if(lenHay < lenNee) {
        return -1;
    }
    
    for(let i = 0; i < lenHay - lenNee + 1; i++) {
        if(haystack.substring(i, i + lenNee) === needle) {
            return i;
        }
    }
    return -1;
}

/**
 * We are using a simple for loop to loop over the haystack, however, we are also using a 
 * substring method inside the loop with also has linear complexity, so complexity becomes 
 * O(n*m). where n is the length of haystack and m is the length of the needle

Space complexity
We are not using extra space, thus, space complexity would be O(1).


 */