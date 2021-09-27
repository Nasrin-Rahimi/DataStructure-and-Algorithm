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
have all the nodes in the stack. 

There are some other solutions for iterative traversal 
which can reduce the space complexity to O(1). like Morris traversal
 */

/**
 * Approch 3:
 * Using Morris Traversal, we can traverse the tree without using stack and recursion. In this 
 * traversal, we first create links to Inorder successor and print the data using these links, 
 * and finally revert the changes to restore original tree. 
 * 
 * 1. Initialize current as root 
2. While current is not NULL
   If the current does not have left child
      a) Print current’s data
      b) Go to the right, i.e., current = current->right
   Else
      a) Find rightmost node in current left subtree OR
              node whose right child == current.
         If we found right child == current
             a) Update the right child as NULL of that node whose right child is current
             b) Print current’s data
             c) Go to the right, i.e. current = current->right
         Else
             a) Make current as the right child of that rightmost 
                node we found; and 
             b) Go to this left child, i.e., current = current->left
 */

             /* Function to traverse a
       binary tree without recursion
       and without stack */
function MorrisTraversal(root)
{
    let current, pre;
  
        if (root == null)
            return;
  
        current = root;
        while (current != null)
        {
            if (current.left == null)
            {
                document.write(current.data + " ");
                current = current.right;
            }
            else {
                /* Find the inorder
                    predecessor of current
                 */
                pre = current.left;
                while (pre.right != null
                       && pre.right != current)
                    pre = pre.right;
  
                /* Make current as right
                   child of its
                 * inorder predecessor */
                   if (pre.right == null) {
                    pre.right = current;
                    current = current.left;
                }
  
                /* Revert the changes made
                   in the 'if' part
                   to restore the original
                   tree i.e., fix
                   the right child of predecessor*/
                else
                {
                    pre.right = null;
                    document.write(current.data + " ");
                    current = current.right;
                } /* End of if condition pre->right == NULL
                   */
  
            } /* End of if condition current->left == NULL*/
  
        } /* End of while */
}
 

