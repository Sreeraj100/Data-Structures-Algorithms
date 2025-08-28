class MinHeap {

    constructor() {
        this.heap = []
        this.size = 0
    }
    hasParent(i) {
        return this.parentInd(i) >= 0
    }
    hasLeftChild(i) {
        return this.leftInd(i) < this.size
    }
    hasRightChild(i) {
        return this.rightInd(i) < this.size
    }
    parentInd(i) {
        return Math.floor((i - 1) / 2)
    }
    leftInd(i) {
        return i * 2 + 1
    }
    rightInd(i) {
        return i * 2 + 2
    }
    parent(i) {
        return this.heap[this.parentInd(i)]
    }
    leftChild(i) {
        return this.heap[this.leftInd(i)]
    }
    rightChild(i) {
        return this.heap[this.rightInd(i)]
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    insert(value) {
        this.heap.push(value)
        this.size++
        this.heapifyUp(this.size - 1)
    }
    heapifyUp(i) {
        if (this.hasParent(i) && this.parent(i) > this.heap[i]) {
            this.swap(this.parentInd(i), i)
            this.heapifyUp(this.parentInd(i))
        }
    }
    peek() {
        return this.heap[0]
    }
    removeMin() {
        if (this.size == 0) {
            return false
        } else {
            let data = this.heap[0]
            this.heap[0] = this.heap.pop()
            this.size--
            this.heapifyDown(0)
            return data
        }
    }
    heapifyDown(i) {
        let smallest = i
        if (this.hasLeftChild(i) && this.heap[i] > this.leftChild(i)) {
            smallest = this.leftInd(i)
        }
        if (this.hasRightChild(i) && this.heap[i] > this.rightChild(i)) {
            smallest = this.rightInd(i)
        }
        if (smallest != i) {
            this.swap(smallest, i)
            this.heapifyDown(smallest)
        }   

    }
    display(){
        for(let i of this.heap){
            console.log(i);
            
        }
    }


}

const h = new MinHeap()
h.insert(20)
h.insert(40)
h.insert(10)
h.insert(30)
h.removeMin()
h.removeMin()
h.insert(10)
h.insert(20)
h.display()



