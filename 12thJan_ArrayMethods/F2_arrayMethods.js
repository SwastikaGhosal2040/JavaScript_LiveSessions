//Predict the output:
//Add elements2:
 
arr = [5,2,1,9,7,6]
 
x = arr.shift() // x = 5
 
console.log(x) // 5

console.log(arr) // [2,1,9,7,6]

console.log(arr.unshift(51)) // This will not return [51,2,1,9,7,6]
//arr.unshift(51) returns the length of modified array 
//returns 6

console.log(arr) // [51,2,1,9,7,6]

/**
 * Output:
 * 5
 * [ 2, 1, 9, 7, 6 ]
 * 6
 * [ 51, 2, 1, 9, 7, 6 ]
 */
