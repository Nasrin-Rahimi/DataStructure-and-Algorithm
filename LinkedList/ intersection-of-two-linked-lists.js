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

let getIntersectionNode2 = function(headA, headB) {
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

/*
We know that we've now fully optimized the time complexity: it's impossible to do better 
than O(N + M) as, in the worst case, we'll need to look at every node at least once. But, 
is there a way we can get the space complexity down to O(1) while maintaining that awesome 
O(N + M) time complexity that we just achieved? It turns out that there is!

Approch3 : two pointer
We know that we've now fully optimized the time complexity: it's impossible to do better 
than O(N + M) as, in the worst case, we'll need to look at every node at least once. But, 
is there a way we can get the space complexity down to O(1) while maintaining that awesome 
O(N + M) time complexity that we just achieved? It turns out that there is!

Observe that while list A and list B could be different lengths, that the shared "tail" 
following the intersection has to be the same length.

Imagine that we have two linked lists, A and B, and we know that their lengths are N and M 
respectively (these can be calculated with O(1) space and in time proportional to the length 
of the list). We'll imagine that N = 5 and M = 8.
Because the "tails" must be the same length, we can conclude that if there is an 
intersection, then the intersection node will be one of these 5 possibilities.

So, to check for each of these pairs, we would start by setting a pointer at the start of 
the shorter list, and a pointer at the first possible matching node of the longer list. 
The position of this node is simply the difference between the two lengths, that is, 
|M - N|.

Then, we just need to step the two pointers through the list, each time checking whether 
or not the nodes are the same.

In code, we could write this algorithm with 4 loops, one after the other, each doing the 
following:

Calculate N; the length of list A.
Calculate M; the length of list B.
Set the start pointer for the longer list. (abs(len listA - len listB))
put another pointer at the first of shorter list
Step the pointers through the list together.
While this would have a time complexity of O(N + M) and a space complexity of O(1) and would 
be fine for an interview, we can still simplify the code a bit! As some quick reassurance, 
most people will struggle to come up with this next part by themselves. It takes practice 
and seeing lots of linked list and other math problems.


*/

let getIntersectionNode3 = function(headA, headB) {
	let pA = headA;
	let pB = headB;

	while(pA != pB) {
		pA = pA === null ? headB : pA.next;
		pB = pB === null ? headA : pB.next;
    }

    return pA;
    // Note: In the case lists do not intersect, the pointers for A and B
    // will still line up in the 2nd iteration, just that here won't be
    // a common node down the list and both will reach their respective ends
    // at the same time. So pA will be NULL in that case.
};

/*
Let N be the length of list A and M be the length of list B.

Time complexity : O(N + M).

In the worst case, each list is traversed twice giving 2⋅M+2⋅N, which is equivalent to 
O(N + M). This is because the pointers firstly go down each list so that they can be 
"lined up" and then in the second iteration, the intersection node is searched for.

An interesting observation you might have made is that when the lists are of the same 
length, this algorithm only traverses each list once. This is because the pointers are 
already "lined up" from the start, so the additional pass is unnecessary.

Space complexity : O(1).

We aren't allocating any additional data structures, so the amount of extra space used 
does not grow with the size of the input. For this reason, Approach 3 is better than 
Approach 2.
*/




