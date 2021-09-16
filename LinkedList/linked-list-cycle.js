/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached 
again by continuously following the next pointer. Internally, pos is used to denote the 
index of the node that tail's next pointer is connected to. Note that pos is not passed
 as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st 
node (0-indexed).

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

*/

/*
Approch 1: Using Hash set.
start from the head and visit all nodes, when visit any node, add it to the hash set.
If a node is exist in hash set, it shows the list has a circle and return true.
*/
let hasCycle = function(head) {
    //set object in js is like hash set in c#
    let visited = new Set();

    while (head !== null) {
        if (visited.has(head)) {
            return true;
        }
        visited.add(head);
        head = head.next;
    }

    return false;
};

/*
Time Complexity : O(N)
Space Complexity : O(N)

It's not efficint solution because use extra space.
*/

/*
Approch 1: Using 2 pointers
create 2 pointers one is slow and the other is fast pointer. Both pointers start from 
the head. each step slow pointer move 1 and fast pointer moves 2. if the fast pointer 
reach to null(end of list)(for even size of linked list) or fast pointer next reach to
null (for odd size of linked list) the list doesn't have any cycle.

If slow and fast pointer meet each other in some point, list has a cycle.

*/

let hasCycle = function(head) {
    let slow = head;
    let fast = head;

    //the order of below conditions is important
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            return true;
        }
    }

    return false;
}

/*
Time Complexity : O(N)
Space Complexity : O(1) we are not using any extra space

N : total # of nodes
M : # of nodes in cycle

always N >= M
O(N + M) = O(N)

*/

