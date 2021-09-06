/*
Define a function, createPhoneNumber, that accepts an array of 10 integers
 (from 0-9) and returns a string of those numbers in the form of a phone number.
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

createPhoneNumber([0,1,2,3,4,5,6,7,8,9]);