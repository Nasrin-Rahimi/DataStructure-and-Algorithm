/**
 * Given the head of a linked list, rotate the list to the right by k places.
 * 
 * Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Input: head = [0,1,2], k = 4
Output: [2,0,1]
 */

/**
 * Approach 1:
Intuition

If we see a list after rotation by k, k nodes moved from the last to the biginning of the list,
and n - k reminder nodes moved from the biggining to the end of the list.
(see rotate elements in array)

The nodes in the list are already linked, and hence the rotation basically means

To close the linked list into the ring. (The last node point to the first node instead of 
pointing to null.)

To break the ring after the new tail and just in front of the new head. (The new tail is in 
the index of n - k - 1 and the new head should be in n - k)

We were assuming that k < n. What about the case of k >= n?
Ok we put k = k % n to always have number of rotation places smaller than n. (n is the length
    of linked list)

    The algorithm is quite straightforward :

Find the old tail and connect it with the head old_tail.next = head to close the ring. 
Compute the length of the list n at the same time.

Find the new tail, which is (n - k % n - 1)th node from the head and the new head, 
which is (n - k % n)th node.

Break the ring new_tail.next = None and return new_head.
 */

let rotateRight = function(head, k) {
    
    if(head == null) {
         return null;
     }
     if(head.next == null) {
         return head;
     }
 
     let n = 0, oldTail = head;

    //find the length of linked list
     while(oldTail.next != null) {
         oldTail = oldTail.next;
         n++;
     }
      // close the linked list into the ring
     oldTail.next = head;
     n++;

     k %= n
     
     let newTail = head;
     for(let i = 0; i <  n - k - 1; i++) {
        newTail = newTail.next;
     }
     
     head = newTail.next;
     newTail.next = null;
     
     return head;
 
 };

 /**
  * Time complexity : O(N) where N is a number of elements in the list.

Space complexity : O(1) since it's a constant space solution.
  */