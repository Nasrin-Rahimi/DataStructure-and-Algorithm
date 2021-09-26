/**
 * Given a string s, reverse the order of characters in each word within a sentence while 
 * still preserving whitespace and initial word order.

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Input: s = "God Ding"
Output: "doG gniD"
 */

/**
 * Approch 1:
The first method is really simple. We simply split up the given string based on whitespaces 
and put the individual words in an array of strings. Then, we reverse each individual string 
and concatenate the result. We return the result after removing the additional whitespaces at 
the end.

 */

let reverseWords = function(s) {
    let sArray = s.split(' ');
	for(let i = 0; i < sArray.length; i++) {
        let start = 0, end = sArray[i].length - 1;
        let word = sArray[i].split('');
        while(start < end) {
            let tmp = word[start];
            word[start] = word[end];
            word[end] = tmp;
            start++;
            end--;

         }
      sArray[i] = word.join('');
    }
    return sArray.join(' ');

}

/**
 * Time complexity : O(n). where nn is the length of the string.

Space complexity : O(n). res of size n is used.
 */