/**
 * You are given a license key represented as a string s that consists of only alphanumeric 
 * characters and dashes. The string is separated into n + 1 groups by n dashes. You are 
 * also given an integer k.

We want to reformat the string s such that each group contains exactly k characters, 
except for the first group, which could be shorter than k but still must contain at least 
one character. Furthermore, there must be a dash inserted between two groups, and you 
should convert all lowercase letters to uppercase.

Return the reformatted license key.

Input: s = "5F3Z-2e-9-w", k = 4
Output: "5F3Z-2E9W"
Explanation: The string s has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.

Input: s = "2-5g-3-J", k = 2
Output: "2-5G-3J"
Explanation: The string s has been split into three parts, each part has 2 characters 
except the first part as it could be shorter as mentioned above.

 */

/**
 * 
 Approch 1 : Bruce Force
 after removing all dashes, we can calculate the number of groups by 
 parseInt(s.length / k)
 and the number of char in first groupt would be 
 parseInt(s.length % k)
 Now we can put the s in an array and add dashes for every group.
 */

/**
 * Approch 2: the better solution is.
 * we don't need to calculate the number of groups or the number of char of the first group,
 * if we start from the last character and add dashes like below.
 * Create a function that takes two arguments s and k.
 1- Remove leading and ending white spaces using String.trim() method.
 2- Replace all the dashes characters using the String.replace() method.
 3- Transform the string characters into uppercase by using String.toUpperCase() method.
 4- Convert the string into Array using the String.split() method. Now you have str is 
 an array in which all the elements are uppercase characters and numbers (in the string form).
 5- Use a for loop and initialize the loop with the length of str and run it until the i 
 is greater than 0 and after every iteration, the value of i decreases by k. Basically, 
 we want a loop that runs from the backside of the str.
 6- Now concatenate the string at every iteration with a dash “-“.
 7- Now on the str using Array.join() method convert the str into String and return the 
 string from the function.
 */

let licenseKeyFormatting = function(s, k) {
    
   s = s
    // Remove the white spaces
    .trim()

    // Replace all dashes characters with ""
    .replace(/\-/g,"")
    //Or replaceAll('-', '')

    // Transform the string into uppercase characters
    .toUpperCase()
    
    //Convert the string into array
    .split('');

    // Store the length of the array into len
    let len = s.length;

    for(let i = len ; i > 0; i = i - k){
        if(i != len) {
            s[i - 1] = s[i - 1] + '-';
        }
    }

    return s.join('');
};

//for replacing all the special character (/[^a-zA-Z0-9]/g, '')