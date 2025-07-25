
// // without collision handling
// class hashTable{
//     constructor(size){
//         this.table= new Array(size)
//         this.size=size
//     }
//     hash(key){
//     let total=0
//     for(let i=0;i<key.length;i++){
//         total+=key.charCodeAt(i)
//     }
//     return total % this.size 
//     }
//     set(key,value){
//         let index=this.hash(key)
//         this.table[index]=value
//     }
//     get(key){
//      const index= this.hash(key)
//      return this.table[index]
//     }
//     remove(key){
//      const index= this.hash(key) 
//      this.table[index]=undefined
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }

// }
// const table =new hashTable(50)
// table.set('name','sreeraj')
// table.set("age",23)
// table.display()



// with collision handling
class hashTable{
    constructor(size){
        this.table= new Array(size)
        this.size=size
    }
    hash(key){
    let total=0
    for(let i=0;i<key.length;i++){
        total+=key.charCodeAt(i)
    }
    return total % this.size 
    }
    set(key,value){
        let index=this.hash(key)
        const bucket=this.table[index]
        if(!bucket){
            bucket=[[key,value]]
        }else{
        const samekey=bucket.find((item)=>item[0]==key)

        if(samekey){
            samekey[1]=value
        }else{
            bucket.push([key,value])
        }


        }

    }
    get(key){
     const index= this.hash(key)
     const bucket=this.table[index]
     if(bucket){
        
     }
    }
    remove(key){
     const index= this.hash(key) 
     this.table[index]=undefined
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }

}
const table =new hashTable(50)
table.set('name','sreeraj')
table.set("age",23)
table.display()