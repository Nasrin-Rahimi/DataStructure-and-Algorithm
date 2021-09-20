/**
Given the root of a binary tree, return the level order traversal of its nodes' values.

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Input: root = [1]
Output: [[1]]

Input: root = []
Output: []
 
*/
/** 
Approach 1: Recursion

The simplest way to solve the problem is to use a recursion. Let's first ensure that the 
tree is not empty, and then call recursively the function helper(node, level), which takes 
the current node and its level as the arguments.

This function does the following :
The output list here is called levels, and hence the current level is just a length of 
this list len(levels). Compare the number of a current level len(levels) with a node level 
level. If you're still on the previous level - add the new one by adding a new list into 
levels.

Append the node value to the last list in levels.

Process recursively child nodes if they are not None : helper(node.left / node.right, level + 1).
*/ 

let levels = [];

let levelOrderHelper = function(node, level) {
     // start the current level
    if(levels.length == level) {
        levels.push([]);
    }
      // fulfil the current level
    levels[level].push(node.val);

     // process child nodes for the next level
    if (node.left != null)
        levelOrderHelper(node.left, level + 1);
    if (node.right != null)
        levelOrderHelper(node.right, level + 1);
}

let levelOrder = function(root) {
    levels = [];

    if (root == null) {
        return levels;
    }
    levelOrderHelper(root, 0);
    return levels;
}

/**
Time complexity : O(N) since each node is processed exactly once.

Space complexity : O(N) to keep the output structure which contains N node values.

*/
