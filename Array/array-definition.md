An array is a basic data structure to store a collection of elements sequentially. But elements can be accessed randomly since each element in the array can be identified by an array index.

Strengths:
Fast lookups. Retrieving the element at a given index takes O(1) time, regardless of the length of the array.
Fast appends. Adding a new element at the end of the array takes O(1) time, if the array has space.

Weaknesses:
Fixed size. You need to specify how many elements you're going to store in your array ahead of time. (Unless you're using a fancy dynamic array.)
Costly inserts and deletes. You have to "scoot over" the other elements to fill in or close gaps, which takes worst-case O(n) time.

	    Worst Case
space	O(n)
lookup	O(1)
append	O(1)
insert	O(n)
delete	O(n)

Inserting
If we want to insert something into an array, first we have to make space by "scooting over" everything starting at the index we're inserting into

In the worst case we're inserting into the 0th index in the array (prepending), so we have to "scoot over" everything in the array. That's O(n) time.

Deleting
Array elements are stored adjacent to each other. So when we remove an element, we have to fill in the gap—"scooting over" all the elements that were after it:

In the worst case we're deleting the 0th item in the array, so we have to "scoot over" everything else in the array. That's O(n) time.

Why not just leave the gap? Because the quick lookup power of arrays depends on everything being sequential and uninterrupted. This lets us predict exactly how far from the start of the array the 138th or 9,203rd item is. If there are gaps, we can no longer predict exactly where each array item will be.

An array can have one or more dimensions. one-dimensional array, called the linear array.

An array has a fixed capacity and we need to specify the size of the array when we initialize it. Sometimes this will be somewhat inconvenient and wasteful.

Therefore, most programming languages offer built-in dynamic array which is still a random access list data structure but with variable size. For example, we have vector in C++ and ArrayList in Java.

Dynamic Array in JavaScript means either increasing or decreasing the size of the array automatically. JavaScript is not typed dependent so there is no static array. JavaScript directly allows array as dynamic only. By adding element to array, the size of array will be increased and by deleting elment from array, the size of array will be decreased. 

 2D Array
Similar to a one-dimensional array, a two-dimensional array also consists of a sequence of elements. But the elements can be laid out in a rectangular grid rather than a line.

In some languages, the multidimensional array is actually implemented internally as a one-dimensional array while in some other languages, there is actually no multidimensional array at all.

Don't want to specify the size of your array ahead of time? One option: use a dynamic array.

Want to look up items by something other than an index? Use a dictionary.

Two-pointer Technique - Scenario I:
We solve some problems by iterating the array. Typically, we only use one pointer starting from the first element and ending at the last one to do iteration. However, sometimes, we might need to use two pointers at the same time to do the iteration. For example for Reverse the elements in an array.

The idea is to swap the first element with the end, advance to the next element and swapping repeatedly until it reaches the middle position. 

We can use two pointers at the same time to do the iteration: one starts from the first element and another starts from the last element. Continue swapping the elements until the two pointers meet each other.

To summarize, one of the typical scenarios to use two-pointer technique is that you want to

Iterate the array from two ends to the middle.

So you can use the two-pointer technique:

One pointer starts from the beginning while the other pointer starts from the end.

And it is worth noting that this technique is often used in a sorted array.

*****************************

Array slicing involves taking a subset from an array and allocating a new array with those elements.

Careful: there's a hidden time and space cost here! It's tempting to think of slicing as just "getting elements," but in reality you are:

1- allocating a new list
2- copying the elements from the original list to the new list

This takes O(n) time and O(n) space, where nn is the number of elements in the resulting list.

*****************************
In-Place Algorithm
In-place algorithms are sometimes called destructive, since the original input is "destroyed" (or modified) during the function call.

Careful: "In-place" does not mean "without creating any additional variables!" Rather, it means "without creating a new copy of the input." In general, an in-place function will only create additional variables that are O(1) space.

An out-of-place function doesn't make any changes that are visible to other functions. Usually, those functions copy any data structures or objects before manipulating and changing them.

Working in-place is a good way to save time and space. An in-place algorithm avoids the cost of initializing or copying data structures, and it usually has an O(1) space cost.

But be careful: an in-place algorithm can cause side effects. Your input is "destroyed" or "altered," which can affect code outside of your function. 

Generally, out-of-place algorithms are considered safer because they avoid side effects. You should only use an in-place algorithm if you're space constrained or you're positive you don't need the original input anymore, even for debugging.
*****************************

 Two-pointer Technique - Scenario II:

 Sometimes, we can use two pointers with different steps to solve problems. For example Given an array and a value, remove all instances of that value in-place and return the new length.

 If we don't have the limitation of space complexity, it will be easier. We can initialize a new array to store the answer. Iterate the original array and add the element to the new array if the element is not equal to the given target value.

Actually, it is equivalent to using two pointers, one is used for the iteration of the original array and another one always points at the last position of the new array.

Now let's reconsider the space limitation.

We can use a similar strategy. We still use two pointers: one is still used for the iteration while the second one always points at the position for next addition.

We use two pointers, one faster-runner i and one slower-runner k, in the example above. i moves one step each time while k moves one step only if a new needed value is added.

Why we use two pointer?
Two pointers help us cover a subarray or miniarray with in the main array.








