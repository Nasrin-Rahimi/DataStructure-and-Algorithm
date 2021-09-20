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

let output = [];

let levelOrderHelper = function(node, level) {
     // start the current level
    if(output.length == level) {
        output.push([]);
    }
      // fulfil the current level
    output[level].push(node.val);

     // process child nodes for the next level
    if (node.left != null)
        levelOrderHelper(node.left, level + 1);
    if (node.right != null)
        levelOrderHelper(node.right, level + 1);
}

let levelOrder = function(root) {
    output = [];

    if (root == null) {
        return output;
    }
    levelOrderHelper(root, 0);
    return output;
}

/**
Time complexity : O(N) since each node is processed exactly once.

Space complexity : O(N) to keep the output structure which contains N node values.

*/

/**
Approach 2: Iteration

Let's keep nodes of each tree level in the queue structure, which typically orders 
elements in a FIFO (first-in-first-out) manner. 
The zero level contains only one node root. The algorithm is simple :

Initiate queue with a root and start from the level number 0 : level = 0.
While queue is not empty :
Start the current level by adding an empty list into output structure levels.
Compute how many elements should be on the current level : it's a queue length.
Pop out all these elements from the queue and add them into the current level.
Push their child nodes into the queue for the next level.
Go to the next level level++.

*/

let levelOrder2 = function(root) {
    let que = [];
    let output = [];
    
    if(root == null) {
        return output;
    }
    
    que.push(root);
    
    while(que.length > 0) {
        let levelLen = que.length;
        
        let subOutput = [];
        for(let i = 0; i < levelLen; i++) {
            let cur = que.shift();
            subOutput.push(cur.val);
            
            if(cur.left != null) {
                que.push(cur.left);
            }
            if(cur.right != null) {
                que.push(cur.right);
            }
        }
        output.push(subOutput);
    }
    
    return output;
    
}
/**
 
Since each node in the tree will be pushed into the queue exactly once, the time complexity 
for level-order traversal is O(N), where N is the total number of nodes in the tree.

What about the space complexity? We have to maintain a queue to help us to do the traversal. 
And the size of the queue will be at most N because each node will be pushed into the 
queue exactly once. Therefore, the space complexity of level-order traversal is also O(N).
 */
