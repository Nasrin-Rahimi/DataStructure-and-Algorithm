/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.

Input: root = [1,null,2,3] (1 is root, it doesn't have left child, so it's null)
Output: [1,2,3]

Input: root = []
Output: []

Input: root = [1]
Output: [1]

Input: root = [1,2]
Output: [1,2]

Input: root = [1,null,2]
Output: [1,2]
 */

/*
There are two general strategies to traverse a tree:

Breadth First Search (BFS)
We scan through the tree level by level, following the order of height, from top to bottom. 
The nodes on higher level would be visited before the ones with lower levels.

Depth First Search (DFS)
In this strategy, we adopt the depth as the priority, so that one would start from a root 
and reach all the way down to certain leaf, and then back to root to reach another branch.
The DFS strategy can further be distinguished as preorder, inorder, and postorder depending 
on the relative order among the root node, left node and right node.

 */

/*
Approch1 : Iterations
Let's start from the root and then at each iteration pop the current node out of the stack 
and push its child nodes. In the implemented strategy we push nodes into output list 
following the order Top->Bottom and Left->Right, that naturally reproduces preorder traversal.
*/

let preorderTraversal = function(root) {
  let output = [];
  let stack = [];
  
  if(root == null) {
      return output;
  }

  stack.push(root);

  while(stack.length > 0) {
      root = stack.pop();
      output.push(root.val);
      if(root.right != null) {
          stack.push(root.right);
      }
      if(root.left != null) {
          stack.push(root.left);
      }
  }
  return output;

}

/*
Time complexity : we visit each node exactly once, thus the time complexity is O(N), 
where N is the number of nodes, i.e. the size of tree.

Space complexity : depending on the tree structure, we could keep up to the entire tree, 
therefore, the space complexity is O(N).  
*/

/*
Approch2 : Recursion
As with all tree problems like this... if this input is small enough for the call stack, 
the recursive form is always fastest
*/

let preorderTraversal2 = function(root) {
  let output = [];
  recursionPreorder(root, output);
  return output;
}

let recursionPreorder = function(root, output) {
    if(root != null) {
        output.push(root.val);
        if(root.left != null) {
            recursionPreorder(root.left, output);
        }
        if(root.right != null) {
            recursionPreorder(root.right, output);
        }
    }
}

/**
 * Time complexity : O(n). The time complexity is O(n) because the recursive function is 
  T(n) = 2⋅T(n/2)+1. = O(n)

Space complexity : The worst case space required is O(n), and in the average case it's 
O(logn) where n is number of nodes.

we can traverse a tree recursively to retrieve all the data in pre-order, in-order or 
post-order. The time complexity is O(N) because we visit each node exactly once. And the 
depth of the tree might be N in the worst case. That is to say, the level of recursion 
might be at most N in the worst case. Therefore, taking system stack into consideration, 
the space complexity is O(N) as well.

To be cautious, the complexity might be different due to a different implementation. 
It is comparatively easy to do traversal recursively but when the depth of the tree is too 
large, we might suffer from stack overflow problem. That's one of the main reasons why we 
want to solve this problem iteratively sometimes. 

For the iterative solution, the time complexity is apparently the same with recursion 
solution which is O(N). The space complexity is also O(N) since in the worst case, we will 
have all the nodes in the stack. There are some other solutions for iterative traversal 
which can reduce the space complexity to O(1).
 */

