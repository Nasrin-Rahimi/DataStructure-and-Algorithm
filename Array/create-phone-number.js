/** 
Define a function, createPhoneNumber, that accepts an array of 10 integers
 (from 0-9) and returns a string of those numbers in the form of a phone number.
*/

/**
Solution 1: 
 */
function createPhoneNumber1(phoneNoArr) {
    let phoneNoStr = "";
    for(let i = 0; i < phoneNoArr.length; i++) {
        if(i === 0) {
            phoneNoStr += '(' + phoneNoArr[i];
        } else if(i === 2) {
            phoneNoStr += phoneNoArr[i] + ')';
        } else if(i === 5) {
            phoneNoStr += phoneNoArr[i] + '-';
        }
        else {
            phoneNoStr += phoneNoArr[i];
        }
    }
    return phoneNoStr;
}

console.log(createPhoneNumber1([6,8,1,2,8,5,9,1,0,8]));

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

/**
Solution 3:
For this one we'll create a mask that will be used to .replace (insert) the numbers inside 
the string. Note that the .replace function will find and replace only the first occurrence 
of x in this case (which is what we want), then it will move on to the next x in the next 
iteration and so on...
 */

function createPhoneNumber(arr) {
    let mask = '(xxx) xxx-xxxx';

    arr.forEach(item => {
        mask = mask.replace('x', item);
    });

    return mask;
}