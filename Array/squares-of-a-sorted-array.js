/** 
Given an integer array nums sorted in non-decreasing order, return an array of 
the squares of each number sorted in non-decreasing order.
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/

/**
 * approch 1:
 * */
let sortSquares = function(nums) {
    let SquaredNums = [];

    for(let i = 0; i < nums.length; i++) {
        SquaredNums.push(nums[i] * nums[i]);
    } // O(N)

    return SquaredNums.sort((a, b) => a - b);  //O(logN)
}

//console.log(sortedSquares([-4,-1,0,3,10]));

//time complexity == O(NlogN)
//Space Complexity == O(n)

/** approch 2
efficient solution is based on the two-pointer method as the array is already sorted we can
compare the first and last element to check which is bigger and proceed with the result. 

Algorithm – 

Initialize left=0 and right=n-1
if abs(left) >= abs(right) then store square(arr[left])
at the end of result array and increment left pointer
else store square(arr[right]) in the result array and decrement right pointer
decrement index of result array
*/

let sortSquares2 = function(nums) {
    let n = nums.length;
    let left = 0; 
    let right = n - 1;
    let ssNums = new Array(n).fill(0);
    
    for(let i = n - 1; i >= 0; i--) {
        if(Math.abs(nums[left]) > Math.abs(nums[right])) {
            ssNums[i] = nums[left] * nums[left];
            left++;
        } else {
            ssNums[i] = nums[right] * nums[right];
            right--;
        }
        
    }
   
    return ssNums;
}

//Time complexity: O(n) 
//Auxiliary Space: O(n) 

console.log(sortSquares2([-4,-1,0,3,10]));
