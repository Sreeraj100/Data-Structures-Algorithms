class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null; 
    this.rear = null;  
    this.length = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.front = this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const dequeuedValue = this.front.value;
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null;
    }
    this.length--;
    return dequeuedValue;
  }

  peek() {
    return this.isEmpty() ? null : this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }

  size() {
    return this.length;
  }

  print() {
    let curr = this.front;
    let result = [];
    while (curr) {
      result.push(curr.value);
      curr = curr.next;
    }
    console.log(result.join(" -> "));
  }
}


const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.isEmpty()); 
console.log(queue.peek());  
console.log(queue.size());  
queue.print();        

queue.dequeue();
queue.print();   
