/**
Counting is a common pattern in time-saving algorithms. It can often get you O(n) runtime, but at 
the expense of adding O(n) space.

The idea is to define an object or array (call it e.g. counts) where the keys/indices represent 
the items from the input set and the values represent the number of times the item appears. 
In one pass through the input you can fully populate counts:
 */


const counts = {};
array.forEach(item => {
  if (counts.hasOwnProperty(item)) {
    counts[item] += 1;
  } else {
    counts[item] = 1;
  }
});

/**
Once you know how many times each item appears, it's trivial to:

- generate a sorted array
- find the item that appears the most times
- etc.
 */