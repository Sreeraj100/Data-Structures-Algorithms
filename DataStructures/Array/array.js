// **************************===========__________Basic Array Problems__________===========**************************//

// 1)==========================Array Reverse without inbuilt function or extra space==========================

// let Array = [1, 2, 3, 4, 5, 6]
// function Reverse(arr) {
//     let i = 0
//     let j = arr.length - 1
//     while (i < j) {
//         [arr[i], arr[j]] = [arr[j], arr[i]]
//         i++
//         j--
//     }
//     return arr
// }
// console.log(Reverse(Array))
// console.log(Array)


// 2)Find the count of 1 and 0 form the array without using additional array or conditional statements

// let arr = [1, 0, 0, 1, 1, 0, 1, 0]

// let one=0
// let zero=0
// for(let i of arr){
//     one+=i
// }
// zero=arr.length-one
// console.log("One :",one,"Zero :",zero)

// using reduce*******
// let one=arr.reduce((a,c)=>a+c,0)
// let zero=arr.length-one
// console.log("One :",one,"Zero :",zero)

// 3)Swap the elements in the variables without using temp 

// let a = 10
// let b = 20
// a = a + b
// b = a - b
// a = a - b
// console.log("a =", a, "b =", b);
