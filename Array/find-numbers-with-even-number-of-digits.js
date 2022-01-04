/*
Given an array nums of integers, return how many of them contain an even number of digits.

Input: nums = [12,345,2,6,7896]
Output: 2
12 and 7896 contain an even number of digits.

*/

//Solution1 : use toString method to count the number of digit
let findNumbers = function(nums) {
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        let len = nums[i].toString().length;
        //OR if(getDigitCount(nums[i]) % 2 === 0)
        if(parseInt(len) % 2 === 0)
        {
            count++;
        }
    }

    return count;
}

//Solution2 : Divide the number by 10 again and again to get the number of digits.
let findNumbers2 = function(nums) {
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
       
        if(getDigitCount(nums[i]) % 2 == 0){
            count++;
        }
    }
    //return count;
}
//Divide the number by 10 again and again to get the number of digits.
function getDigitCount(n) {
    let i = parseInt(n / 10);
    if(i === 0) {
        return 1;
    }
    else {
        return getDigitCount(i) + 1;
    }
}

console.log(findNumbers2([12]));

