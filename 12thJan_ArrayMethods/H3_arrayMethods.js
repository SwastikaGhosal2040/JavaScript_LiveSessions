//Predict the output:

arr = [3,4,5,6,1,7]

arr.pop()         //inside memory 7 is deleted 
console.log(arr) //[ 3, 4, 5, 6, 1 ] is printed

arr.shift()      //inside memory 3 is out of array
console.log(arr) //[ 4, 5, 6, 1] is printed

arr.push(51)      //inside memory 51 is pushed
console.log(arr)  //[ 4, 5, 6, 1, 51 ] is printed

arr.unshift(51)   //51 should in the 1st position of the array
console.log(arr) //[ 51, 4, 5, 6, 1, 51 ] is printed

/**
 * Output:
 * [ 3, 4, 5, 6, 1 ]
 * [ 4, 5, 6, 1 ]
 * [ 4, 5, 6, 1, 51 ]
 * [ 51, 4, 5, 6, 1, 51 ]
 */