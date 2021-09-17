/*
Given the heads of two singly linked-lists headA and headB, return the node at which 
the two lists intersect. If the two linked lists have no intersection at all, return null.

Note that the linked lists must retain their original structure after the function returns.
*/

/*
Approach 1: Brute Force

The brute force solution is often a good starting point in an interview. While you shouldn't 
actually code up this approach (it's not a good use of time to do so), you should briefly 
explain it to your interviewer. Once you've done that, you'll then be analyzing 
inefficiencies and coming up with ways to optimize it.

The brute force solution is: For each node in list A, traverse over list B and check 
whether or not the node is present in list B.

The one thing we need to be careful of is that we're comparing objects of type Node.
We don't want to compare the values within the nodes; doing this would cause our code
to break when two different nodes have the same value.

*/

let getIntersectionNode = function(headA, headB) {
   while (headA !== null) {
       let curB = headB;
       while(curB !== null) {
           if(headA === curB) {
               return headA;
           }
           curB = curB.next;
       }
       headA = headA.next;
   }
   return null
};

/*
Complexity Analysis

Let N be the length of list A and M be the length of list B.
Time complexity : O(N×M).

For each of the N nodes in list A, we are traversing over each of the nodes in list B.
In the worst case, we won't find a match, and so will need to do this until reaching the 
end of list B, giving a worst-case time complexity of O(N×M).

Space complexity : O(1).

We aren't allocating any additional data structures, so the amount of extra space used
does not grow with the size of the input.
*/

