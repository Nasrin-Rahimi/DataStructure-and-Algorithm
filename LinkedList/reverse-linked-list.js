/** 
Reverse a singly linked list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

/** 
Approch1: Iterative

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



/** 
In this algorithm, each node will be moved exactly once.

Therefore, the time complexity is O(N), where N is the length of the linked list. 
We only use constant extra space so the space complexity is O(1).
*/

/** 
Approch2 : Iterative
iterate the nodes in original order and move them to the head of the list one by one

23 --> 6 --> 15 --> null

1- 6 --> 23 -------> 15 --> null
2- 15 --> 6 ---> 23 ------> null
3. The next node of the 23 node now is null. So we stop and return our new head node 15.

*/

let reverseList2 = function(head) {
    if(head === null) {
        return head;
    }

    let curHead = head;
    while(head.next !== null) {
        let p = head.next;
        head.next = p.next;
        p.next = curHead;
        curHead = p;
    }

    return curHead;
}

/** 
Approch3 : Recursive
The recursive version is slightly trickier and the key is to work backwards. Assume that 
the rest of the list had already been reversed, now how do I reverse the front part? Let's 
assume the list is: n1 → … → nk-1 → nk → nk+1 → … → nm → Ø

Assume from node nk+1 to nm had been reversed and you are at node nk.

n1 → … → nk-1 → nk → nk+1 ← … ← nm

We want nk+1’s next node to point to nk.

So,

nk.next.next = nk;

Be very careful that n1's next must point to Ø. If you forget about this, your linked list 
has a cycle in it. This bug could be caught if you test your code with a linked list of 
size 2.

*/

let reverseList3 = function(head) {
    if(head === null || head.next === null) {
        return head;
    }

    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}

/** 
Time complexity : O(n). Assume that n is the list's length, the time complexity is O(n).

Space complexity : O(n). The extra space comes from implicit stack space due to recursion. 
The recursion could go up to n levels deep.
*/