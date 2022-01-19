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

/**
Solution 2 : A common approach in string manipulation problems is to edit the string staring
from the end ,and working backword. This is useful because we have extra buffer at the
end, which allows us to change characters without worrying about what we're overwriting.
 */

function replaceSpaces1(str, trueLength) {

    let strArray = str.split('');

    let last  = trueLength - 1;
    let i = strArray.length - 1;

    while (i >= 0) {
        if (strArray[last] === ' ') {
            strArray[i] = '0';
            strArray[i - 1] = '2';
            strArray[i - 2] = '%';
            i -= 3;  
        } else {
            strArray[i] = strArray[last];
            i--;
        }
        last--;
    }

    return strArray.join('');
    
}

// console.log(replaceSpaces('Mr John Smith    ', 13));
/**
 * Time Complexity : O(n)
 * Space Complexity: O(n) for the strArray
 * 
 * This solution works best when the extra space at the end of string are exatlty equal
 * the space we need for(%20).
 * 
 * We can improve this solution a little bit by counting spaces number and iterate over
 * the array unntil we get to the last space. After that we don't need to continue to loop
 * because every character is in the right place already.
 */

/** But what if we have unlimited space at the end of the string? 
 * First we count the number of spaces. We need two extra characetrs for each space
 * (since '%20' is two characters longer than ' ') so we double this count. Then, we walk
 * backwards though the string, editing it. When we see a space, we replace it with '%20'
 * If there is no space, then we copy the original character.
 * we have implemented this using char array, because js strings are immutable.
*/

function replaceSpaces(str, trueLength) {
    let spaceCount = countOfChar(str, 0, trueLength, ' ');
    let last = trueLength - 1;
    let newLen = trueLength + (spaceCount * 2);
    let i = newLen - 1;
    let strArray = str.split('');

    while( spaceCount > 0) {
        if(strArray[last] === ' ') {
            strArray[i] = '0';
            strArray[i - 1] = '2';
            strArray[i - 2] = '%';
            i -= 3;
            spaceCount--;
        } else {
            strArray[i] = strArray[last];
            i--;
        }
        last--;
    }

    return strArray.join('');
}

function countOfChar(str, start, end, target) {
    let count = 0;

    for(let i = start; i < end; i++) {
        if(str[i] === target) {
            count++;
        }
    }

    return count;
}

console.log(replaceSpaces('Mr John Smith    ', 13));