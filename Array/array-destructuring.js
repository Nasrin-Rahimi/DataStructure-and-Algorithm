//remove the first two elements of an array using array destructuring.

function removeFirstTwo(myArray) {
    const[, , ...newArray] = myArray;
    return newArray;
}

//destructure undefined in JavaScript
// input in the point variable, and we want the output values of
// name and age properties.

function pointValues(point) {
    const {name: a, age: b} = {...point};
    console.log("name of point is: ", a);
    console.log("age of point is: ", b);
}

pointValues({name: "Nasrin", age: 40});
pointValues(undefined);
/*
We do that using {...point}, which creates a new object using the properties 
of point. Now, the new object will contain all the same values as a kind of
 copy. The values undefined and null are ignored. When undefined is spread, 
 no value is stored in the new object, so no error is thrown. Thus, 
 we see undefined when we access name and age.
*/