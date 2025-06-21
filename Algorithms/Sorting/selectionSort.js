let arr=[8,6,4,1,0,7,3,5,2]

function selection(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min=j
            }
        }
        if(min!=i){
            let temp=arr[i]
            arr[i]=arr[min]
            arr[min]=temp
        }
    }
}
selection(arr)
console.log(arr)