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

//Solution3 : clean solution 2

function findNumbers(nums) {
    let count = 0; 

    for (let i = 0; i < nums.length; i++) {
         if (evenDigits(nums[i])) {
            count++;
       }
    }

    return count;
}

function evenDigits(number) {
    let i = number;
    let digitCounts = 0;

    while ( i !== 0) {
	    i = parseInt(i / 10);
        digitCounts++;
    }
    
    return (digitCounts % 2) === 0 //? true : false; don't need ternary

}

//time complexity = O(mn) we iterate over the array of nums and for every number, and we divided that
// number by 10, m times where m is the number of digits of that number, space = O(1)

