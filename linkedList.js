class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }
    getSize(){
        return this.size
    }
    append(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node
        }else{
            let temp= this.head
            while(temp.next){
                temp=temp.next
            }
            temp.next=node
        }
    }
    prepend(value){
        const node =new Node(value)
        node.next=this.head
        this.head=node
    }
    print(){
        if(!this.head){
            console.log("list is empty")
        }
        let output=""
        let temp=this.head
        while(temp){
        output+=temp.value+" "
        temp=temp.next
        }
        console.log(output)
    }
    reverse(){
    let  pre=null
    let curr=this.head
    while(curr){
        let next=curr.next
        curr.next=pre
        pre=curr
        curr=next
    }
     this.head=pre
    }
    insertValue(index,value){
   if(!this.head){
    return console.log(`List is empty`)
   }
   if(index >this.size || index<0){
    return console.log(`pls choose a value between 0-${this.size-1}`)
   }else{
   const node=new Node(value) 
   let temp=this.head
   for(let i=0;i<index-1;i++){
    temp=temp.next
   } 
   temp.next=node
   }

    }

}

const list=new linkedlist()
list.prepend(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.reverse()
list.print()