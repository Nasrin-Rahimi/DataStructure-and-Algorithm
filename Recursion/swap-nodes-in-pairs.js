/**
 * Given a linked list, swap every two adjacent nodes and return its head. You must solve 
 * the problem without modifying the values in the list's nodes (i.e., only nodes 
 * themselves may be changed.)
 * 
 * Input: head = [1,2,3,4]
Output: [2,1,4,3]

Input: head = []
Output: []

Input: head = [1]
Output: [1]
 */

/**
 Approch 1: Recursion
 The basic intuition is to reach to the end of the linked list in steps of two using 
 recursion. and while back tracking the nodes can be swapped.
 In every function call we take out two nodes which would be swapped and the remaining nodes 
passed to the next recursive call. The reason we are adopting a recursive approach here 
is because a sub-list of the original list would still be a linked list and hence, it 
would adapt to our recursive strategy. Assuming the recursion would return the swapped 
remaining list of nodes, we just swap the current two nodes and attach the remaining list 
we get from recursion to these two swapped pairs.

Algorithm

Start the recursion with head node of the original linked list.

Every recursion call is responsible for swapping a pair of nodes. Let's represent the 
two nodes to be swapped by firstNode and secondNode.

Next recursion is made by calling the function with head of the next pair of nodes. 
This call would swap the next two nodes and make further recursive calls if there are 
nodes left in the linked list.

Once we get the pointer to the remaining swapped list from the recursion call, we can 
swap the firstNode and secondNode i.e. the nodes in the current recursive call and then 
return the pointer to the secondNode since it will be the new head after swapping.

 */

let swapPairs = function(head) {
       // If the list has no node or has only one node left.
    if ((head == null) || (head.next == null)) {
        return head;
    }

    // Nodes to be swapped
    let firstNode = head;
    let secondNode = head.next;

    // Swapping
    firstNode.next  = swapPairs(secondNode.next);
    secondNode.next = firstNode;

    // Now the head is the second node
    return secondNode;

}

/**
 * Time Complexity: O(N) where NN is the size of the linked list.
Space Complexity: O(N) stack space utilized for recursion.
 */