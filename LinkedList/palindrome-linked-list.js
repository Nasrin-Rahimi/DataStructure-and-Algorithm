/*
Given the head of a singly linked list, return true if it is a palindrome.

Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false
*/

/*
Approch1 : 
Iterate over the list and store nodes to a dataStructure like an array. Then make a reverse 
call from array and check if the array and it's reversed are the same.
*/
let isPalindrome = function(head) {
    let arrayList = [];
    let cur = head;

    while(cur != null) {
        arrayList.push(cur);
        cur = cur.next;
    }

    let reversArray = [];
    let len = arrayList.length;

    for(let i = len - 1; i >= 0; i--) {
        reversArray.push(arrayList[i]);
    }

    for (let i = 0; i < len; i++) {
        if(arrayList[i] != reversArray[i]) {
            return false;
        }
    }

    return true;

};

/*
time complexity : O(3N)  == O(N)
space complecity :  O(2N) == O(N)

*/