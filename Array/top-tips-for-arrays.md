1- Array problems often have simple brute-force solution that use O(n) space, but there are 
subtler solutions that use the array itself to reduce space complexity to O(1).

2- Filling an array from the front is slow, so see if it's possible to write values 
from the back.

3- Instead of deleting an entry(which requires moving all entries to its left) condider
overwriting it.

4- When dealing with integers encoded by an array, consider processing the digits form 
the back of the array. Alternately, reverse the array so the least significant digit is
the first entry.

5- Be comfortable with writing code that operate on subarrays.

