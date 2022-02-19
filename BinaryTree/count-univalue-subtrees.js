/**
 * Given the root of a binary tree, return the number of uni-value subtrees.

A uni-value subtree means all nodes of the subtree have the same value.

 Given a node in our tree, we know that it is a univalue subtree if it meets one of the following criteria:

The node has no children (base case)
All of the node's children are univalue subtrees, and the node and its children all have the same value.

Input: root = [5,1,5,5,5,null,5]
Output: 4

Input: root = []
Output: 0

Input: root = [5,5,5,5,5,null,5]
Output: 6
 */

class Node
{
    constructor(value)
    {
        this.value = value;
        this.left = this.right = null;
    }
}

let countUnivalSubtrees = function(root) {
    let count = 0;
	UnivalHelper(root, count);
    return count;
}

let UnivalHelper = function(node, count) {
    
	if(node == null) {
		return true;
    }

    // Recursively count in left and right subtrees
    let left = UnivalHelper(node.left, count);
    let right = UnivalHelper(node.right, count);

    // If any of the subtrees is not unival, then this
    // cannot be unival.
    if(left == false || right == false) {
        return false;
    }

    // If left subtree is unival and non-empty, but data
    // doesn't match
    if(node.left != null && node.value != node.left.value) {
        return false;
    }

    if(node.right != null && node.value != node.right.value) {
        return false;
    }

    // If none of the above conditions is true, then
    // tree rooted under root is unival, increment
    // count and return true.
    count++;
    return true;

}

root = new Node(5);
root.left = new Node(4);
root.right = new Node(5);
root.left.left = new Node(4);
root.left.right = new Node(4);
root.right.right = new Node(5);
console.log(root);
console.log(countUnivalSubtrees(root));


