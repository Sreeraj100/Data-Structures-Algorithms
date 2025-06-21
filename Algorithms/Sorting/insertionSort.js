function insertionSort(arr){
    for (let i=1;i<arr.length;i++){
     let n=arr[i]
     let j=i-1
     while(j>=0 && arr[j]>n){
        arr[j+1]=arr[j]
        j=j-1
     }
    arr[j+1]=n
    }
}
let arr=[20,8,-2,4,-6]
insertionSort(arr)
console.log(arr)