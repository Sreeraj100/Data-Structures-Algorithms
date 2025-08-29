class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    prepend(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    insertAt(index, value) {
        if (index < 0 || index > this.size) {
            return console.log(`Index must be between 0 and ${this.size}`);
        }
        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index === this.size) {
            this.append(value);
            return;
        }

        const node = new Node(value);
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        node.prev = current.prev;
        node.next = current;
        current.prev.next = node;
        current.prev = node;
        this.size++;
    }

    removeFromFront() {
        if (!this.head) return null;
        const value = this.head.value;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        return value;
    }

    removeFromEnd() {
        if (!this.tail) return null;
        const value = this.tail.value;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return value;
    }

    printForward() {
        let output = "";
        let current = this.head;
        while (current) {
            output += current.value + " ";
            current = current.next;
        }
        console.log("Forward:", output.trim());
    }

    printBackward() {
        let output = "";
        let current = this.tail;
        while (current) {
            output += current.value + " ";
            current = current.prev;
        }
        console.log("Backward:", output.trim());
    }
}


const dll = new DoublyLinkedList();
dll.append(10);
dll.append(20);
dll.append(30);
dll.prepend(5);
dll.insertAt(2, 15);

dll.printForward();  
dll.printBackward(); 

dll.removeFromFront();
dll.removeFromEnd();

dll.printForward(); 
dll.printBackward(); 
