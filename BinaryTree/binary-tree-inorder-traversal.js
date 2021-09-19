/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Input: root = [1,null,2,3]
Output: [1,3,2]

Input: root = []
Output: []

Input: root = [1]
Output: [1]

Input: root = [1,2]
Output: [2,1]
*/

/*
Approch1 : Recursion
*/

let inorderTraversal = function(root) {
    let output = [];
    recursionInorder(root, output);
    return output;
};

let recursionInorder = function(root, output) {
    if(root != null){
        if(root.left != null) {
            recursionInorder(root.left, output);
        }
        output.push(root.val);
        if(root.right != null) {
            recursionInorder(root.right,output);
        }
    }
}

/**
 * Time complexity : O(n). The time complexity is O(n) because the recursive function is 
  T(n) = 2⋅T(n/2)+1. = O(n)

Space complexity : The worst case space required is O(n), and in the average case it's 
O(logn) where n is number of nodes.

 */


