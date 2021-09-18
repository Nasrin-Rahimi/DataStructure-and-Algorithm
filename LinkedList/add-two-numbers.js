/*
You are given two non-empty linked lists representing two non-negative integers. The 
digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 
itself.
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [0], l2 = [0]
Output: [0]
*/

/*
Approach 1: Elementary Math

Just like how you would sum two numbers on a piece of paper, we begin by summing the 
least-significant digits, which is the head of l1 and l2. Since each digit is in the 
range of 0…9, summing two digits may "overflow". For example 5 + 7 = 12.
In this case, we set the current digit to 2 and bring over the carry = 1 to the next 
iteration. carrycarry must be either 0 or 1 because the largest possible sum of two 
digits (including the carry) is 9 + 9 + 1 = 19.

The pseudocode is as following:

Initialize current node to dummy head of the returning list.
Initialize carry to 0.
Initialize p and q to head of l1 and l2 respectively.
Loop through lists l1 and l2 until you reach both ends.
Set x to node pp's value. If p has reached the end of l1, set to 0.
Set y to node qq's value. If q has reached the end of l2, set to 0.
Set sum = x + y + carry.
Update carry = sum / 10.
Create a new node with the digit value of (sum mod 10) and set it to current node's next, then advance current node to next.
Advance both p and q.
Check if carry = 1, if so append a new node with digit 1 to the returning list.
Return dummy head's next node.
Note that we use a dummy head to simplify the code. Without a dummy head, you would have 
to write extra conditional statements to initialize the head's value.

*/

let addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let cur = dummyHead;
    let carry = 0;
    let p = l1;
    let q = l2;

    while(p != null || q != null) {
        let x = (p != null) ? p.val : 0;
        let y = (q != null) ? q.val : 0;
        let sum = x + y + carry;
        carry = sum / 10;
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        if(p != null) {
            p = p.next;
    } 
    if(q != null) {
        q = q.next;
    }
    }
    if(carry > 0) {
        cur.next = new ListNode(carry);
    }

    return dummyHead.next;	
    
};

/*
Time complexity : O(max(m,n)). Assume that mm and nn represents the length of l1 and l2 
respectively, the algorithm above iterates at most max(m,n) times.

Space complexity : O(max(m,n)). The length of the new list is at most max(m,n)+1.

 */
