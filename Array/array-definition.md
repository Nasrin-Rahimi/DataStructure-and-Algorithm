An array is a basic data structure to store a collection of elements sequentially. But elements can be accessed randomly since each element in the array can be identified by an array index.

An array can have one or more dimensions. Here we start with the one-dimensional array, which is also called the linear array.

An array has a fixed capacity and we need to specify the size of the array when we initialize it. Sometimes this will be somewhat inconvenient and wasteful.

Therefore, most programming languages offer built-in dynamic array which is still a random access list data structure but with variable size. For example, we have vector in C++ and ArrayList in Java.

Dynamic Array in JavaScript means either increasing or decreasing the size of the array automatically. JavaScript is not typed dependent so there is no static array. JavaScript directly allows array as dynamic only. By addin element to array, the size of array will be increased and by deleting elment from array, the size of array will be decreased. 

 2D Array
Similar to a one-dimensional array, a two-dimensional array also consists of a sequence of elements. But the elements can be laid out in a rectangular grid rather than a line.

In some languages, the multidimensional array is actually implemented internally as a one-dimensional array while in some other languages, there is actually no multidimensional array at all.

Two-pointer Technique - Scenario I:
We solve some problems by iterating the array. Typically, we only use one pointer starting from the first element and ending at the last one to do iteration. However, sometimes, we might need to use two pointers at the same time to do the iteration. For example for Reverse the elements in an array.

The idea is to swap the first element with the end, advance to the next element and swapping repeatedly until it reaches the middle position. 

We can use two pointers at the same time to do the iteration: one starts from the first element and another starts from the last element. Continue swapping the elements until the two pointers meet each other.

To summarize, one of the typical scenarios to use two-pointer technique is that you want to

Iterate the array from two ends to the middle.

So you can use the two-pointer technique:

One pointer starts from the beginning while the other pointer starts from the end.

And it is worth noting that this technique is often used in a sorted array.

 Two-pointer Technique - Scenario II:

 Sometimes, we can use two pointers with different steps to solve problems. For example Given an array and a value, remove all instances of that value in-place and return the new length.

 If we don't have the limitation of space complexity, it will be easier. We can initialize a new array to store the answer. Iterate the original array and add the element to the new array if the element is not equal to the given target value.

Actually, it is equivalent to using two pointers, one is used for the iteration of the original array and another one always points at the last position of the new array.

Now let's reconsider the space limitation.

We can use a similar strategy. We still use two pointers: one is still used for the iteration while the second one always points at the position for next addition.

We use two pointers, one faster-runner i and one slower-runner k, in the example above. i moves one step each time while k moves one step only if a new needed value is added.








