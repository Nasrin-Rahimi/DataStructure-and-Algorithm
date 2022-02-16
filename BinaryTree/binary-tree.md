Binary Tree:

A binary tree is a tree where every node has two or fewer children. The children are usually 
called left and right.

/* Definition for a binary tree node. */
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }
}

If every level of the tree is completely full, there are no "gaps." (all nodes have two child) 
We call this kind of tree "perfect."

Binary trees have a few interesting properties when they're perfect:

Property 1: the number of total nodes on each "level" doubles as we move down the tree. 
level 1 has 1 node
level 2 has 2 nodes
level 3 has 4 nodes
level 4 has 8 nodes ...

Property 2: the number of nodes on the last level is equal to the sum of the number of nodes 
on all other levels (plus 1). In other words, about half of our nodes are on the last level.

Let's call the number of nodes n, and the height of the tree h. h can also be thought of 
as the "number of levels."

If we had h, how could we calculate n?

Let's just add up the number of nodes on each level! How many nodes are on each level?

If we zero-index the levels, the number of nodes on the xth level is exactly 2^x.

Level 0: 2^0 nodes,
Level 1: 2^1 nodes,
Level 2: 2^2 nodes,
Level 3: 2^3 nodes,
etc

So our total number of nodes is:

n = 2^0 + 2^1 + 2^2 + 2^3 + ... + 2^(h−1)

Why only up to 2^{h-1}? Notice that we started counting our levels at 0. So if we have h levels 
in total, the last level is actually the "h-1"-th level. That means the number of nodes on the 
last level is 2^{h-1}.

But we can simplify. Property 2 tells us that the number of nodes on the last level is (1 more than)
half of the total number of nodes, so we can just take the number of nodes on the last level, 
multiply it by 2, and subtract 1 to get the number of nodes overall. We know the number of nodes on 
the last level is 2^{h-1}, So:

n = 2^(h-1) * 2 - 1
n = 2^(h-1) * 2^1 - 1
n = 2^(h-1+1) - 1
n = 2^h - 1

So that's how we can go from h to n. What about the other direction?

We need to bring the h down from the exponent. That's what logs are for!

First, some quick review. log 10(100) simply means, "What power must you raise 10 to in order to 
get 100?". Which is 2, because 10^2 = 100.

We can use logs in algebra to bring variables down from exponents by exploiting the fact that 
we can simplify log 10(10^2). What power must we raise 10 to in order to get 10^2? 
That's easy—it's 2.

So in this case we can take the log 2 of both sides:

n = 2^h - 1
n + 1 = 2^h
log2 ((n+1)) = log2 (2^h)
log2 (n+1) = h

So that's the relationship between height and total nodes in a perfect binary tree.

**********************************************************************************
Binary Tree from Leetcode:

Each node of the tree will have a root value and a list of references to other nodes which are 
called child nodes. From graph view, a tree can also be defined as a directed acyclic graph which 
has N nodes and N-1 edges.

Pre-order Traversal
Pre-order traversal is to visit the root first. Then traverse the left subtree. Finally, traverse 
the right subtree.

In-order Traversal
In-order traversal is to traverse the left subtree first. Then visit the root. Finally, traverse 
the right subtree.

Typically, for binary search tree, we can retrieve all the data in sorted order using in-order 
traversal. 

Post-order Traversal
Post-order traversal is to traverse the left subtree first. Then traverse the right subtree. 
Finally, visit the root.

It is worth noting that when you delete nodes in a tree, deletion process will be in post-order. 
That is to say, when you delete a node, you will delete its left child and its right child before
you delete the node itself.

Also, post-order is widely use in mathematical expression. It is easier to write a program to parse 
a post-order expression. 

There are two general strategies to traverse a tree:

Breadth First Search (BFS)
We scan through the tree level by level, following the order of height, from top to bottom. 
The nodes on higher level would be visited before the ones with lower levels.

Depth First Search (DFS)
In this strategy, we adopt the depth as the priority, so that one would start from a root 
and reach all the way down to certain leaf, and then back to root to reach another branch.
The DFS strategy can further be distinguished as preorder, inorder, and postorder depending 
on the relative order among the root node, left node and right node.

we can solve a tree problem recursively using a top-down approach or using a bottom-up approach.

"Top-down" Solution
"Top-down" means that in each recursive call, we will visit the node first to come up with some 
values, and pass these values to its children when calling the function recursively. So the 
"top-down" solution can be considered as a kind of preorder traversal. To be specific, the 
recursive function top_down(root, params) works like this:

1. return specific value for null node
2. update the answer if needed                      // answer <-- params
3. left_ans = top_down(root.left, left_params)      // left_params <-- root.val, params
4. right_ans = top_down(root.right, right_params)   // right_params <-- root.val, params
5. return the answer if needed                      // answer <-- left_ans, right_ans

For instance, consider this problem: given a binary tree, find its maximum depth.

We know that the depth of the root node is 1. For each node, if we know its depth, we will know 
the depth of its children. Therefore, if we pass the depth of the node as a parameter when 
calling the function recursively, all the nodes will know their depth. And for leaf nodes, we 
can use the depth to update the final answer. Here is the pseudocode for the recursive function 
maximum_depth(root, depth):

1. return if root is null
2. if root is a leaf node:
3.     answer = max(answer, depth)         // update the answer if needed
4. maximum_depth(root.left, depth + 1)     // call the function recursively for left child
5. maximum_depth(root.right, depth + 1)    // call the function recursively for right child

"Bottom-up" Solution
"Bottom-up" is another recursive solution. In each recursive call, we will firstly call the 
function recursively for all the children nodes and then come up with the answer according to 
the returned values and the value of the current node itself. This process can be regarded as 
a kind of postorder traversal. Typically, a "bottom-up" recursive function bottom_up(root) will 
be something like this:

1. return specific value for null node
2. left_ans = bottom_up(root.left)      // call function recursively for left child
3. right_ans = bottom_up(root.right)    // call function recursively for right child
4. return answers                       // answer <-- left_ans, right_ans, root.val

Let's go on discussing the question about maximum depth but using a different way of thinking: 
for a single node of the tree, what will be the maximum depth x of the subtree rooted at itself?

If we know the maximum depth l of the subtree rooted at its left child and the maximum depth r 
of the subtree rooted at its right child, can we answer the previous question? Of course yes, 
we can choose the maximum between them and add 1 to get the maximum depth of the subtree rooted 
at the current node. That is x = max(l, r) + 1.

It means that for each node, we can get the answer after solving the problem for its children. 
Therefore, we can solve this problem using a "bottom-up" solution. Here is the pseudocode for 
the recursive function maximum_depth(root):

1. return 0 if root is null                 // return 0 for null node
2. left_depth = maximum_depth(root.left)
3. right_depth = maximum_depth(root.right)
4. return max(left_depth, right_depth) + 1  // return depth of the subtree rooted at root

When you meet a tree problem, ask yourself two questions: Can you determine some parameters to 
help the node know its answer? Can you use these parameters and the value of the node itself to 
determine what should be the parameters passed to its children? If the answers are both yes, try 
to solve this problem using a "top-down" recursive solution.

Or, you can think of the problem in this way: for a node in a tree, if you know the answer of its 
children, can you calculate the answer of that node? If the answer is yes, solving the problem 
recursively using a bottom up approach might be a good idea.



