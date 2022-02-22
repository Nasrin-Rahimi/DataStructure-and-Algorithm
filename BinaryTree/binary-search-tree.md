A binary search tree is a binary tree where the nodes are ordered in a specific way. For every node:

The nodes to the left are smaller than the current node.
The nodes to the right are larger than the current node.

	    Balanced	Unbalanced (Worst Case)
space	O(n)	    O(n)
insert	O(lg(n))	O(n)
lookup	O(lg(n))	O(n)
delete	O(lg(n))	O(n)

Checking if a binary tree is a binary search tree is a favorite question from interviews.

Draw a below array in a binary tree:

[50, 17, 72, 12, 23, 54, 76, 9, 14, 19,null, null, 67]

Strengths:

Good performance across the board. Assuming they're balanced, binary search trees are good at lots of 
operations, even if they're not constant time for anything.

Compared to a sorted array, lookups take the same amount of time O(lg(n))), but inserts and deletes 
are faster O(lg(n)) for BSTs, O(n) for arrays).

Compared to objects, BSTs have better worst case performance—O(lg(n)) instead of O(n). But, 
on average objects perform better than BSTs (meaning O(1) time complexity).

BSTs are sorted. Taking a binary search tree and pulling out all of the elements in sorted order 
can be done in O(n) using an in-order traversal. Finding the element closest to a value can be 
done in O(lg(n)) (again, if the BST is balanced!).

Weaknesses:

Poor performance if unbalanced. Some types of binary search trees balance automatically, but not all. 
If a BST is not balanced, then operations become O(n).

No O(1) operations. BSTs aren't the fastest for anything. On average, an array or an object will 
be faster.

Balanced Binary Search Trees
Two binary search trees can store the same values in different ways:

[4, 2, 5, 1, 3, null, 6]
[1, null, 2, null, 3, null, 4, null, 5]

Some trees (like AVL trees or Red-Black trees) rearrange nodes as they're inserted to ensure the
tree is always balanced. With these, the worst case complexity for searching, inserting, or 
deleting is always O(lg(n)), not O(n).

