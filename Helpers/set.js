//Set

/**
1- How to Initialize a Set with Values in JavaScript

To initialize a Set with values, pass an iterable to the Set constructor. When an iterable 
is passed to the Set constructor, all elements get added to the new Set. The most common 
iterables to initialize a Set with are - array, string and another Set.
 */

const set1 = new Set(['one', 'one', 'two', 'three']);
console.log(set1); // 👉️ {'one', 'two', 'three'}

const set2 = new Set('hello');
console.log(set2); // 👉️ {'h', 'e', 'l', 'o'}

const set3 = new Set([...set1, 'four']);
console.log(set3); // 👉️ {'one', 'two', 'three', 'four'}

set3.add('five');
set3.add('six');

// 👇️ {'one', 'two', 'three', 'four', 'five', 'six'}
console.log(set3);

/**
In the first example, we passed an array to the Set() constructor.
All of the elements in the array got added to the new Set, except for the duplicates.

Set objects only store unique values.

In our second example, we initialized the Set with a string. The string got split on every 
character and added to the new Set.

The l character is contained twice in the string hello, however it is only contained a 
single time in the Set.

Note that the character has to be the same case to be considered duplicate. For example, 
both ts from the string Test will be added to the Set.

 */

const set4 = new Set('Test');
console.log(set4); // 👉️ {'T', 'e', 's', 't'}

/**
In our third Set, we used the spread operator (...) to unpack the values from the first set 
and add an additional value.

Sets are also iterable, just like arrays and strings.

An alternative approach is to create an empty set and manually add values to it.
 */

const set5 = new Set();

set5.add('one');
set5.add('two');
set5.add('three');

console.log(set5); // 👉️ {'one', 'two', 'three'}


/**  
2- How to Get the First Element of a Set in JavaScript

Use destructuring assignment, e.g. const [first] = set. 
The destructuring assignment sets the variable to the first element of the Set.
 */

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

