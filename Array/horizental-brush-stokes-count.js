/**
By given an array of integers, each element represents a building. For example: 
int buildings[] = {1, 4, 3, 2, 3, 1}.

If we drew the buildings horizontally with a brush, how many brush strike we would use?

 */

/**
Solution1:
We can do it easily on run time O(n^2), by using 2 loops.

The external loop running on the levels of each building (according to the highest building).

The inner loop is running on the array from 0 to n, and compares the difference of the height (0 or 1) 
between two near elements.
 */