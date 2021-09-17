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

/*
Approach 2: Hash Table
Traverse list B and store the address/reference of each node in a hash table. Then for
each node in list A, check whether or not that node exists in the hash table. If it does, 
return it as it must be the intersection node. If we get to the end of list A without 
finding an intersection node, return null.

The one thing we need to be careful of is that we're comparing objects of type Node. 
We don't want to compare the values within the nodes; doing this would cause our code 
to break when two different nodes have the same value.

*/

let getIntersectionNode = function(headA, headB) {
	let visited = new Set();
	while(headB !== null) {
		visited.add(headB);
		headB = headB.next;
}

    while(headA !== null) {
        if(visited.has(headA)) {
            return headA;
    }
    headA = headA.next;
    }

    return null;
};

/*
Complexity Analysis

Time complexity : O(N+M).

Firstly, we need to build up the hash table. It costs O(1) to insert an item into a hash
table, and we need to do this for each of the M nodes in list B. This gives a cost of 
O(M) for building the hash table.

Secondly, we need to traverse list A, and for each node, we need to check whether or not 
it is in the hash table. In the worst case, there will not be a match, requiring us to 
check all N nodes in list A. As it is also O(1) to check whether or not an item is 
in a hash table, this checking has a total cost of O(N).

Finally, combining the two parts, we get O(M) + O(N) = O(M+N).

Space complexity : O(M).

As we are storing each of the nodes from list B into a hash table, the hash table will 
require O(M) space. Note that we could have instead stored the nodes of list A into 
the hash table, this would have been a space complexity of O(N). Unless we know which 
list is longer though, it doesn't make any real difference.

*/


