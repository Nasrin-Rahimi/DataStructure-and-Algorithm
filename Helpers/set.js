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

/**
3- Check if a Set contains a Value using JavaScript

Use the has() method to check if a Set contains a value, e.g. set.has(1). The has method 
returns true if the value is contained in the Set, otherwise false is returned.
 */

const set1 = new Set(['one', 'two', 'three']);

console.log(set1.has('one')); // 👉️ true
console.log(set1.has('four')); // 👉️ false

/**
The only parameter the Set.has method takes is the value we want to test for presence in 
the Set.

The has method returns a boolean result:

true if the value is contained in the Set
false if the value is not in the Set

Here are some more examples.
 */

const set1 = new Set();

const obj = {country: 'Chile'};
set1.add(obj);
console.log(set1.has(obj)); // 👉️ true

const arr = ['one', 'two'];
set1.add(arr);
console.log(set1.has(arr)); // 👉️ true

// 👇️ false, because they reference
//  different locations in memory
console.log(set1.has(['one', 'two']));

set1.delete(arr);

console.log(set1.has(arr)); // 👉️ false

/**
The has method works even with object and arrays, as long as they have the same reference.

The has method does not check for equality of the values of the object or array, instead it 
checks if they reference the same location in memory.

 */

const obj = {};
console.log(obj === obj); // 👉️ true
console.log({} === {}); // 👉️ false

/**
4- How to check if a Set is Empty in JavaScript
Use the size property to check if a Set is empty, e.g. set.size === 0. The size property 
returns the number of elements in the Set. When accessed on an empty Set, the size property 
returns 0.
 */

const set1 = new Set();
console.log(set1.size); // 👉️ 0

if (set1.size === 0) {
  // 👇️ this runs
  console.log('✅ Set is empty');
} else {
  console.log('⛔️ Set is NOT empty');
}

const set2 = new Set(['a', 'b']);
console.log(set2.size); // 👉️ 2

/**
We used the Set.size property to check if a Set is empty.

The property returns an integer that represents how many elements the Set stores.

The property is similar to an array's length property, however it's read-only and cannot 
be changed.
 */

const set3 = new Set(['one', 'two', 'three']);
console.log(set3.size); // 👉️ 3

set3.size = 1;

console.log(set3.size); // 👉️ 3

/**
We attempted to change the size property on the Set, however we were unable to.

This is different when working with arrays, where the length property can be changed by 
the user.
 */

const arr = ['one', 'two', 'three'];
console.log(arr.length); // 👉️ 3

arr.length = 1;

console.log(arr.length); // 👉️ 1
console.log(arr); // 👉️ ['one']

/**
5- How to sort a Set in JavaScript

 - Convert the Set into an array, using the Array.from() method.
 - Sort the array, by using the Array.sort() method.
 - Convert the array back into a Set object.
 */

 /**
 * 👇️ SORT a NUMBERS Set
 */

const numbersSet = new Set([300, 100, 700]);

// 👉️ sorts numbers in Ascending order
const sortedNumbers = Array.from(numbersSet).sort((a, b) => a - b);
console.log(sortedNumbers); // 👉️ [100, 300, 700]

const sortedNumbersSet = new Set(sortedNumbers);
console.log(sortedNumbersSet); // 👉️ {100, 300, 700}

/**
 * 👇️ SORT a STRINGS Set
 */

const stringsSet = new Set(['c', 'b', 'a']);

const sortedStrings = Array.from(stringsSet).sort();
console.log(sortedStrings); // 👉️ ['a', 'b', 'c']

const sortedStringsSet = new Set(sortedStrings);
console.log(sortedStringsSet); // 👉️ {'a', 'b', 'c'}

/**
We used the Array.from method to create an array from the Set object.

We then called the Array.sort method on the array.

Notice that when sorting numbers, we have to pass a function as a parameter to the sort 
method, whereas with strings, we don't.

The parameter we passed to the sort method is a function that defines the sort order.

If you don't provide this parameter, the array elements get converted to strings and sorted 
according to their UTF-16 code unit values.
This is not what we want when working with Sets that contain numbers, however it's exactly 
what we want when comparing strings.

After we have sorted the array, we have to pass it to the Set constructor to convert it back 
to a Set. We can iterate over Sets in element insertion order.

Using the Array.from method is the recommended approach when using TypeScript, because the 
compiler often complains when using the spread operator (...) with iterators.

Here are the same examples, however this time we use the spread operator (...) instead of 
Array.from.

 */

const numbersSet = new Set([300, 100, 700]);

const sortedNumbers = [...numbersSet].sort((a, b) => a - b);
console.log(sortedNumbers); // 👉️ [100, 300, 700]

