let arr=[8,6,4,1,0,7,3,5,2]
function quickSort(arr){
if(arr.length<2){
        return arr
    }
let pivot=arr[arr.length-1]
let left=[]
let right=[]
for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
        left.push(arr[i])
    }else{
        right.push(arr[i])
    }
}

return [...quickSort(left),pivot,...quickSort(right)]
}
// console.log(arr)
console.log(quickSort(arr))