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
Indices 2, 4, and 5indices do not match.
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

In this approch, we will hash the height of each student in an array called hashHeights. 
Each index of the hashHeights array will store the total number of students of that 
particular height in total.

Please note, we are only showing the hashHeight array up to the index 5 but in reality, 
it has a total size of 101 elements.

index :         0 1 2 3 4 5
input Array:    1 1 4 2 1 3
Hash Array:     0 3 1 1 1 0

As you can see in the figure above, the hash Array tells us that there are three people of 
height 1 and one person with height 2,3 and 4 respectively.

Once the hashHeights array has been populated, we run a double for loop (inner one being a 
fixed size of 100) and check if the current student in heights array is actually the 
expected student that can be identified as hashHeights array’s first non-zero element.

To explain this a bit further, let’s look back at the example above.
We start by the first element of heights array which is 1 and compare it to the hashHeights 
array’s first non-zero element which is at index 1. It has a value of 3, which means there 
are 3 students of height 1. Since these match, we decrement the 3 in hashHeights to 2 and 
move to the next element in the Heights (input) array and it’s 1 again.

Similarly, we decrement the value of hashHeights array at index 1 from 2 to 1 now.
Moving on, the next element in the heights array is 4 but our first non-zero element in 
the Hash array is still at 1 which means that this student of height 4 in the heights 
array is in the wrong location, matter of fact, we should have seen another student of 
height 1 here, as the hashHeights array suggests.

At this point we once again decrement the hashHeights value at index 1 from 1 to 0 now but 
this time we also increment our indices counter to 1 as it tracks the number of 
students in the incorrect location.
This is translated into code as shown below.

 */

function heightChecker(heights) {
    let hashHeights = new Map();
    let indices = 0;

    // create map of all heights occurences
    for(let height of heights) {
        if(hashHeights[height] === undefined) {
            hashHeights[height] = 1;
        } else {
            hashHeights[height]++;
        }
    }

    for(let i = 0; i < heights.length; i++) {
       for(let j = 1; j < 101; j++) {
           if(hashHeights[j] !== 0){
               if(heights[i] !== j) {
                    indices++;
               }
               hashHeights[j]--;
               break;
           }
       }
    }
 
    return indices;
 }

 /**
The Time complexity of this solution is O(100*n) ~ O(n) since the inner loop runs a fixed 
amount of 100 times.
The Space complexity of this solution is O(1) since we have a fixed number of variables 
defined.

  */