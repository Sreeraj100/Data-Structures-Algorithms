class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null; 
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    let poppedValue = this.top.value;
    this.top = this.top.next;
    this.length--;
    return poppedValue;
  }

  peek() {
    return this.isEmpty() ? null : this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }

  size() {
    return this.length;
  }

  print() {
    let curr = this.top;
    let result = [];
    while (curr) {
      result.push(curr.value);
      curr = curr.next;
    }
    console.log(result.join(" -> "));
  }
}


const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.isEmpty());
console.log(stack.peek());  
console.log(stack.size()); 
stack.print();               

stack.pop();
stack.print();    
