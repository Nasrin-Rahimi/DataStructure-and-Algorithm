/**
Write a function to see if a binary tree ↴ is "superbalanced" (a new tree property we just made up).

A tree is "superbalanced" if the difference between the depths of any two leaf nodes ↴ is no 
greater than one.

Here's a sample binary tree node class:
 */

class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insertLeft(value) {
      this.left = new BinaryTreeNode(value);
      return this.left;
    }
  
    insertRight(value) {
      this.right = new BinaryTreeNode(value);
      return this.right;
    }
}

/**
Breakdown

Sometimes it's good to start by rephrasing or "simplifying" the problem.

The requirement of "the difference between the depths of any two leaf nodes is no greater than 1" 
implies that we'll have to compare the depths of all possible pairs of leaves. That'd be expensive—if 
there are nn leaves, there are O(n^2) possible pairs of leaves.

But we can simplify this requirement to require less work. For example, we could equivalently say:

- "The difference between the min leaf depth and the max leaf depth is 1 or less"
- "There are at most two distinct leaf depths, and they are at most 1 apart"

If you're having trouble with a recursive approach, try using an iterative one.

To get to our leaves and measure their depths, we'll have to traverse the tree somehow. What 
methods do we know for traversing a tree?

Depth-first ↴ and breadth-first ↴ are common ways to traverse a tree. Which one should we use here?

The worst-case time and space costs of both are the same—you could make a case for either.

But one characteristic of our algorithm is that it could short-circuit and return false as soon as 
it finds two leaves with depths more than 1 apart. So maybe we should use a traversal that will hit
leaves as quickly as possible...

Depth-first traversal will generally hit leaves before breadth-first, so let's go with that. 
How could we write a depth-first walk that also keeps track of our depth?
 */

/**
Solution
We do a depth-first walk ↴ through our tree, keeping track of the depth as we go. When we find a leaf, 
we add its depth to an array of depths if we haven't seen that depth already.

Each time we hit a leaf with a new depth, there are two ways that our tree might now be unbalanced:

1- There are more than 2 different leaf depths
2- There are exactly 2 leaf depths and they are more than 1 apart.

Why are we doing a depth-first walk and not a breadth-first ↴ one? You could make a case for either. 
We chose depth-first because it reaches leaves faster, which allows us to short-circuit earlier in 
some cases.
 */

function isBalanced(treeRoot) {

    // A tree with no nodes is superbalanced, since there are no leaves!
    if (!treeRoot) {
      return true;
    }
  
    const depths = []; // We short-circuit as soon as we find more than 2
  
    // Nodes will store pairs of a node and the node's depth
    const nodes = [];
    nodes.push([treeRoot, 0]);
  
    while (nodes.length) {
  
      // Pop a node and its depth from the top of our stack
      const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];

    if (!node.left && !node.right) {

      // Сase: we found a leaf
      // We only care if it's a new depth
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);

        // Two ways we might now have an unbalanced tree:
        //   1) More than 2 different leaf depths
        //   2) 2 leaf depths that are more than 1 apart
        if (
          (depths.length > 2)
          || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
        ) {
          return false;
        }
      }
    } else {

      // Case: this isn't a leaf - keep stepping down
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }

  return true;
}