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
        recursionPostorder(root.left, output);
        recursionPostorder(root.right, output);
        output.push(root.val);
    }
}

/**
 * Time complexity : O(n). The time complexity is O(n) because the recursive function is 
  T(n) = 2⋅T(n/2)+1. = O(n)

Space complexity : The worst case space required is O(n), and in the average case it's 
O(logn) where n is number of nodes.

 */

/**
 * Approch2 : Iteration
 * This is similar to Inorder using 1 Stack. The difference is we keep track of the 
 * previously printed node in pre. And we only print a node if its right child is null 
 *  or equal to pre.
Push all left nodes into the stack till it hits NULL.
root = s.peek()
if root.right = null or pre (Means we have traversed the right subtree already)
We print root and pop it from s.
Make pre = root
root = null (So we dont go down to left child again)
else
root = root.right (Traverse the right subtree before printing root)
Keep iterating till both the below conditions are met -
Stack is empty and
Root is NULL.
 */

 let postorderTraversal = function(root) {
    
    let output = [];
    let stack = [];

    if(root == null) {
        return output;
    }

    let prev = null;
    let cur = root;

    while(cur != null || stack.length > 0) {
        if(cur != null) {
            stack.push(cur);
            cur = cur.left;
        }
        else{
             //cur = stack.peek();
            cur = stack[stack.length - 1];
            if(cur.right == null || cur.right == prev) {
                output.push(cur.val);
                stack.pop();
                prev = cur;
                cur = null;
            }
            else {
                cur = cur.right;
            }
        }
    }
   

    return output;

 }