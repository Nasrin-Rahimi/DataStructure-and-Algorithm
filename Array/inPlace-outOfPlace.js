/**
 * In-place algorithms are sometimes called destructive, since the original input is "destroyed" 
 * (or modified) during the function call.
 * 
 * An out-of-place function doesn't make any changes that are visible to other functions. Usually, 
 * those functions copy any data structures or objects before manipulating and changing them.
 * 
 * In many languages, primitive values (integers, floating point numbers, or characters) are copied 
 * when passed as arguments, and more complex data structures (arrays, heaps, or hash tables) are 
 * passed by reference. This is what Javascript does.
 * 
 * Here are two functions that do the same operation on an array, except one is in-place and the other 
 * is out-of-place:
 */

 function squareArrayInPlace(intArray) {
     intArray.forEach((int, index) => {
        intArray[index] *= int;
     });
 }

  // NOTE: no need to return anything - we modified
  // intArray in place

// test squareArrayInPlace:
//   let intArray = [1, 2, 3];
//   squareArrayInPlace(intArray);
//   console.log(intArray);


function squareArrayOutOfPlace(intArray) {

  // We allocate a new array that we'll fill in with the new values
  const squaredArray = [];

  intArray.forEach((int, index) => {
    squaredArray[index] = Math.pow(int, 2);
  });

  return squaredArray;
}

// test squareArrayOutOfPlace
let intArray = [1, 2, 3];
console.log('The Original Array before Squared: ' + intArray);
console.log('The squared Array is: ' + squareArrayOutOfPlace(intArray));
console.log('The Original Array after Squared: ' + intArray);
