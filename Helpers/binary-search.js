/**
A binary search algorithm finds an item in a sorted array in O(lg(n)) time.

A brute force search would walk through the whole array, taking O(n) time in the worst case.

Let's say we have a sorted array of numbers. To find a number with a binary search, we:

Start with the middle number: is it bigger or smaller than our target number? Since the 
array is sorted, this tells us if the target would be in the left half or the right half 
of our array.
We've effectively divided the problem in half. We can "rule out" the whole half of the 
array that we know doesn't contain the target number.
Repeat the same approach (of starting in the middle) on the new half-size problem. Then 
do it again and again, until we either find the number or "rule out" the whole set.
We can do this recursively, or iteratively. Here's an iterative version:

 */

function binarySearch(target, nums) {

    // See if target appears in nums
  
    // We think of floorIndex and ceilingIndex as "walls" around
    // the possible positions of our target, so by -1 below we mean
    // to start our wall "to the left" of the 0th index
    // (we *don't* mean "the last index")
    let floorIndex = -1;
    let ceilingIndex = nums.length;
  
    // If there isn't at least 1 index between floor and ceiling,
    // we've run out of guesses and the number must not be present
    while (floorIndex + 1 < ceilingIndex) {
  
      // Find the index ~halfway between the floor and ceiling
      // We have to round down, to avoid getting a "half index"
      const distance = ceilingIndex - floorIndex;
      const halfDistance = Math.floor(distance / 2);
      const guessIndex = floorIndex + halfDistance;
      const guessValue = nums[guessIndex];

      if (guessValue === target) {
        return true;
      }
  
      if (guessValue > target) {
  
        // Target is to the left, so move ceiling to the left
        ceilingIndex = guessIndex;
      } else {
  
        // Target is to the right, so move floor to the right
        floorIndex = guessIndex;
      }
    }
  
    return false;
  }  