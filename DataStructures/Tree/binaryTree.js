class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BT {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node) {
        
        let queue = [root]
        while (queue.length) {
            let curr = queue.shift()
            if (!curr.left) {
                curr.left = node
                break
            } else if (!curr.right) {
                curr.right = node
                break
            } else {
                queue.push(curr.left)
                queue.push(curr.right)
            }
        }
    }

    search(root, value) {
        if (!root) return false
        if (root.value === value) return true
        return this.search(root.left, value) || this.search(root.right, value)
    }

    preOrder(root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    Bfs() {
        if (this.isEmpty()) return
        let queue = [this.root]
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value)
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
    }

    printLeafNodes(node) {
        if (!node) return
        if (!node.left && !node.right) {
            console.log(node.value)
        }
        this.printLeafNodes(node.left)
        this.printLeafNodes(node.right)
    }

    height(node = this.root) {
        if (!node) return 0
        return 1 + Math.max(this.height(node.left), this.height(node.right))
    }
}

const bt = new BT()
bt.insert(10)
bt.insert(20)
bt.insert(15)
bt.insert(30)
bt.insert(5)
bt.insert(1)
bt.insert(3)
bt.insert(0)
bt.insert(35)

console.log("##****DFS****##")
console.log("****preOrder****")
bt.preOrder(bt.root)
console.log("****inOrder****")
bt.inOrder(bt.root)
console.log("****postOrder****")
bt.postOrder(bt.root)
console.log("****Search****")
console.log(bt.search(bt.root, 10))
console.log(bt.search(bt.root, 36))
console.log("##****BFS****##")
bt.Bfs()
console.log("****LeafNodes****")
bt.printLeafNodes(bt.root)
console.log("****Height****")
console.log(bt.height(bt.root))
