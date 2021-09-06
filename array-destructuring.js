//remove the first two elements of an array using array destructuring.

function removeFirstTwo(myArray) {
    const[, , ...newArray] = myArray;
    return newArray;
}