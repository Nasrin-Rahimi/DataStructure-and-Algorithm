/**
 * You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted 
with that node. If such a node does not exist, return null.

Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]

Input: root = [4,2,7,1,3], val = 5
Output: []

Binary Search Tree is a binary tree where the key in each node

is greater than any key stored in the left sub-tree,

and less than any key stored in the right sub-tree.
 */

let searchBST = function(root, val){
    if(root == null || root.val == val) {
        return root;
    }
  
    if(root.val > val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
}

/**
 * Time complexity : O(H), where H is a tree height. That results in O(logN) in the average 
 * case, and O(N) in the worst case.
 * 
 * Space complexity : O(H) to keep the recursion stack, i.e. O(logN) in the average case, 
 * and O(N) in the worst case.
 */