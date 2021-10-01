/**
 * Gevin the root of the binary tree and a target node, find the shortest path from the root 
 * node to the target node.  
 * */ 

/**
 * Approch 1 :
 *  Two main scenarios of using BFS: do traversal or find the shortest path.
 * 
 * we can do BFS algoritm with queue.
 * at first enque the root to queue. Then in each round, we process the nodes which 
 * are already in the queue one by one and add all their neighbors to the queue.
 * 
 * If a node X is added to the queue in the kth round, the length of the shortest path 
 * between the root node and X is exactly k. 
 */

let BFS = function(root, target) {
    
    if(root == null) {
        return null;
    }

    let step = 0;  // number of steps neeeded from root to current node
    let queue = [];
    // let visited = new Set();
    queue.push(root.val);
    visited.add(root);

    while(queue.length != null) {
        step = step + 1;
        for(let i = 0; i < queue.length; i++) {
            let cur =  queue.shift();
            if(cur == target) {
                return step;
            }
            if(cur.left != null) {
                queue.push(cur.left);
                //visited.add(cur.left);
            }
            if(cur.right != null) {
                queue.push(cur.right);
                //visited.add(cur.right);
            }
        }
    }

    return -1;
    
}

/**
 * Sometimes, it is important to make sure that we never visit a node twice. Otherwise, 
 * we might get stuck in an infinite loop, e.g. in graph with cycle. If so, we can add a 
 * hash set to the code above to solve this problem.
 * 
 * There are some cases where one does not need keep the visited hash set:

1- You are absolutely sure there is no cycle, for example, in tree traversal;
2- You do want to add the node to the queue multiple times.
 */