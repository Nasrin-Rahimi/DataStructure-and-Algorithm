/**
A school is trying to take an annual photo of all the students. The students are asked to 
stand in a single file line in non-decreasing order by height. Let this ordering be 
represented by the integer array expected where expected[i] is the expected height of the 
ith student in line.

You are given an integer array heights representing the current order that the students are 
standing in. Each heights[i] is the height of the ith student in line (0-indexed).

Return the number of indices where heights[i] != expected[i].
Example 1:

Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
heights:  [1,1,4,2,1,3]
expected: [1,1,1,2,3,4]
Indices 2, 4, and 5 do not match.
Example 2:

Input: heights = [5,1,2,3,4]
Output: 5
Explanation:
heights:  [5,1,2,3,4]
expected: [1,2,3,4,5]
All indices do not match.
Example 3:

Input: heights = [1,2,3,4,5]
Output: 0
Explanation:
heights:  [1,2,3,4,5]
expected: [1,2,3,4,5]
All indices match.

Constraints:

1 <= heights.length <= 100
1 <= heights[i] <= 100
 */

/**
Approch 1: Using extra space
 */
let heightChecker = function(heights) {
    let expected = JSON.parse(JSON.stringify(heights));
    //or let expected = [...heights].sort((a, b) => a - b)
    let indices= 0;

    expected = expected.sort((a,b) => a - b);

    for(let i = 0; i < heights.length;i++) {
        if(heights[i] !== expected[i]) {
            indices++;
        }
    }

    return indices;
}

/**
 * Time complexity: O(nlogn) for sort + O(n) for for loop to comparing heights. So it would 
 * equal O(nlogn) where n is the size of heights array.
 * Space complexity: O(n) for expected array.
 */

/**
Approch 2: Because it is heights we are talking about (which naturally have a limit) and the 
problem gave us that heights is between 1 and 100, we can actually do a bucket/counting sort 
which only takes O(100n) = O(n) time.

The answer first counts up the heights and puts them in a map and then compares them in 
order to the heights in the input array.
 */

function heightChecker(heights) {
    let map = {};
    let h_ptr = 101;
    // create map of all heights occurences
    for(let h of heights) {
        if (h < h_ptr) {
            h_ptr = h;
        }
        map[h]? ++map[h]:map[h]=1;
    }
    let res = 0;
 
    for(let h of heights) {
        // find first height in map
        while(map[h_ptr] === undefined || map[h_ptr] ===0 ) ++h_ptr;
 
        // if height is not matching then the position is wrong
        if(h_ptr != h) {
            ++res;
        }
 
        // reduce count of height in map
        --map[h_ptr];
    }
 
    return res;
 }