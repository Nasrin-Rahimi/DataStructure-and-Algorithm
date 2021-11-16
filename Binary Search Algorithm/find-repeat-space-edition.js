/**
Find a duplicate, Space Edition™.

We have an array of integers, where:

The integers are in the range 1..n
The array has a length of n+1

It follows that our array has at least one integer which appears at least twice. But it may have 
several duplicates, and each duplicate may appear more than twice.

Write a function which finds an integer that appears more than once in our array. Don't modify the 
input! (If there are multiple duplicates, you only need to find one of them.)

We're going to run this function on our new, super-hip MacBook Pro With Retina Display™. Thing is, 
the damn thing came with the RAM soldered right to the motherboard, so we can't upgrade our RAM. 
So we need to optimize for space!
 */

/**
Gotchas
We can do this in O(1) space.

We can do this in less than O(n^2) time while keeping O(1) space.

We can do this in O(nlgn) time and O(1) space.

We can do this without modifying the input.
Most O(nlgn) algorithms double something or cut something in half. How can we rule out half of the 
numbers each time we iterate through the array?
 */

/**
Breakdown
This one's a classic! We just do one walk through the array, using a set to keep track of which 
items we've seen!
 */

function findRepeat(numbers) {
    const numbersSeen = new Set();
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      if (numbersSeen.has(number)) {
        return number;
      }
      numbersSeen.add(number);
    }
  
    // Whoops--no duplicate
    throw new Error('no duplicate!');
}

/**
Bam. O(n) time and ... O(n) space ...

Right, we're supposed to optimize for space. O(n) is actually kinda high space-wise. Hm. We can 
probably get O(1)...
 */

/**
We can "brute force" this by taking each number in the range 1..n and, for each, walking through the 
array to see if it appears twice.
 */

function findRepeat(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if(i !== j && numbers[i] === numbers[j]) {
                return numbers[i];
            }
        }
    }
    // Whoops--no duplicate
    throw new Error('no duplicate!');
}

/**
This is O(1) space and O(n^2) time.

That space complexity can't be beat, but the time cost seems a bit high. Can we do better?
 */