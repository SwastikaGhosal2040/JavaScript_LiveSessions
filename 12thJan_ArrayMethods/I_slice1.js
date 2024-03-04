//Predict the output:

let arr = [5,7,1,2,9,11,15,12,6]
sliced_arr = arr.slice(2,5)
console.log(arr)  //[5,7,1,2,9,11,15,12,6]
console.log(sliced_arr) //[1,2,9]
console.log(arr.slice()) //[5,7,1,2,9,11,15,12,6]
console.log(arr.slice(2)) //[1,2,9,11,15,12,6]

/**
 * Output:
 * [5,7,1,2,9,11,15,12,6]
 * [1,2,9]
 * [5,7,1,2,9,11,15,12,6]
 * [1,2,9,11,15,12,6]
 */