/**
 * Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by 
at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. 
The returned string should only have a single space separating the words. Do not include any 
extra spaces.

Input: s = "the sky is blue"
Output: "blue is sky the"

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

Input: s = "  Bob    Loves  Alice   "
Output: "Alice Loves Bob"

 */

/**
 * Approch 1: 
 * Because in JS strings are immutable, we should first convert the string into mutable 
 * data structure
 * Reverse s with help of an array. transfer the result to a string with removing white spaces.
 * 
 */

let reverseWords = function(s) {
    let sArray = s.split(' ');
	let start= 0, end = sArray.length - 1;

	while(start < end) {
        if(sArray[start] == '') {
            start++;
        }
        else if(sArray[end] == ''){
            end--;
        } else {
            let tmp = sArray[start];
            sArray[start] = sArray[end];
            sArray[end] = tmp;
            start++;
            end--;
        }
    }


    let str = '';
    for(let i = 0 ; i < sArray.length; i++) {
        if(sArray[i] != ''){
            str += sArray[i] + ' ';
        }
    }

    return str.substring(0, str.length - 1);
}

/**
 * Note: In the case of mutable strings, there is no need to allocate an additional data 
 * structure, one could make all job done in-place. In such a case it makes sense to reverse words and trim spaces at the same time.

 */