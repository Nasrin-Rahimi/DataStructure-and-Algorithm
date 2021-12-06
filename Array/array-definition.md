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

*****************************

Inserting
If we want to insert something into an array, first we have to make space by "scooting over" everything starting at the index we're inserting into

In the worst case we're inserting into the 0th index in the array (prepending), so we have to "scoot over" everything in the array. That's O(n) time.

*****************************

Deleting
Array elements are stored adjacent to each other. So when we remove an element, we have to fill in the gap—"scooting over" all the elements that were after it.

In the worst case we're deleting the 0th item in the array, so we have to "scoot over" everything else in the array. That's O(n) time.

Why not just leave the gap? Because the quick lookup power of arrays depends on everything being sequential and uninterrupted. This lets us predict exactly how far from the start of the array the 138th or 9,203rd item is. If there are gaps, we can no longer predict exactly where each array item will be.

*****************************

An array can have one or more dimensions. one-dimensional array, called the linear array.

An array has a fixed capacity and we need to specify the size of the array when we initialize it. Sometimes this will be somewhat inconvenient and wasteful.

Therefore, most programming languages offer built-in dynamic array which is still a random access list data structure but with variable size. For example, we have vector in C++ and ArrayList in Java.

Dynamic Array in JavaScript means either increasing or decreasing the size of the array automatically. JavaScript is not typed dependent so there is no static array. JavaScript directly allows array as dynamic only. By adding element to array, the size of array will be increased and by deleting elment from array, the size of array will be decreased. 

Other names for dynamic array:
array list, growable array, resizable array, mutable array


    Average Case	Worst Case
space	O(n)	    O(n)
lookup	O(1)	    O(1)
append	O(1)	    O(n)
insert	O(n)	    O(n)
delete	O(n)	    O(n)

Strengths:
Fast lookups. Just like arrays, retrieving the element at a given index takes O(1) time.
Variable size. You can add as many items as you want, and the dynamic array will expand to hold them.
Cache-friendly. Just like arrays, dynamic arrays place items right next to each other in memory, making efficient use of caches.

Weaknesses:
Slow worst-case appends. Usually, adding a new element at the end of the dynamic array takes O(1) time. But if the dynamic array doesn't have any room for the new item, it'll need to expand, which takes O(n) time.
Costly inserts and deletes. Just like arrays, elements are stored adjacent to each other. So adding or removing an item in the middle of the array requires "scooting over" other elements, which takes O(n) time.

*****************************

Size vs. Capacity
When you allocate a dynamic array, your dynamic array implementation makes an underlying fixed-size array. The starting size depends on the implementation—let's say our implementation uses 10 indices. Now say we append 4 items to our dynamic array. At this point, our dynamic array has a length of 4. But the underlying array has a length of 10.

We'd say this dynamic array's size is 4 and its capacity is 10. The dynamic array stores an end_index to keep track of where the dynamic array ends and the extra capacity begins.

Doubling Appends
What if we try to append an item but our array's capacity is already full?

To make room, dynamic arrays automatically make a new, bigger underlying array. Usually twice as big.

Why not just extend the existing array? Because that memory might already be taken by another program.

Each item has to be individually copied into the new array.

Copying each item over costs O(n) time! So whenever appending an item to our dynamic array forces us to make a new double-size underlying array, that append takes O(n) time.

That's the worst case. But in the best case (and the average case), appends are just O(1) time.

Amortized cost of appending
The time cost of each special O(n) "doubling append" doubles each time.
At the same time, the number of O(1) appends you get until the next doubling append also doubles.
These two things sort of "cancel out," and we can say each append has an average cost or amortized cost of O(1). 

Given this, in industry we usually wave our hands and say dynamic arrays have a time cost of 
O(1) for appends, even though strictly speaking that's only true for the average case or the amortized cost.

*****************************
 2D Array
Similar to a one-dimensional array, a two-dimensional array also consists of a sequence of elements. But the elements can be laid out in a rectangular grid rather than a line.

In some languages, the multidimensional array is actually implemented internally as a one-dimensional array while in some other languages, there is actually no multidimensional array at all.

Don't want to specify the size of your array ahead of time? One option: use a dynamic array.

Want to look up items by something other than an index? Use a dictionary.

*****************************

Array slicing involves taking a subset from an array and allocating a new array with those elements.

Careful: there's a hidden time and space cost here! It's tempting to think of slicing as just "getting elements," but in reality you are:

1- allocating a new list
2- copying the elements from the original list to the new list

This takes O(n) time and O(n) space, where n is the number of elements in the resulting list.

*****************************
In-Place Algorithm
In-place algorithms are sometimes called destructive, since the original input is "destroyed" (or modified) during the function call.

Careful: "In-place" does not mean "without creating any additional variables!" Rather, it means "without creating a new copy of the input." In general, an in-place function will only create additional variables that are O(1) space.

An out-of-place function doesn't make any changes that are visible to other functions. Usually, those functions copy any data structures or objects before manipulating and changing them.

Working in-place is a good way to save time and space. An in-place algorithm avoids the cost of initializing or copying data structures, and it usually has an O(1) space cost.

But be careful: an in-place algorithm can cause side effects. Your input is "destroyed" or "altered," which can affect code outside of your function. 

Generally, out-of-place algorithms are considered safer because they avoid side effects. You should only use an in-place algorithm if you're space constrained or you're positive you don't need the original input anymore, even for debugging.

*****************************

Two-pointer Technique - Scenario I:
We solve some problems by iterating the array. Typically, we only use one pointer starting from the first element and ending at the last one to do iteration. However, sometimes, we might need to use two pointers at the same time to do the iteration. For example for Reverse the elements in an array.

We can use two pointers at the same time to do the iteration: one starts from the first element and another starts from the last element. Continue swapping the elements until the two pointers meet each other.

To summarize, one of the typical scenarios to use two-pointer technique is that you want to

Iterate the array from two ends to the middle.

So you can use the two-pointer technique:

One pointer starts from the beginning while the other pointer starts from the end.

And it is worth noting that this technique is often used in a sorted array.

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








