class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkedList {
    constructor() {
        this.head = new ListNode(0);
        this.tail = new ListNode(0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }

    get(index) {
        if(index < 0 || index > this.size) {
            return -1;  
        }

        // choose the fastest way: to move from the head
        // or to move from the tail
        let cur = this.head;
        if(index + 1 < this.size - index) {
            for(let i = 0; i < index + 1; ++i) {
                cur = cur.next
            }
        } else {
            cur = this.tail;
            for(let i = 0; i < this.size - index; ++i) {
                cur = cur.prev;
            }
        }

        return cur.val;
    }
  
}