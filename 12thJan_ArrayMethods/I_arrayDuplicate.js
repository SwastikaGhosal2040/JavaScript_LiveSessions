//join method

arr1 = [3,4,5,6]
arr2 = [7,8,9,6]

arr = arr1.concat(arr2)  //concat method is used if you wanna make array
console.log(arr)         //[3,4,5,6,7,8,9,6] is printed 
console.log(arr.length) //8

arr_new = arr1 + arr2        //create a new string
/**when you will use this '+' operator the content of 2 arrays 
 * does not form a new array, it forms a string.
*/
console.log(typeof arr_new) //"string" is printed
console.log(arr_new)       //3,4,5,67,8,9,6

/**
 * Output:
 * [
  3, 4, 5, 6,
  7, 8, 9, 6
]
8
string
3,4,5,67,8,9,6
*/

