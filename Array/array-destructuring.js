//remove the first two elements of an array using array destructuring.

function removeFirstTwo(myArray) {
    const[, , ...newArray] = myArray;
    return newArray;
}

//destructure undefined in JavaScript
// input in the point variable, and we want the output values of
// name and age properties.

function pointValuesByDestructuring(point) {
    const {name: a, age: b} = {...point};
    console.log("name of point is: ", a);
    console.log("age of point is: ", b);
}

pointValuesByDestructuring({name: "Nasrin", age: 40});
pointValuesByDestructurings(undefined);

/** 
We do that using {...point}, which creates a new object using the properties 
of point. Now, the new object will contain all the same values as a kind of
 copy. The values undefined and null are ignored. When undefined is spread, 
 no value is stored in the new object, so no error is thrown. Thus, 
 we see undefined when we access name and age.
*/

//consider the below function
function pointValues(point) {
    console.log("name of point is: ", point.name);
    console.log("age of point is: ", point.age);
}

pointValues(undefined);

/**
 Calling pointValues with undefined, return Error TypeError
 (Cannot read properties of undefined (reading 'name'))
 */