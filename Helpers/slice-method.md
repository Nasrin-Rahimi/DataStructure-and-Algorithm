Array slicing involves taking a subset from an array and allocating a new array with those elements.

In JavaScript you can create a new array of the elements in myArray, from startIndex to endIndex (exclusive), like this:

  myArray.slice(startIndex, endIndex);

You can also get everything from startIndex onwards by just omitting endIndex:

  myArray.slice(startIndex);

Careful: there's a hidden time and space cost here! It's tempting to think of slicing as just "getting elements," but in reality you are:

1- allocating a new array
2- copying the elements from the original array to the new array

This takes O(n) time and O(n) space, where nn is the number of elements in the resulting array.

That's a bit easier to see when you save the result of the slice to a variable:

  const tailOfArray = myArray.slice(1);

But a bit harder to see when you don't save the result of the slice to a variable:

  return myArray.slice(1);
// Whoops, I just spent O(n) time and space!

  myArray.slice(1).forEach(item => {
  // Whoops, I just spent O(n) time and space!
});

So keep an eye out. Slice wisely.