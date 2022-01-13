/**
Given an integer array nums, return the third distinct maximum number in this array. If 
the third maximum does not exist, return the maximum number.

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
Example 2:

Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Can you find an O(n) solution?
 */

/**
Approch 1: use extra space.
First sort the array in desending order, and innitialize a set (set keep just distinct numbers)
, then iterate over the array and in iteration, if set doesnn't have the element add it to set
afer check if set has 2 or less elements, returnn the first element of set(maximum) and
if the elements are more than or eqaul 3, then we have third maximum and we should return it.
check
 */

let thirdMax = function(nums) {
    if(nums.length == 1) {
        return nums[0];
    }
    
    const set = new Set();
    
    nums.sort((a,b) => b - a);
    
    nums.forEach(el => {
        
        if(!set.has(el)) {
            set.add(el);
        }
    });
    
    if(set.size >= 3) {
        const [, , third] = set;
        return third;
    } else {
        const [first] = set;
        return first;
    }
}

/**
 * Time Complexity : O(nlogn) for sort nums array, and O(n) for iterating over the array,
 * so it will O(nlogn) where n is the number of elements.
 * Space Complexity : O(n) for set, in the worth case all elements are uniqe and we have
 * a set with n element.
 */

/**
Approch 2 : efficient solution
 */

var thirdMax = function(nums) {
    let firstMax, secondMax, thirdMax;
    
    nums.forEach(el => {
        if(firstMax === undefined || firstMax < el) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = el;
        } else if(firstMax !== undefined && firstMax > el && 
                 (secondMax === undefined || secondMax < el)) {
            thirdMax = secondMax;
            secondMax = el;
        } else if(secondMax !== undefined && secondMax > el && 
                  (thirdMax === undefined || thirdMax < el)) {
            thirdMax = el;
        }
    });
    
    return thirdMax === undefined ? firstMax : thirdMax;
    
};
/**
Time Complexity : O(n)
Space Complexity : O(1)
 */

