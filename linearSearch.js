function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
    return -1
    
}

console.log(linearSearch([12,45,95,68,32,65],55))//1

console.log(linearSearch([12,45,95,68,32,65],68))//3

console.log(linearSearch([12,45,95,68,32,65],45))//1


// Big-O = O(n)