/**
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a 
 * root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true

Input: root = [1,2,3], targetSum = 5
Output: false

Input: root = [1,2], targetSum = 0
Output: false
 */

/**
 * Approach 1: Recursion
The most intuitive way is to use a recursion here. One is going through the tree by considering 
at each step the node itself and its children. If node is not a leaf, one calls recursively 
hasPathSum method for its children with a sum decreased by the current node value. If node is 
a leaf, one checks if the the current sum is zero, i.e if the initial sum was discovered.

 
 */
var hasPathSum = function(root, targetSum) { 
    if(root == null) {
        return false;
    }

    targetSum -= root.val;

    if(root.left == null && root.right == null) {
        return (targetSum == 0)
    }
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}

/**
 * Time complexity : we visit each node exactly once, thus the time complexity 
 * is O(N), where N is the number of nodes.
Space complexity : in the worst case, the tree is completely unbalanced, e.g. each node has
 only one child node, the recursion call would occur N times (the height of the tree), therefore 
 the storage to keep the call stack would be O(N). But in the best case (the tree is completely 
    balanced), the height of the tree would be log(N). Therefore, the space complexity in this 
    case would be O(log(N)).

 */