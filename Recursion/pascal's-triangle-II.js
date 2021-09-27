/**
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it 

Input: rowIndex = 3
Output: [1,3,3,1]

Input: rowIndex = 0
Output: [1]

Input: rowIndex = 1
Output: [1,1]
 */

/**
 * Approach 1: Brute Force Recursion
In Pascal's triangle, each number is the sum of the two numbers directly above it.

Let's say we had a function getNum(rowIndex, colIndex), which gave us the colIndexth 
number in the rowIndexth row, we could simply build the kth row by repeatedly calling 
getNum(...) for columns 0 to k.

  getNum(rowIndex, colIndex) = getNum(rowIndex-1, colIndex-1) + getNum(rowIndex-1, colIndex)

The recursion ends in some known base cases:

The first row is just a single 1, i.e. getNum(0, ...) = 1

The first and last number of each row is 1, i.e. 
getNum(k, 0) = getNum(k, k) = 1

 */

let getNum = function(row, col) {
    if(row == 0 || col == 0 || col == row) {
        return 1;
    }
    return getNum(row - 1, col - 1) + getNum(row - 1, col);
}

var getRow = function(rowIndex) {
    
    let output = [];
    
    //In each row there is row + 1 column.
    for(let i = 0; i <= rowIndex; i++) {
        output.push(getNum(rowIndex, i));
    }
    
    return output;
};

/**
 * Time complexity : O(2^k) where k is the given Row Index.
 * T(k,i) = T(k−1,i) + T(k−1,i−1) + O(1)
 Space complexity : O(k) + O(k) ≃ O(k). 
 We need O(k) space to store the output of the kth row.
At worst, the recursive call stack has a maximum of k calls in memory, each call taking constant 
space. That's O(k) worst case recursive call stack space.

 */

/**
  * Approach 2: Dynamic Programming
  * 
  * In the previous approach, we end up making the same recursive calls repeatedly.
  * It makes sense to store the results of intermediate recursive calls for later use.
  * Simple memoization caches results of deep recursive calls and provides significant 
  * savings on runtime.
  */

 let map = new Map();

 let getRow = function(rowIndex) {
     let res = new Array(rowIndex + 1);

     for(let i = 0; i < res.length; i++) {
         res[i] = getNum(rowIndex, i);
     }

     return res;
 }

 let getNum = function(row, col) {
    if(map.has(row, col)) {
        return map.get(row, col);
    }

    let num = (row == 0 || col == 0 || row == col) ? 1 : getNum(row - 1, col - 1) + getNum(row - 1 + col);
    map.set((row, col), num);
    return num;
 }

 /**
  * But, it is worth noting that generating a number for a particular row requires only two
  *  numbers from the previous row. Consequently, generating a row only requires numbers from 
  * the previous row.
  * 
Thus, we could reduce our memory footprint by only keeping the latest row generated, and use 
that to generate a new row.
  */

/**
 * Approach 3: Memory-efficient Dynamic Programming
 */

let getRow = function(rowIndex) {
    let res = [];

    for(let i = 0 ; i <= rowIndex; i++) {
        res.unshift(1);
        for(let j = 1; j < i; j++) {
            res[j] += res[j + 1];
        }
    }
    return res;
}

/**
 * Complexity:

Time complexity : O(n^2).
Space complexity : O(n).
 */

 
