/*
Merge two sorted linked lists and return it as a sorted list. The list should be made by 
splicing together the nodes of the first two lists.

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: l1 = [], l2 = []
Output: []

Input: l1 = [], l2 = [0]
Output: [0]
*/

/*
Approch1 : Recursive

first check the edges. if either of l1 or l2 is initially null, there is no merge to 
perform, so we simply return the non-null list.

then determine which of l1 and l2 has a smaller head, and recursively set the next value 
for that head to the next merge result. Given that both lists are null-terminated, the 
recursion will eventually terminate.
*/

let mergeTwoLists = function(l1, l2) {
    if(l1 == null) {
        return l2;
    } else if(l2 == null) {
        return l1;
    } else {
        if(l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1,l2.next);
            return l2;
        }
    
    }
}

/*
Time complexity : O(n + m)

Because each recursive call increments the pointer to l1 or l2 by one (approaching the 
dangling null at the end of each list), there will be exactly one call to mergeTwoLists 
per element in each list. Therefore, the time complexity is linear in the combined size 
of the lists.

Space complexity : O(n + m)

The first call to mergeTwoLists does not return until the ends of both l1 and l2 have 
been reached, so n + m stack frames consume O(n + m) space.

*/

/*

*/
