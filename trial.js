// linear search===========================================================
function linearSearch(arr,t){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==t){
            return i
        }
    }
    return -1
}
// console.log(linearSearch([1,2,3,4,5],5))


// Binary search===========================================================
function binarySearch(arr,t){
    let start=0
    let end=arr.length-1
    while(start<=end){
   let mid=Math.floor((start+end)/2)        
    if(arr[mid]===t){
        return mid
    } 
    if(arr[mid]<t){
        start=mid+1
    }else{
        end=mid-1
    }
    }
    
    return -1
}
// console.log(binarySearch([1,2,3,4,5],5))

// Fibonacci=======================================================

function Fibonacci(n){
let fib=[0,1]
for(let i=2;i<n;i++){
    fib[i]=fib[i-1]+fib[i-2]
}
return fib
}

// console.log(Fibonacci(10));

// linkedLIst==============================================================
class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
    }
    
    append(value){
    const node = new Node(value)   
    if(!this.head){
        this.head=node
    }else{
        let temp=this.head
        while(temp.next){
            temp=temp.next
        }
        temp.next=node
    }
        
    }
    
    print(){
        let curr =this.head
        let output =""
        while(curr){
            output+= curr.value+"->"
            curr=curr.next
        }
        console.log(output)
    }
}

let list = new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.print()