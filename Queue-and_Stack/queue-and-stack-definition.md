Queue:
In a FIFO data structure (Queue), the first element added to the queue will be processed first.

	    Worst Case
space	O(n)
enqueue	O(1)
dequeue	O(1)
peek	O(1)

Strengths:
Fast operations. All queue operations take O(1) time.

Uses
1- Breadth-first search uses a queue to keep track of the nodes to visit next.
2- Printers use queues to manage jobs—jobs get printed in the order they're submitted.
3- Web servers use queues to manage requests—page requests get fulfilled in the order they're received.
4- Processes wait in the CPU scheduler's queue for their turn to run.

Implementation
Queues are easy to implement with linked lists:

To enqueue, insert at the tail of the linked list.
To dequeue, remove at the head of the linked list.

You could implement a queue with an array or dynamic array and an index pointing to the head 
of the queue, but it would get kinda messy. 
Try drawing it out. You'll notice that you'd need to build out a "scoot over" or "re-center" 
operation that automatically fires when your queue items hit the bottom edge of the array.

As mentioned, a queue should support two operations: enqueue and dequeue. Enqueue appends a 
new element to the queue while dequeue removes the first element. So we need an index to 
indicate the starting point.

Let's consider a situation when we are only able to allocate an array whose maximum length 
is 5. Our solution works well when we have only added less than 5 elements. For example, 
if we only called the enqueue function four times and we want to enqueue an element 10, 
we will succeed.

And it is reasonable that we can not accept more enqueue request because the queue is 
full now. But what if we dequeue an element?  We remove element from the first of array 
and have size but we cann't add any element because the end of array is full.

A more efficient way is to use a circular queue. Specifically, we may use a fixed-size 
array and two pointers to indicate the starting position and the ending position. 
And the goal is to reuse the wasted storage we mentioned previously.



Stack:

A stack stores items in a last-in, first-out (LIFO) order.

Picture a pile of dirty plates in your sink. As you add more plates, you bury the old ones 
further down. When you take a plate off the top to wash it, you're taking the last plate 
you put in. "Last in, first out."


	    Worst Case
space	O(n)
enqueue	O(1)
dequeue	O(1)
peek	O(1)

Strengths:
Fast operations. All stack operations take O(1) time.

Uses:
 1-The call stack is a stack that tracks function calls in a program. When a function returns, 
which function do we "pop" back to? The last one that "pushed" a function call.
2- Depth-first search uses a stack (sometimes the call stack) to keep track of which nodes to 
visit next.
3- String parsing—stacks turn out to be useful for several types of string parsing.

Implementation
You can implement a stack with either a linked list or a dynamic array—they both work pretty 
well:

                  Stack Push	     Stack Pop
Linked Lists	insert at head	   remove at head
Dynamic Arrays	append	remove     last element