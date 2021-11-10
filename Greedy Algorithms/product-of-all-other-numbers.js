/**
You have an array of integers, and for each index you want to find the product of 
every integer except the integer at that index.

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers 
and returns an array of the products.

For example, given:
  [1, 7, 3, 4]

your function would return:
  [84, 12, 28, 21]

by calculating:
  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Here's the catch: You can't use division in your solution!
 */

/**
Breakdown
A brute force approach would use two loops to multiply the integer at every index by 
the integer at every nestedIndex, unless index === nestedIndex.

This would give us a runtime of O(n^2). Can we do better?

Well, we’re wasting a lot of time doing the same calculations. As an example, let's take:

// input array
[1, 2, 6, 5, 9]

// array of the products of all integers except the integer at each index:
[540, 270, 90, 108, 60]  // [2 * 6 * 5 * 9,  1 * 6 * 5 * 9,  1 * 2 * 5 * 9,  1 * 2 * 6 * 9,
1 * 2 * 6 * 5]

We're doing some of the same multiplications two or three times!

When we calculate [2*6*5*9, 1*6*5*9, 1*2*5*9, 1*2*6*9, 1*2*6*5], we're calculating 
5*9 three times: at indices 0, 1, and 2.

Or look at this pattern:

When we calculate [2*6*5*9, 1*6*5*9, 1*2*5*9, 1*2*6*9, 1*2*6*5], we have 1 in index 1, 
and we calculate 1*2 at index 2, 1*2*6 at index 3, and 1*2*6*5 at index 4.
We’re redoing multiplications when instead we could be storing the results! This would 
be a great time to use a greedy ↴ approach. We could store the results of each multiplication 
highlighted in blue, then just multiply by one new integer each time.

So in the last highlighted multiplication, for example, we wouldn’t have to multiply 
1*2*6 again. If we stored that value (12) from the previous multiplication, we could just 
multiply 12*5.

Can we break our problem down into subproblems so we can use a greedy approach?

Let's look back at the last example:

When we calculate [2*6*5*9, 1*6*5*9, 1*2*5*9, 1*2*6*9, 1*2*6*5], we have 1 in index 1, 
and we calculate 1*2 at index 2, 1*2*6 at index 3, and 1*2*6*5 at index 4.
What do all the highlighted multiplications have in common?

They are all the integers that are before each index in the input array ([1, 2, 6, 5, 9])
For example, the highlighted multiplication at index 3 (1*2*6) is all the integers before 
index 3 in the input array.

In the pattern where we calculate 1*2 at index 2, 1*2*6 at index 3, and 1*2*6*5 at index 4, 
each calculation is the product of all the numbers before the number at that index. 
For example, 5 is at index 3, and 1*2*6 is the product of all the numbers before 5 in the 
input array.
Do all the multiplications that aren't highlighted have anything in common?

Yes, they're all the integers that are after each index in the input array!

Knowing this, can we break down our original problem to use a greedy approach?

The product of all the integers except the integer at each index can be broken down into 
two pieces:

the product of all the integers before each index, and
the product of all the integers after each index.

To start, let's just get the product of all the integers before each index.

How can we do this? Let's take another example:

// input array
[3, 1, 2, 5, 6, 4]

// multiplication of all integers before each index
// (we give index 0 a value of 1 since it has no integers before it)
[1, 3,  3 * 1,  3 * 1 * 2,  3 * 1 * 2 * 5,  3 * 1 * 2 * 5 * 6]

// final array of the products of all the integers before each index
[1, 3, 3, 6, 30, 180]

Notice that we're always adding one new integer to our multiplication for each index!

So to get the products of all the integers before each index, we could greedily store each 
product so far and multiply that by the next integer. Then we can store that new product 
so far and keep going.

So how can we apply this to our input array?

Let’s make an array productsOfAllIntsBeforeIndex:

const productsOfAllIntsBeforeIndex = [];

// For each integer, find the product of all the integers
// before it, storing the total product so far each time
let productSoFar = 1;
for (let i = 0; i < intArray.length; i++) {
  productsOfAllIntsBeforeIndex[i] = productSoFar;
  productSoFar *= intArray[i];
}


 */