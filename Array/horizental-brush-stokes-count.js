/**
By given an array of integers, each element represents a building. For example: 
let buildings = [1, 4, 3, 2, 3, 1].

If we drew the buildings horizontally with a brush, how many brush strike we would use?

The function should return -1 if the number of strokes exceeds 100000000.
 */

/**
Solution1:
We can do it easily on run time O(n^2), by using 2 loops.

The external loop running on the levels of each building (according to the highest building).

The inner loop is running on the array from 0 to n, and compares the difference of the height (0 or 1) 
between two near elements.
 */

/**
Efficeint Solution: 
A brush stroke starts whenever the height increases going from left to right, and ends when it 
decreases. We only need to look at when it increases, because if we just count the starting points 
of each stroke we will have the stroke count. Instead of looping over the height levels in an inner 
loop, just subtract one height level from the previous to get the difference.

 */

function solution(buildings) {
    let brushCount = 0;
    let previousHeight = 0;

    for(let i = 0; i < buildings.length; i++) {
        if(buildings[i] > previousHeight) {
            brushCount = brushCount + (buildings[i] - previousHeight);
        }
        previousHeight = buildings[i];
    }

    return brushCount <= 100000000 ? brushCount : -1;
}

/**
Time Complexity = O(n)
 */