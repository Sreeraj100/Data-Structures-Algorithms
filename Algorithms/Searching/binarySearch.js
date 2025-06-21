function binarySearch(arr,t){
   let start=0
    let end=arr.length-1
    let mid=Math.floor((start+end)/2)

    while(start<=end){
    if(arr[mid]==t){
        return mid
    }
    
    if(arr[mid]<t){
        start=mid+1
    }else{
        end=mid-1
    }
       mid =Math.floor((start+end)/2)
    }
return -1
}

console.log(binarySearch([10,11,12,13,14],55))//-1

console.log(binarySearch([10,11,12,13,14],11))//1

console.log(binarySearch([10,11,12,13,14],13))//3

// Big-O = O(logn)