/**
Write a function to check that a binary tree ↴ is a valid binary search tree. ↴
 */

/**
Solution1: Simple but Wrong!
For each node, check if the left node of it is smaller than the node and right node of it is 
greater than the node.
 */

function isBST(node)
{
    if (node == null)
        return true;
      
    /* False if left is > than node */
    if (node.left != null && node.left.value > node.value)
        return false;
      
    /* False if right is < than node */
    if (node.right != null && node.right.value < node.value)
        return false;
      
    /* False if, recursively, the left or right is not a BST */
    if (!isBST(node.left) || !isBST(node.right))
        return false;
      
    /* Passing all that, it's a BST */
    return true;
}

/**
This approach is wrong as this will return true for below binary tree (and below tree is not a 
BST because 4 is in left subtree of 3) 
[3, 2, 5, 1, 4] (draw it as a binary tree)
 */
 