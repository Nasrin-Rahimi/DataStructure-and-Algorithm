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
number in the rowIndexth row, we could simply build the k^{th}k 
th
  row by repeatedly calling getNum(...) for columns 0 to k.

  getNum(rowIndex, colIndex) = getNum(rowIndex-1, colIndex-1) + getNum(rowIndex-1, colIndex)

The recursion ends in some known base cases:

The first row is just a single 11, i.e. getNum(0, ...) = 1

The first and last number of each row is 11, i.e. getNum(k, 0) = getNum(k, k) = 1}getNum(k, 0) = getNum(k, k) = 1

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
 * Time complexity : O(2^k)
 Space complexity : O(k) + O(k) ≃ O(k). 
 */

 /** */