/**
Given two arrays of strings, determine whether corresponding elements contain a common substring.

Example: 
a = ['ab', 'cd', 'ef']
b = ['af', 'ee', 'ef']

Make the following decision:

i   a[i]    b[i]    common  result
0   ab      af      a       YES
1   cd      ee              NO
2   ef      ef      ef      YES

For each test, print the result on a new line. either YES if there is a common substring or NO.
 */

/**
Solution : Walk through the arrays and in each step check if the corrosponding elements in two arrays
have common substring, print YES to output otherwise print No to output.
for  check if the corrosponding elements in two arrays have common substring, we use a helper method
that accept two string, and create a hashtabel, then walk through the frist string and add the all 
chars of string two a set, (we know set only save uniq items) then walk through the other string,
and see if set has any char of that string, then we return true.

 */

function commonSubstrings(a, b) {
    if(a.length == 0 || b.length == 0) {
        throw new Error('One or two arrays is/are empty!');
    }

    for(let i = 0; i < a.length; i++) {
        if(hasCommonSubstring(a[i], b[i])) {
            console.log('YES');
        } else {
            console.log('NO');
        }
    }
}

function hasCommonSubstring(str1, str2) {
    const seenChars = new Set();

    for(let i = 0; i < str1.length; i++) {
        seenChars.add(str1[i]);
    }

    for(let i = 0; i < str2.length; i++) {
        if(seenChars.has(str2[i])) {
            return true;
        }
    }

    return false;
}

/**
Time Complexity: walk through the arrays one time, and in each step walk through the strings of the 
arrays. if we have arrays with length of n and every string has m characters, time complexity should
be O(n*m)

The important part here is hasCommonSubstring function. we can write it without using set with
O(1) space complexity, but it takes O(n^2) time complexity at the worth case. 
(Two nested loop to comapre two strings characters!)

Space Complexity: O(m) where m is a number of characters in strings.
 */