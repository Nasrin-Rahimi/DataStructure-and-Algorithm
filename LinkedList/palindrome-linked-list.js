/** 
Given the head of a singly linked list, return true if it is a palindrome.

Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false
*/

/**Note:
When writing your own solution, remember that we need to compare values in the nodes, 
not the nodes themselves. node_1.val == node_2.val is the correct way of comparing 
the nodes. node_1 == node_2 will not work the way you expect.

*/

/** 
An Array List uses an underlying Array to store the values. We can access the value at any 
position in the list in O(1) time, as long as we know the index. This is based on the 
underlying memory addressing.
A Linked List uses Objects commonly called Nodes. Each Node holds a value and a next 
pointer to the next node. Accessing a node at a particular index would take O(n) time 
because we have to go down the list using the next pointers.

Determining whether or not an Array List is a palindrome is straightforward. We can simply 
use the two-pointer technique to compare indexes at either end, moving in towards the middle. 
One pointer starts at the start and goes up, and the other starts at the end and goes down. 
This would take O(n) because each index access is O(1) and there are n index accesses in 
total.

On the plus side, making a copy of the Linked List values into an Array List is O(n). 
Therefore, the simplest solution is to copy the values of the Linked List into an Array 
List (or Vector, or plain Array). Then, we can solve the problem using the two-pointer 
technique.

We can split this approach into 2 steps:

1- Copying the Linked List into an Array.
2- Checking whether or not the Array is a palindrome.

To do the first step, we need to iterate through the Linked List, adding each value to 
an Array. We do this by using a variable currentNode to point at the current Node we're 
looking at, and at each iteration adding currentNode.val to the array and updating 
currentNode to point to currentNode.next. We should stop looking once currentNode points 
to a null node.

*/

/** *
Approch1 : 
Use Reverse Array list
*/
let isPalindrome = function(head) {
    let arrayList = [];
    let cur = head;

    while(cur != null) {
        arrayList.push(cur.val);
        cur = cur.next;
    }

    let reversArray = [];
    let len = arrayList.length;

    for(let i = len - 1; i >= 0; i--) {
        reversArray.push(arrayList[i].val);
    }

    for (let i = 0; i < len; i++) {
        if(arrayList[i] != reversArray[i]) {
            return false;
        }
    }

    return true;

};

/** 
time complexity : O(3N)  == O(N)
space complecity :  O(2N) == O(N)

*/

/** 
Approch2 :
Copy into Array List and then Use Two Pointer Technique
*/

let isPalindrome = function(head) {
    let arrayList = [];
    
    let cur = head;
    
    while(cur != null) {
        arrayList.push(cur.val);
        cur = cur.next;
    }	
    
    let start = 0, end = arrayList.length - 1;
    
    while(start < end) {
        if(arrayList[start] != arrayList[end]){
             return false;
        }
        start++;
        end--;
    }
    
    return true;
}

/** 
Time complexity : O(n), where n is the number of nodes in the Linked List.

In the first part, we're copying a Linked List into an Array List. Iterating down a Linked 
List in sequential order is O(n), and each of the n writes to the ArrayList is O(1). 
Therefore, the overall cost is O(n).

In the second part, we're using the two pointer technique to check whether or not the Array 
List is a palindrome. Each of the nn values in the Array list is accessed once, and a 
total of O(n/2) comparisons are done. Therefore, the overall cost is O(n).

This gives O(2n)=O(n) because we always drop the constants.

Space complexity : O(n), where n is the number of nodes in the Linked List.

We are making an Array List and adding nn values to it.
*/
    
    