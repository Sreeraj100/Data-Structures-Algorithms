function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

let arr = [8, 6, 3, 1, 2, 4, 7, 5];
console.log(arr); //orginal
bubbleSort(arr);
console.log(arr); //sorted 
