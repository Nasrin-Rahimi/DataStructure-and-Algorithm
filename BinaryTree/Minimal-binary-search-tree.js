/**
Given a sorted(increasing order) array with unique integer elements, write an algorithm to create a 
binary search tree with minimal height.
 */

/**
Hint1: A minimal binary tree has about the same number of nodes on the left of each node as on the right.
Let's focus on just the root now. How would you ensure that about the same number of nodes are on the
left of the root as on the right?

Hint2: You could implement this by finding the ideal next element to add and repeatedly calling
insertValue. This will be a bit inefficient, as you would have to repeatedly traverse the tree. 
Try recursion instead. Can you devide this problem into subproblems?

Hint 3: Imagine we had a createMinimalTree method that returns a minimal tree for a given array(but for
some strange reason doesn't operate on the root of the tree) Could you use this to operate on the root
of the tree? Could you write the base case for the function? Great! The that's basically the entire
function!
 */

/**
To create a tree with minimal height, we need to match the number of nodes in the left subtree to the 
number of nodes in the right subtree as much as possible. This mean that we want the root to be the middle
of the array, since this would mean that half the elements would be less than the root and half would
be greater than it.

We proceed with constructing our tree in a similar fasion. The middle of each subsection of the array 
becomes the root of the node. The left half of the array will become our left subarray, and the right
half of the array will become the right subarray.

One way to implement this is to use a simple root.insertNode(v) method which inserts the value v
through the recursive process that start with the root node. This will indeed contsrtuct the tree
with minimal height but it will not do so very efficiently. Each insertion will require traversing
the tree, giving a total cost of  O(nlogn) to the tree.

Alternatively, we can cut out the extra traversal by recursively using the createMinimalBST method.
This method is passed just a subsection of the array and returns the root of a a minimal tree for
that array.

The algorithm is as follows:
1- Insert into the tree the middle element of the array.
2- Insert to the left subtree the left subarray elements.
3- Insert to the right subtree the right subarray elements.
4- Recurse.
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
}

function createMinimalBST(array) {
    let root = null;
    root = createMinimalBSTHelper(array, 0, array.length - 1);
    return root;
}

function createMinimalBSTHelper(array, start, end) {
    //base case
    if(end < start) {
        return null;
    }

    /* Get the middle element and make it root */
    const mid = parseInt((start + end) / 2);
    const node = new TreeNode(array[mid]);
    /* Recursively construct the left subtree and make it
     left child of root */
    node.left = createMinimalBSTHelper(array, start, mid - 1);
    /* Recursively construct the right subtree and make it
     right child of root */
    node.right = createMinimalBSTHelper(array, mid + 1, end);
    return node;
}

//The below is just for testing

/* A utility function to print preorder traversal of BST */
function preOrder(node)
{
    if (node == null)
    {
        return;
    }
    //document.write(node.value + " ");
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const root = createMinimalBST(arr);
//document.write("Preorder traversal of constructed BST<br>");
console.log("Preorder traversal of constructed BST");
preOrder(root);

/**
Time Complexity: O(n)
 */