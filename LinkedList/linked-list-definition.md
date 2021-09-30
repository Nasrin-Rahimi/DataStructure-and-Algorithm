Similar to the array, the linked list is also a linear data structure.

each element in the linked list is actually a separate object while all the objects are linked together by the reference field in each element.

There are two types of linked list: singly linked list and doubly linked list.

Each node in a singly-linked list contains not only the value but also a reference field to link to the next node. By this way, the singly-linked list organizes all the nodes in a sequence.

Unlike the array, we are not able to access a random element in a singly-linked list in constant time. If we want to get the ith element, we have to traverse from the head node one by one. It takes us O(N) time on average to visit an element by index, where N is the length of the linked list.

Tips:
1. Always examine if the node is null before you call the next field.
Getting the next node of a null node will cause the null-pointer error. For example, before 
we run fast = fast.next.next, we need to examine both fast and fast.next is not null.

2. Going through some test cases will save you time.

It is not easy to debug when using a linked list. Therefore, it is always useful to try several different examples on your own to validate your algorithm before writing code.

 3. Feel free to use several pointers at the same time.

Sometimes when you design an algorithm for a linked-list problem, there might be several nodes you want to track at the same time. You should keep in mind which nodes you need to track and feel free to use several different pointers to track these nodes at the same time.

If you use several pointers, it will be better to give them suitable names in case you have to debug or review your code in the future.

4. In many cases, you need to track the previous node of the current node.

You are not able to trace back the previous node in a singly linked list. So you have to store not only the current node but also the previous node. This is different in a doubly linked list.