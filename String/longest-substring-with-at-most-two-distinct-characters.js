/**
 * Given a string s, return the length of the longest substring that contains at most 
 * two distinct characters.
 * 
 * Input: s = "eceba"
Output: 3
Explanation: The substring is "ece" which its length is 3.

Input: s = "ccaabbb"
Output: 5
Explanation: The substring is "aabbb" which its length is 5.
 */

/**
 * Approach 1: Sliding Window
 * To solve the problem in one pass let's use here sliding window approach with two set 
 * pointers left and right serving as the window boundaries.

The idea is to set both pointers in the position 0 and then move right pointer to the 
right while the window contains not more than two distinct characters. If at some point 
we've got 3 distinct characters, let's move left pointer to keep not more than 2 distinct 
characters in the window.

Question: how to move the left pointer to keep only 2 distinct characters in the string?

Let's use for this purpose hashmap containing all characters in the sliding window as keys 
and their rightmost positions as values. At each moment, this hashmap could contain not more 
than 3 elements.

Do we have here the best possible time complexity? Yes, we do - it's the only one pass 
along the string with N characters and the time complexity is O(N).

Algorithm

Now one could write down the algortihm.

Return N if the string length N is smaller than 3.
Set both set pointers in the beginning of the string left = 0 and right = 0 and init max 
substring length max_len = 2.
While right pointer is less than N:
If hashmap contains less than 3 distinct characters, add the current character s[right] 
in the hashmap and move right pointer to the right.
If hashmap contains 3 distinct characters, remove the leftmost character from the 
hashmap and move the left pointer so that sliding window contains again 2 distinct 
characters only.
Update max_len.

 */

let lengthOfLongestSubstringTwoDistinct = function(s) {
    let len = s.length;

    if(len < 3) {
        return len;
    }

    let left = 0, right = 0, maxLen = 2;
    let map = new Map();

    while(right < len) {
        map.set(s[right], right);

        if(map.size == 3) {
            //get the smallest index from the map
            let smallestIndex = Math.min(...map.values());
            map.delete(s[smallestIndex]);
            left = smallestIndex + 1;
        }
        maxLen = Math.max(maxLen, right - left + 1);
        right++;
    }

    return maxLen;
};

 /**
  * Time Complextity: O(N) while loop starts from 0 and goes through the length of the string
  * we can call the length of the string n and every time in the while loop we increment 
  * right by one. we can say the while loop runs n time.
  * There is also Collections.min, because we have at most 3 values in our map, that's 
  * consider the constant, so we don't need to consider it at time complexity.
  * 
  * Space Complexity: O(1) we use hash map that has at most 3 characters and it's consider
  * constant and consider O(1) space. The nice thing about the solution is if we have
  * 10 distinct characters or k distinct characters, all we need to do is update the line 63 
  * to change the size of hash map to whatever k is! This allows the solution is scaled 
  * very well
  */