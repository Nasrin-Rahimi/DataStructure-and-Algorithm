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

/**
Approach 2: Iterations
Algorithm

We could also convert the above recursion into iteration, with the help of stack. DFS would be 
better than BFS here since it works faster except the worst case. In the worst case the path 
root->leaf with the given sum is the last considered one and in this case DFS results in the 
same productivity as BFS.

The idea is to visit each node with the DFS strategy, while updating the remaining sum to 
cumulate at each visit.

So we start from a stack which contains the root node and the corresponding remaining sum which 
is sum - root.val. Then we proceed to the iterations: pop the current node out of the stack and 
return True if the remaining sum is 0 and we're on the leaf node. If the remaining sum is not 
zero or we're not on the leaf yet then we push the child nodes and corresponding remaining sums 
into stack.
*/

    var hasPathSum = function(root, targetSum) {
        if(root == null) {
             return false;
         }
         
         
         let stack = [], sumStack = [];
         
         stack.push(root);
         sumStack.push(targetSum - root.val);
         
         let node, curSum;
         
         while(stack.length > 0) {
             node = stack.pop();
             curSum = sumStack.pop();
             if(node.left == null && node.right == null && curSum == 0) {
                 return true;
             }
             if(node.right != null) {
                 stack.push(node.right);
                 sumStack.push(curSum - node.right.val);
             }
              if(node.left != null) {
                 stack.push(node.left);
                 sumStack.push(curSum - node.left.val);
             }
         }
        return false;
     }

/**
 * Time complexity : the same as the recursion approach O(N).
Space complexity : O(N) since in the worst case, when the tree is completely unbalanced, e.g. 
each node has only one child node, we would keep all N nodes in the stack. But in the best 
case (the tree is balanced), the height of the tree would be log(N). Therefore, the 
space complexity in this case would be O(log(N)).
 */