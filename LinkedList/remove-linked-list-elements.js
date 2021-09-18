/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list 
that has Node.val == val, and return the new head.

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Input: head = [], val = 1
Output: []

Input: head = [7,7,7,7], val = 7
Output: []
*/

/*
Approach 1: Sentinel Node
The problem seems to be very easy if one has to delete a node in the middle:
Pick the node-predecessor prev of the node to delete.
Set its next pointer to point to the node next to the one to delete.

The things are more complicated when the node or nodes to delete are in the head of 
linked list.

Sentinel nodes are widely used in trees and linked lists as pseudo-heads, pseudo-tails, 
markers of level end, etc. They are purely functional, and usually does not hold any data. 
Their main purpose is to standardize the situation, for example, make linked list to be 
never empty and never headless and hence simplify insert and delete.

Algorithm

Initiate sentinel node as ListNode(0) and set it to be the new head: sentinel.next = head.

Initiate two pointers to track the current node and its predecessor: curr and prev.

While curr is not a null pointer:

Compare the value of the current node with the value to delete.

In the values are equal, delete the current node: prev.next = curr.next.

Otherwise, set predecessor to be equal to the current node.

Move to the next node: curr = curr.next.

Return sentinel.next.

*/

let removeElements = function(head, val) {
    let sentinel = new ListNode(0);
    sentinel.next = head;
    
    let cur = head, prev = sentinel;
    
    while(cur != null) {
        if(cur.val === val) {
            prev.next = cur.next;
        } else {
            prev = cur;
        }
        cur = cur.next;
    }
    
    return sentinel.next;
}
/*
Time complexity: O(N), it's one pass solution.
Space complexity: O(1), it's a constant space solution.
*/

