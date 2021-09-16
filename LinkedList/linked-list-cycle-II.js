/*
Given the head of a linked list, return the node where the cycle begins. If there is 
no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached 
again by continuously following the next pointer. Internally, pos is used to denote the 
index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there
 is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.
*/

/*
Approch 1: Using Hash set.
start from the head and visit all nodes, when visit any node, add it to the hash set.
If a node is exist in hash set, it shows the list has a circle and this is the first
node of circle, so return that.
*/

let detectCycle = function(head) {
   let visited = new Set();

   while(head !== null) {
       if(visited.has(head)) {
           return head;
       }
       visited.add(head);
       head = head.next;
   }
   return null;
};

/*
Time Complexity : O(N)
Space Complexity : O(N)

It's not efficint solution because use extra space.
*/

/*
Approch 1: 2 pointer
We have two steps, first find if the list has circle or not with slow and fast pointer.
then find the first node in the circle, if there is a circle
*/

let getIntersect = function(head) {
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            return slow;
        }
    }

    return null;
}

let detectCycle2 = function(head) {
    if(head === null) {
        return null;
    }

    let intersect = getIntersect(head);

    if(intersect === null) {
        return null;
    }

    // To find the entrance to the cycle, we have two pointers traverse at
    // the same speed -- one from the front of the list, and the other from
    // the point of intersection.
    let ptr1 = head;
    let ptr2 = intersect;

    while(ptr1 !== ptr2) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    return ptr1;
}

