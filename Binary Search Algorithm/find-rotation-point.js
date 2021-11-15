/**
I want to learn some big words so people think I'm smart.

I opened up a dictionary to a page in the middle and started flipping through, looking for words I 
didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. 
When I reached the end of the dictionary, I started from the beginning and did the same thing until I 
reached the page I started at.

Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle 
of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, 
this is an alphabetically ordered array that has been "rotated." For example:

  const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

Write a function for finding the index of the "rotation point," which is where I started working 
from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so 
we want to be efficient here.

To keep things simple, you can assume all words are lowercase.

 */

/**
Gotchas
We can get O(lgn) time.

Breakdown
The array is mostly ordered. We should exploit that fact.

What's a common algorithm that takes advantage of the fact that an array is sorted to find an item 
efficiently?

Binary search! ↴ We can write an adapted version of binary search for this.

In each iteration of our binary search, ↴ how do we know if the rotation point is to our left or 
to our right?

Try drawing out an example array!

  words = ['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i'];
                               ^

If our "current guess" is the middle item, which is 'c' in this case, is the rotation point to the 
left or to the right? How do we know?

Notice that every item to the right of our rotation point is always alphabetically before the first 
item in the array.

So the rotation point is to our left if the current item is less than the first item. Else it's to 
our right.
 */ 

/**
Solution
This is a modified version of binary search. ↴ At each iteration, we go right if the item we're looking 
at is greater than the first item and we go left if the item we're looking at is less than the first 
item.

We keep track of the lower and upper bounds on the rotation point, calling them floorIndex and 
ceilingIndex (initially we called them "floor" and "ceiling," but because we didn't imply the type 
in the name we got confused and created bugs). When floorIndex and ceilingIndex are directly next to 
each other, we know the floor is the last item we added before starting from the beginning of the 
dictionary, and the ceiling is the first item we added after.
 */

function findRotationPoint(words) {
    const firstWord = words[0];
  
    let floorIndex = 0;
    let ceilingIndex = words.length - 1;
  
    while (floorIndex < ceilingIndex) {
  
      // Guess a point halfway between floor and ceiling
      const guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));
  
      // If guess comes after first word or is the first word
      if (words[guessIndex] >= firstWord) {
  
        // Go right
        floorIndex = guessIndex;
      } else {
  
        // Go left
        ceilingIndex = guessIndex;
      }
  
      // If floor and ceiling have converged
      if (floorIndex + 1 === ceilingIndex) {
  
        // Between floor and ceiling is where we flipped to the beginning
        // so ceiling is alphabetically first
        break;
      }
    }

    return ceilingIndex;
}