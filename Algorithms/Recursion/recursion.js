// ======================================fibonacci=====================================  //


function fibonacci(n) {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(6))
// Output: 8

// ======================================factorial=====================================  //

function factorial(n) {
  if (n === 0) return 1
  return n * factorial(n - 1)
}

console.log(factorial(5))
 // Output: 120



// ======================================Reverse a String=====================================  //


function reverseString(str) {
  if (str === "") return ""
  return reverseString(str.substr(1)) + str[0]
}

console.log(reverseString("hello"))
 // Output: "olleh"



// ======================================Sum of Digits=====================================  //


 function sumDigits(n) {
  if (n === 0) return 0
  return (n % 10) + sumDigits(Math.floor(n / 10))
}

console.log(sumDigits(1234))
// Output: 10