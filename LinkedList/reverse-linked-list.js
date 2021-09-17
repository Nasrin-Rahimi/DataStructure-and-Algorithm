/*
Reverse a singly linked list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

/*
Approch1: Iterative
iterate the nodes in original order and move them to the head of the list one by one

23 --> 6 --> 15 --> null

1- 6 --> 23 -------> 15 --> null
2- 15 --> 6 ---> 23 ------> null
3. The next node of the 23 node now is null. So we stop and return our new head node 15.

While you are traversing the list, change the current node's next pointer to point to its 
previous element. Since a node does not have reference to its previous node, you must 
store its previous element beforehand. You also need another pointer to store the next 
node before changing the reference. Do not forget to return the new head reference at the end!
*/

let reverseList = function(head) {
    let cur = head;
    let prev = null
    while(cur !== null) {
        let nextTemp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nextTemp;
    }

    return prev;
}



/*
In this algorithm, each node will be moved exactly once.

Therefore, the time complexity is O(N), where N is the length of the linked list. 
We only use constant extra space so the space complexity is O(1).
*/