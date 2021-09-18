/*
Given the head of a linked list, remove the nth node from the end of the list and 
return its head.

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Input: head = [1], n = 1
Output: []

Input: head = [1,2], n = 1
Output: [1]
*/

/*
Approach 1: Two pass algorithm
We notice that the problem could be simply reduced to another one : Remove the (L - n + 1)th 
node from the beginning in the list , where L is the list length. This problem is easy to 
solve once we found list length L.

Algorithm

First we will add an "dummy" node, which points to the list head. The "dummy" 
node is used to simplify some corner cases such as a list with only one node, or removing 
the head of the list. On the first pass, we find the list length L. Then we set a pointer 
to the dummy node and start to move it through the list till it comes to the (L - n)th node. 
We relink next pointer of the (L - n)th node to the (L - n + 2) th node and we are done.

*/

let removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
    dummy.next = head;
    let length = 0;

    while(head != null) {
        length++;
        head = head.next;
    }

    length -= n;

    let cur = dummy;

    while(length > 0){
        length--;
        cur = cur.next;
    }

    // Or donot change length to length - n and use for loop
    
    // for(let i = 0; i < length - n; i++){ 
	//     cur = cur.next;
    // }

    cur.next = cur.next.next;
    return dummy.next;
}

/*
Time complexity : O(L).

The algorithm makes two traversal of the list, first to calculate list length L and second 
to find the (L - n)th node. There are 2L−n operations and time complexity is O(L).

Space complexity : O(1).

We only used constant extra space.
*/