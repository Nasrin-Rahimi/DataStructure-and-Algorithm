/**
 * Given the root of a binary tree, check whether it is a mirror of itself 
 * (i.e., symmetric around its center).

Input: root = [1,2,2,3,4,4,3]
Output: true

Input: root = [1,2,2,null,3,null,3]
Output: false
 */

/**
 * Approach 1: Recursive
A tree is symmetric if the left subtree is a mirror reflection of the right subtree.

Therefore, the question is: when are two trees a mirror reflection of each other?

Two trees are a mirror reflection of each other if:

Their two roots have the same value.
The right subtree of each tree is a mirror reflection of the left subtree of the other tree.

This is like a person looking at a mirror. The reflection in the mirror has the same head, 
but the reflection's right arm corresponds to the actual person's left arm, and vice versa.
 */

let isSymmetric = function(root) {
    return isMirror(root, root);
}

let isMirrot = function(t1, t2) {
    if(t1 == null && t2 == null) {
        return true;
    }
    if(t1 == null || t2 == null) {
        return false;
    }
    return (t1.val == t2.val)
        && isMirrot(t1.right, t2.left)
        && isMirror(t1.left, t2.right);
}

/**
 * Time complexity : O(n). Because we traverse the entire input tree once, the total run 
 * time is O(n), where n is the total number of nodes in the tree.

Space complexity : The number of recursive calls is bound by the height of the tree. In 
the worst case, the tree is linear and the height is in O(n). Therefore, space complexity 
due to recursive calls on the stack is O(n) in the worst case.

 */

/**
 * Approch 2: Iterative
 * Instead of recursion, we can also use iteration with the aid of a queue. Each two 
 * consecutive nodes in the queue should be equal, and their subtrees a mirror of each 
 * other. Initially, the queue contains root and root. Then the algorithm works 
 * similarly to BFS, with some key differences. Each time, two nodes are extracted 
 * and their values compared. Then, the right and left children of the two nodes are 
 * inserted in the queue in opposite order. The algorithm is done when either the queue 
 * is empty, or we detect that the tree is not symmetric (i.e. we pull out two consecutive 
 * nodes from the queue that are unequal).
 */

let isSymmetric2 = function(root) {
    let q = [];
    q.push(root);
    q.push(root);

    while(q.length > 0) {
        let t1 = q.pop();
        let t2 = q.pop();
        if(t1 == null && t2 == null) { continue; }
        if(t1 == null || t2 == null) { return false; }
        if(t1.val != t2.val) { return false; }
        q.push(t1.left);
        q.push(t2.right);
        q.push(t1.right);
        q.push(t2.left);
    }

    return true;
}