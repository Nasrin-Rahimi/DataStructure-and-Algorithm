/**
 * given a binary tree, find its maximum depth.
 */

/**
 * We know that the depth of the root node is 1. For each node, if we know its depth, 
 * we will know the depth of its children. Therefore, if we pass the depth of the node 
 * as a parameter when calling the function recursively, all the nodes will know their 
 * depth. And for leaf nodes, we can use the depth to update the final answer. 
 * 
 * 1. return if root is null
2. if root is a leaf node:
3.     answer = max(answer, depth)         // update the answer if needed
4. maximum_depth(root.left, depth + 1)     // call the function recursively for left child
5. maximum_depth(root.right, depth + 1)    // call the function recursively for right child
 */

let maxDepth = 0;

let maximumDepth = function(root, depth) {
    if(root == null) {
        return;
    }
    if(root.left == null && root.right == null) {
        maxDepth = Math.max(maxDepth, depth);
    }
    maximumDepth(root.left, depth + 1);
    maximumDepth(root.right, depth + 1);
}