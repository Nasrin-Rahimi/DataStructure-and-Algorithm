/**
 * Pascal's triangle are a series of numbers arranged in the shape of triangle. In Pascal's 
 * triangle, the leftmost and the rightmost numbers of each row are always 1. For the 
 * rest, each number is the sum of the two numbers directly above it in the previous row.
 * 
 * define a function f(i, j) which returns the number in the Pascal's Triangle 
 * in the i-th row and j-th column.
 */


/**
 * 
 Approch 1 : Recursion
 we should have two items for solving problems with recusrion.
 1- Recurrence Relation:
 we define a function f(i, j) which returns the number in the Pascal's Triangle in 
 the i-th row and j-th column.
 We then can represent the recurrence relation with the following formula:
f(i, j) = f(i - 1, j - 1) + f(i - 1, j)
2- Base Case:
the leftmost and rightmost numbers of each row are the base cases in this problem, 
which are always equal to 1. As a result, we can define the base case as follows:

f(i,j) = 1 where j = 1 or j = i

Starting from f(5, 3), we can break it down as f(5, 3) = f(4, 2) + f(4, 3), we then call 
f(4, 2) and f(4, 3) recursively:
For the call of f(4, 2), we could extend it further until we reach the base cases, as 
follows:
f(4,2)=f(3,1)+f(3,2)=f(3,1)+(f(2,1)+f(2,2))=1+(1+1)=3

For the call of f(4, 3), similarly we break it down as:

f(4,3)=f(3,2)+f(3,3)=(f(2,1)+f(2,2))+f(3,3)=(1+1)+1=3

Finally we combine the results of the above subproblems:
f(5,3)=f(4,2)+f(4,3)=3+3=6

Note : you might have noticed that the recursive solution can incur some duplicate 
calculations,
 */
let pascalTriangleNumber = function(i, j) {
    if(j == 1 || j == i) {
        return 1;
    }
    return pascalTriangleNumber(i - 1, j - 1) 
         + pascalTriangleNumber(i - 1, j);
}