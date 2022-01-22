/**  
 * How to Get the First Element of a Set in JavaScript
 * 
Use destructuring assignment, e.g. const [first] = set. 
The destructuring assignment sets the variable to the first element of the Set.
 * */

const set = new Set([1, 2, 3]);

let [first] = set;
console.log(first); // 👉️ 1

/**
An easy way to think about it is - we are assigning the element at position 1 to the 
variable named first.
We can get the second element of the set in a similar way:
 */

const [, second] = set;
console.log(second); // 👉️ 2

/**
In the code snippet, we skip the first element by adding a , to the denote the place of 
the first element in the destructuring assignment.

We can also get the first element of a set using the spread syntax.

To get the first element of a set, use the spread syntax to convert the set into an array 
and access the element at index 0, e.g. const first = [...set][0].
 */

first = [...set][0];
console.log(first); // 👉️ 1


/**
We can iterate over a set, so we can also convert the set into an array and use the index 
to access the element at position 0.

Converting the set into an array would be very inefficient and slow if you have thousands 
of elements in the set.
A more long winded way to get the first element of a set is to use the methods on the set 
instance.
 */

const values = set.values(); // 👉️ iterator
const obj = values.next() // 👉️ {value: 1, done: false}
first = obj.value;
console.log(first); // 👉️ 1

/**
In the code snippet we call the values method on the set to get an iterator.

We call the next method on the iterator to get an object containing the value of the first 
iteration.

Finally, we access the value property on the object to get the value of the first element in 
the set.

The first 2 approaches are definitely more readable and intuitive. Don't get into the 
implementation details of sets in JavaScript, unless you have to.
 */

