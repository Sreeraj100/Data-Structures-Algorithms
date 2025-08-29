class TrieNode{
    constructor(){
        this.child = {}
        this.isEnd = false
    }
    
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(value){
        
        let node = this.root
        
        for(let val of value){
            if(!node.child[val]){
                node.child[val] = new TrieNode()
            }
            node = node.child[val]
        }
        node.isEnd = true
    }
    search(value){
        
        let node = this.root
        
        for (let val of value){
            if(!node.child[val]) return false
            node = node.child[val]
        }
        return node.isEnd
        
    }
    startsWith(value){
        let node = this.root
        
        for(let val of value){
            if(!node.child[val]) return false
            node = node.child[val]
        }
        
        return true
        
        
        
    }
    
autoC(value){
    
    let node = this.root
    for(let val of value){
        if(!node.child[val]) return false
        node = node.child[val]
    }
    let suggest =[]
    
    let dfs = (curr,path)=>{
        if(curr.isEnd) suggest.push(path)
        for(let val in curr.child){
            dfs(curr.child[val], path+val)
        }
    }
    dfs(node, value)
    return suggest
}
    
commonP(){
    
    let node = this.root
    
    let pre =""
    
    while(true){
        
        let key = Object.keys(node.child)
        if(key.length===1 && !key.isEnd){
            pre+=key[0]
            node = node.child[key[0]]
        }else{
            break
        }
        
        
    }
    return pre
    
    
    
}
    longestP(value){
        
        let node = this.root
        let pre =""
        
        for(let val of value){
            if(node.child[val]){
                pre+=val
                node = node.child[val]
            }else{
                break
            }
        }
        
        return pre

    }
    
    
    delete(value){
        let node = this.root
        let path =[]
        
        for(let val of value){
            
            if(!node.child[val]) return false
            path.push([node, val])
            console.log(path)
            node = node.child[val]
            
        }
        
        
        if(!node.isEnd) return false
            node.isEnd = false
        
        
        
        for(let i=value.length-1;i>=0;i--){
            let [parent,val] = path[i]
            
            if(Object.keys(node.child).length >0 || node.isEnd){
                break
            }
            
            delete parent.child[val]
            
            node = parent

        }
 
    }
    
    
    
    print(){
        console.log(this.root)
    }

}
let res = new Trie()

res.insert("cat")
res.insert("car")
res.insert("carrot")
res.insert("care")

res.print()
console.log(res.search("cat"))
console.log(res.startsWith("ca"))
console.log(res.autoC("ca"))
console.log(res.commonP())
console.log(res.longestP("carrot"))
res.delete("car")
console.log(res.startsWith("ba"))