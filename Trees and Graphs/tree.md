Tree:

- Each tree has a root
- The root node has zero or more child nodes.
- Each child node has zero or more child nodes and so on.

The tree can't hav cycles. The nodes may or may not be in particular order, they could have 
any datatype as value.

class Node {
    constructor(value) {
        this.value = value;
        this.child = [];
    }
}

class Tree {
    constructor(node) {
        this.root = node;
    }
}

- A node is called leaf nope if it has no children.

Binary Tree vs. Binary Search Tree:

Binary search tree is a kind of binary tree that:

All left descendents <= n < all right descendents. This must true for each node n.

Complete Binary Tree:
It's a binary tree in which every level of the tree is fully filled, except for perhaps the 
last level. To the extend that the last level is filled, it is filled left to right.

Full Binray Tree:
It's a binary tree in which every node has either zero or two children. That is, no nodes have
only one child.

Perfect Binary Tree:
It's a binary tree where all interior nodes have two child and all leaf node are at the same level.
As a perfect tree must have exactly 2^h - 1 nodes (where h is number of levels)