const sortedNumbersSet = new Set(sortedNumbers);
console.log(sortedNumbersSet); // 👉️ {100, 300, 700}

/**
 * 👇️ SORT a STRINGS Set
 */

const stringsSet = new Set(['c', 'b', 'a']);

const sortedStrings = [...stringsSet].sort();
console.log(sortedStrings); // 👉️ ['c', 'b', 'a']

const sortedStringsSet = new Set(sortedStrings);
console.log(sortedStringsSet); // 👉️ {'a', 'b', 'c'}

/**
The spread operator (...) is the most commonly used approach to convert aSet into an array.
 */

/**
6- How to Check if two Sets are equal using JavaScript

To check if two Sets are equal:

- Compare the size of the Sets, if their size isn't equal, the Sets are not equal.
- Convert the first Set to an array and use the every() function to iterate over it.
- On each iteration check if the array element is contained in the second Set.

 */

function setsAreEqual(a, b) {
    if (a.size !== b.size) {
      return false;
    }
  
    return Array.from(a).every(element => {
      return b.has(element);
    });
  }
  
  const set1 = new Set(['a', 'b', 'c']);
  const set2 = new Set(['c', 'b', 'a']);
  const set3 = new Set(['a', 'b', 'z']);
  
  console.log(setsAreEqual(set1, set2)); // 👉️ true
  console.log(setsAreEqual(set1, set3)); // 👉️ false
/**
We used the Array.from method to convert the first Set to an array.

The function we passed to the Array.every method gets called with each element in the array, 
until it returns a falsy value or iterates over the entire array.

On each iteration we use the Set.has method to check if the value is contained in the second 
Set.

The has method tests for the presence of a value in a Set.

If the callback function returns false, the every method short-circuits and also returns false.
If the function we passed to the every method returns a falsy value, the every method would 
short-circuit and not continue to iterate.

The falsy values in JavaScript are: null, undefined, false, NaN (not a number), 0, "" 
(empty string).

The only scenario, in which we get back true is if all of the elements from the first Set 
are also contained in the second.

*/  

/**
7- Check if Object is of type Set in JavaScript

Use the instanceof operator to check if an object is a Set - myObj instanceof Set. The 
instanceof operator returns true if the prototype property of a constructor appears in 
the prototype chain of the object.
 */

const set = new Set();
set.add('JavaScript');

console.log(set instanceof Set); // 👉️ true
console.log('test' instanceof Set); // 👉️ false
console.log({} instanceof Set); // 👉️ false

/**
We used the instanceof operator to check if the set variable has the prototype property of 
the Set() constructor in its prototype chain.

This approach would also work if you extend the Set class.
 */

class CustomSet extends Set {
  example() {
    console.log('do work');
  }
}

const set = new CustomSet();
set.add('JavaScript');

console.log(set instanceof Set); // 👉️ true
console.log(set instanceof CustomSet); // 👉️ true
console.log({} instanceof CustomSet); // 👉️ false

/**
In this example, we extended the Set object and the instanceof operator returned true for 
both Set and CustomSet.

Using the instanceof operator is risky when working with IFrames (inline frames). 
The instanceof test might not work when performed in a different window context, 
especially on some older browsers.

As an alternative, you can use duck-typing to check if the object is a Set.
 */

function isSet(set) {
  if (
    set &&
    typeof set.add === 'function' &&
    typeof set.clear === 'function' &&
    typeof set.delete === 'function' &&
    typeof set.has === 'function'
  ) {
    return true;
  }

  return false;
}

const set = new Set();
console.log(isSet(set)); // 👉️ true

const map = new Map();
console.log(isSet(map)); // 👉️ false

console.log(isSet({})); // 👉️ false

/**
A simple way to think about duck-typing is - we're basically saying:

A Set has the following properties / methods. If an object also has these 
properties / methods, then it must be a Set.

In our isSet function, we check if the passed in parameter has the methods a Set would 
have, if the condition is met, we return true.

This could go wrong if an object, that is not a Set, but contains these same methods gets 
passed to the function.
 */

function isSet(set) {
  if (
    set &&
    typeof set.add === 'function' &&
    typeof set.clear === 'function' &&
    typeof set.delete === 'function' &&
    typeof set.has === 'function'
  ) {
    return true;
  }

  return false;
}

// 👇️ true
console.log(
  isSet({
    add: () => {},
    clear: () => {},
    delete: () => {},
    has: () => {},
  }),
);

/**
The duck-typing approach is not exactly rock solid. If the object passed to the isSet 
function contains the properties / methods we are checking for, we get back a false positive.
 */



