class Node{
    constructor(value){
     this.value=value
     this.left=null
     this.right=null
    }
}
class BST{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root==null
    }
    insert(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    
    insertNode(root,node){
        if(root.value>node.value){
            if(!root.left){
                root.left=node
            }else{
              this.insertNode(root.left,node)
            }
        }else{
            if(!root.right){
                root.right=node
            }else{
              this.insertNode(root.right,node)
            }
        }
    }
    
      search(root,value){
        if(!root){
            return false
        }
        if(root.value==value){
            return true
        }else{
            if(root.value>value){
              return this.search(root.left,value)  
            }else{
              return this.search(root.right,value)  
            }
            
        }
        return false
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
   Bfs(){
       if(this.isEmpty()){
           return
       }
      let queue=[this.root]
      while(queue.length){
          let curr=queue.shift()
          console.log(curr.value)
          if(curr.left){
              queue.push(curr.left)
          }
          if(curr.right){
              queue.push(curr.right)
          }
      }
       
   }
   printLeafNodes(node){
       if(!node){
           return null
       }
       if(!node.left && !node.right){
           console.log(node.value)
       }
       this.printLeafNodes(node.left)
       this.printLeafNodes(node.right)
   }
  min(root){
      if(!root){
          return null
      }
      if(!root.left){
          return root.value
      }else{
          return this.min(root.left)
      }
  }
  max(root){
      if (!root){
          return null
      }
      if(!root.right){
          return root.value
      }else{
          return this.max(root.right)
      }
  }
  
  height(root = this.root) {
        if (!root) return -1
        return 1 + Math.max(this.height(root.left), this.height(root.right))
    }
   countAll(root = this.root) {
        if (!root) return 0
        return 1 + this.countAll(root.left) + this.countAll(root.right)
    }

    countLeft(root = this.root) {
        if (!root || !root.left) return 0
        return this.countAll(root.left)
    }

    countRight(root = this.root) {
        if (!root || !root.right) return 0
        return this.countAll(root.right)
    }
     sum(root = this.root) {
        if (!root) return 0
        return root.value + this.sum(root.left) + this.sum(root.right)
    }

     deleteNode(root, value) {
        if (!root) return null
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) return null
            if (!root.left) return root.right
            if (!root.right) return root.left
            let minVal = this.min(root.right)
            root.value = minVal
            root.right = this.deleteNode(root.right, minVal)
        }
        return root
    }


     isBalanced(root) {
        if (!root) return true
        let lh = this.height(root.left)
        let rh = this.height(root.right)
        if (Math.abs(lh - rh) > 1) return false
        return this.isBalanced(root.left) && this.isBalanced(root.right)
    }



   kthSmallest(k) {
    let arr = []
    
    
    function inorder(node) {
        if(node){
            inorder(node.left)
            arr.push(node.value) 
            inorder(node.right)
        }
    }
    
    inorder(this.root)
    return arr[k-1] 
}

kthLargest(k) {
    let arr = []
    
    function inorder(node) {
        if(node){
            inorder(node.left)
            arr.push(node.value)
            inorder(node.right)
        }
    }
    
    inorder(this.root)
    return arr[arr.length - k]
}

}

const bst=new BST()
bst.insert(10)
bst.insert(20)
bst.insert(15)
bst.insert(30)
bst.insert(5)
bst.insert(1)
bst.insert(3)
bst.insert(0)
bst.insert(35)

console.log("##****DFS****##")
console.log("****preOrder****")
bst.preOrder(bst.root)
console.log("****inOrder****")
bst.inOrder(bst.root)
console.log("****postOrder****")
bst.postOrder(bst.root)
console.log("****Search****")
console.log(bst.search(bst.root,10))
console.log(bst.search(bst.root,36))
console.log("##****BFS****##")
bst.Bfs()
console.log("****LeafNodes****")
bst.printLeafNodes(bst.root)
console.log("****Minimum Value****")
console.log(bst.min(bst.root))
console.log("****Maximum Value****")
console.log(bst.max(bst.root))
console.log("****Height****")
console.log(bst.height());
console.log("****Is Balanced****")
console.log(bst.isBalanced())
console.log("****Kth small & large****")
console.log("3rd Smallest:", bst.kthSmallest(3))
console.log("2nd Largest:", bst.kthLargest(2))
console.log("****Delete Node****")
bst.deleteNode(bst.root,10)
bst.deleteNode(bst.root,15)
bst.deleteNode(bst.root,20)
bst.deleteNode(bst.root,30)
bst.Bfs()