/*
Given an integer array nums sorted in non-decreasing order, return an array of 
the squares of each number sorted in non-decreasing order.
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/

//approch 1:
let sortedSquares = function(nums) {
    let SquaredNums = [];

    for(let i = 0; i < nums.length; i++) {
        SquaredNums.push(nums[i] * nums[i]);
    } // O(N)

    return SquaredNums.sort((a, b) => a - b);  //O(logN)
}

console.log(sortedSquares([-4,-1,0,3,10]));

//time complexity == O(NlogN)
//Space Complexity == O(1)

//approch 2
