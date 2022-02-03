/** 
Define a function, createPhoneNumber, that accepts an array of 10 integers
 (from 0-9) and returns a string of those numbers in the form of a phone number.

 Example : Input: [6, 8, 1, 2, 8, 5, 9, 1, 0, 8]
        output: (681) 285-9108
*/

/**
Solution 1: 
 */
function createPhoneNumber1(phoneNoArr) {
    if(arr.lenght !== 10) {
        throw new Error('Phone number must have 10 digits!');
    }

    let phoneNoStr = "(";

    for(let i = 0; i < phoneNoArr.length; i++) {

        phoneNoStr += phoneNoArr[i];

        if(i === 2) {
            phoneNoStr += ')';
        } else if(i === 5) {
            phoneNoStr += '-';
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

function createPhoneNumber2(arr) {
    if(arr.lenght !== 10) {
        throw new Error('Phone number must have 10 digits!');
    }

    return `(${arr.slice(0, 3).join('')})${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`;
}

console.log(createPhoneNumber2([2,5,3,6,4,2,7,5,7,5]));
/**
 * This solution is more clean than the first one. 
 * Time complexity: O(n) (Not sure)
 */

/**
Or we can create a string at the beginning by .joininig the characters and then using 
.substring to take the specific ones out:
 */

function createPhoneNumber3(arr) {
    if(arr.lenght !== 10) {
        throw new Error('Phone number must have 10 digits!');
    }

    let str = arr.join('');
    return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`;
}

console.log(createPhoneNumber3([2,5,3,6,4,2,7,5,7,5]));

/**
Solution 3:
For this one we'll create a mask that will be used to .replace (insert) the numbers inside 
the string. Note that the .replace function will find and replace only the first occurrence 
of x in this case (which is what we want), then it will move on to the next x in the next 
iteration and so on...
 */

function createPhoneNumber4(arr) {
    if(arr.lenght !== 10) {
        throw new Error('Phone number must have 10 digits!');
    }
    let mask = '(xxx)xxx-xxxx';

    arr.forEach(item => {
        mask = mask.replace('x', item);
    });

    return mask;
}

console.log(createPhoneNumber4([2,5,3,6,4,2,7,5,]));

/**
Time Complexity: String.prototype.replace has to at least be O(n) because it has to search 
through the entire string in the worst place and because it has to create a new string whose 
length will linear in the length of the original string. And creating a string of length n 
is of course an O(n) operation. 
 */