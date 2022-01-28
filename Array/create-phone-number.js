/** 
Define a function, createPhoneNumber, that accepts an array of 10 integers
 (from 0-9) and returns a string of those numbers in the form of a phone number.
*/

/**
Solution 1: 
 */
function createPhoneNumber(phoneNoArr) {
    let phoneNoStr = "";
    for(let i = 0; i < phoneNoArr.length; i++) {
        if(i === 3 || i === 6){
            phoneNoStr = phoneNoStr + "-" + phoneNoArr[i];
        }
        else {
            phoneNoStr += phoneNoArr[i];
        }
    }
    console.log(phoneNoStr);
}

//createPhoneNumber([0,1,2,3,4,5,6,7,8,9]);

/**
Time complexity: O(n^2) because string concatination in each iteration takes O(n)
concatination create a new string and copy the original string in the new string and add
to the new string.
 */

/**
 * Solution 2:
we're going to use the .slice and .join methods in order to take out the values that we 
need from the array between the specified indexes. Also we'll use the string 
template literals in order to have a cleaner code:
 */

function createPhoneNumber(arr) {
    return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`;
}

/**
 * This solution is more clean than the first one. 
 * Time complexity: O(n) (Not sure)
 */

/**
Or we can create a string at the beginning by .joininig the characters and then using 
.substring to take the specific ones out:
 */

function createPhoneNumber(arr) {
    let str = arr.join('');
    return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`;
}