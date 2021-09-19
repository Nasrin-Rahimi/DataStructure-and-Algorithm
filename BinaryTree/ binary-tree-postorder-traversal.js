/**
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 
Input: root = [1,null,2,3]
Output: [3,2,1]

Input: root = []
Output: []

Input: root = [1]
Output: [1]
 */

/*
Approch1 : Recursion
*/

let postorderTraversal = function(root) {

    let output = [];
    recursionPostorder(root, output);
    return output;
    
};

let recursionPostorder = function(root, output) {
    if(root != null) {
        if(root.left != null) {
            recursionPostorder(root.left, output);
        }
        if(root.right != null) {
            recursionPostorder(root.right, output);
        }
        output.push(root.val);
    }
}

/**
 * Time complexity : O(n). The time complexity is O(n) because the recursive function is 
  T(n) = 2⋅T(n/2)+1. = O(n)

Space complexity : The worst case space required is O(n), and in the average case it's 
O(logn) where n is number of nodes.

 */