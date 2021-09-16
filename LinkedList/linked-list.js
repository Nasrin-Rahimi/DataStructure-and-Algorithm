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
    }

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
    
    }

    addAtTail(val) {
        this.addAtIndex(this.size, val);
    }

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
 }



//  class Node {
//     constructor(element) {
//         this.element = element;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     //add element to the end of linked list
//     add(element) {
//         //create a new node
//         let node = new Node(element);

//         //if list is empty, add element and make it head.
//         if(this.head == null){
//             this.head = node;
//         } else {
//             let current = this.head;

//             while(current.next) {
//                 current = current.next;
//             }
//             //add node
//             current.next = node;
//         }
//         this.size++;
//     }

//     insertAt(element, index) {
//         if(index < 0 || index > this.size) {
//             return console.log("Please enter a valid index!");
//         } else {
//             let node = new Node(element);

//             if(index == 0) {
//                 node.next = this.head;
//                 this.head = node;
//             } else {
//                 let curr = this.head;
//                 let prev;
//                 let i = 0;
//                 while (i < index) {
//                     prev = curr;
//                     curr = curr.next;
//                     i++;
//                 }

//                 node.next = curr;
//                 prev.next = node;
//             }
//             this.size++;
//         }
//     }

//     removeFrom(index) {
//         if(index < 0 || index > this.size) {
//             return console.log("Please enter a valid index!");
//         } else {
//             let prev, curr, i = 0;
//             curr = this.head;

//             if(index == 0) {
//                 this.head = curr.next;
//             } else {
//                 while (i < index) {
//                     prev = curr;
//                     curr = curr.next;
//                     i++;
//                 }
//                 prev.next = curr.next;
//             }
//             this.size--;
//             return curr.element;
//         }
//     }

//     removeElement(element){
//         let current = this.head;
//         let prev = null;

//         while(current != null) {
//             if(current.element == element) {
//                 if(prev == null){
//                     this.head = current.next;
//                 } else {
//                     prev.next = current.next;
//                 }
//                 this.size--;
//                 return current.element;
//             }
//             prev = current;
//             current = current.next;
//         }
//         return -1;
//     }

//     indexOf(element) {
//         let count = 0;
//         let current = this.head;

//         while(current != null) {
//             if(current.element == element) {
//                 return count;
//             }
//             count++;
//             current = current.next;
//         }

//         //element not found
//         return -1;
//     }

//     isEmpty(){
//         return this.size == 0;
//     }

//     listSize(){
//         return this.size;
//     }

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







