/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.

Input: root = [1,null,2,3] (1 is root, it doesn't have left child, so it's null)
Output: [1,2,3]

Input: root = []
Output: []

Input: root = [1]
Output: [1]

Input: root = [1,2]
Output: [1,2]

Input: root = [1,null,2]
Output: [1,2]
 */

/*
There are two general strategies to traverse a tree:

Breadth First Search (BFS)
We scan through the tree level by level, following the order of height, from top to bottom. 
The nodes on higher level would be visited before the ones with lower levels.

Depth First Search (DFS)
In this strategy, we adopt the depth as the priority, so that one would start from a root 
and reach all the way down to certain leaf, and then back to root to reach another branch.
The DFS strategy can further be distinguished as preorder, inorder, and postorder depending 
on the relative order among the root node, left node and right node.

 */

let preorderTraversal = function(root) {
    console.log(root);
    preorderTraversal(root.left);
    preorderTraversal(root.right);
}