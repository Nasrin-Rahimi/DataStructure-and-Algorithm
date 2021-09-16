class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null; // Sentinel node as pseudo-head
        this.size = 0;
    }

    get(index) {
        if(index < 0 || index > this.size) {
            return -1;
        }

        let cur = this.head;
        let i = 0;
        while(i < index) {
            cur = cur.next;
            i++;
        }

        return cur.val;
    }

    addAtHead(val) {
        this.addAtIndex(0, val);
    } //time complexity: O(1)

    addAtIndex(index, val) {
        if(index < 0 || index > this.size ) {
            return console.log("Please enter a valid index!");
        }

        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        }

        else {
       
            let newNode = new ListNode(val);
            let cur = this.head;
            let prev;
            let i = 0;
            while(i < index) {
                prev = cur;
                cur = cur.next;
                i++;
            }
            newNode.next = cur;
            prev.next = newNode;
        }
        this.size++;
    
    } //time complexity: O(k) where k is an index of the element to get

    addAtTail(val) {
        this.addAtIndex(this.size, val);
    } //O(N)

    deleteAtIndex(index) {
        if(index < 0 || index > this.size ) {
            return console.log("Please enter a valid index!");
        }
        
         if(index === 0) {
            this.head = this.head.next;
        }
       
        else {

            let i = 0 ;
            let cur = this.head;
            let prev;

            while(i < index) {
                prev = cur;
                cur = cur.next;
                i++;
            }
            if(index === this.size) {
                prev.next = null;
            } else {
                prev.next = cur.next;
            }
        }
        this.size--;
    }

    isEmpty() {
        return this.size === 0;
    }
 } //time complexity: O(k) where k is an index of the element to get


//     printList() {
//         let current = this.head;
//         let list = "";

//         while(current) {
//             list += current.element + " ";
//             current = current.next;
//         }

//         console.log(list);
//     }

//     reverseList() {
//         let current = this.head;
//         let prev , tmp;
        
//         while(current) {
//             tmp = current.next;
//             current.next = prev;
//             prev = current;
//             current = tmp;
//         }
//         //return prev;
//     }
// }

// //Create an object for the linked list
// let linkedList = new LinkedList();

// console.log(linkedList.isEmpty());

// // adding element to the list
// linkedList.add(10);

// linkedList.printList();

// console.log(linkedList.listSize());

// // adding more elements to the list
// linkedList.add(20);
// linkedList.add(30);
// linkedList.add(40);
// linkedList.add(50);
// linkedList.insertAt(25, 3);


// linkedList.printList();

// console.log("is element removed ?" + linkedList.removeElement(50));

// linkedList.printList();

// linkedList.insertAt(60, 2);

// console.log("is List Empty ? " + linkedList.isEmpty());

// console.log(linkedList.removeFrom(3));

// linkedList.printList();







