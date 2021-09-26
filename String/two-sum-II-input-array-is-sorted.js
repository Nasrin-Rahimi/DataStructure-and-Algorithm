/**
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
 * find two numbers such that they add up to a specific target number. Let these two numbers 
 * be numbers[index1] and numbers[index2] where 1 <= first < second <= numbers.length.

Return the indices of the two numbers, index1 and index2, as an integer array [index1, index2] 
of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element 
twice.

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3.

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2.

 */

/**
 * 
 Approch 1:
 We use two indices, initially pointing to the first and the last element, respectively. 
 Compare the sum of these two elements with target. If the sum is equal to target, we found 
 the exactly only solution. If it is less than target, we increase the smaller index by one. 
 If it is greater than target, we decrease the larger index by one. Move the indices and 
 repeat the comparison until the solution is found.
 */
let twoSum = function(numbers, target) {
    if(numbers.length < 2) {
        return [];
    }

    let p1 = 0, p2 = numbers.length -1;

    while(p1 < p2) {
        let sum = numbers[p1] + numbers[p2];
        if( sum == target) {
           return[p1 + 1, p2 + 1];
        } else if(sum > target){
            p2--;
        } else {
            p1++;
        }
    }

    return [-1, -1];

}

/**
 * Time complexity: O(n). The input array is traversed at most once. Thus the time complexity is
 *  O(n).

Space complexity: O(1). We only use additional space to store two indices and the sum, so the 
space complexity is O(1).
 */

/**
 * What if the problem constraints were different and we needed to consider integer overflow 
 * when adding numbers[low] and numbers[high]? In that case, to 
 * prevent an overflow error, we could cast our numbers from int data type to long data 
 * type before adding them together, e.g.: 
 * long sum = static_cast<long>(numbers[low]) + numbers[high] for C++.
 * Casting ensures that we will not get the overflow error since the signed long data type supports 
 * numbers up to 2^63 - 1.
 */