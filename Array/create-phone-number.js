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