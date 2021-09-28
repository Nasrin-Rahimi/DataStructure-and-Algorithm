/** 
Given an array arr of integers, check if there exists two integers N and M such that
 N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]

Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

Input: arr = [3,1,7,11]
Output: false
*/

/** 
Approch 1: Bruce Force
Use leaner search.
*/

let checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(i !== j && arr[i] === 2 * arr[j]) {
                return true;
            }
        }
    }
    return false;
};

/**
 * Time Complexity : O(N^2) because we have to nested loop and every loop has O(n)
 * space Complexity: O(1)
 * 
 * It's not an efficient solution
 */

/**
 * Approch 2 : use Hash Table Data structure
 * 
 * Another possible solution is to use the Hash Table data structure that in JavaScript 
 * can be represented as an object or Map. Its main advantage is that we can assume that it 
 * takes constant time of O(1) to retrieve each stored element, so it is fast.
 * 
 * It also allows us to solve this problem by traversing the array only once:
In each iteration of a for statement we check if the current value already exists as a key in 
our object.

If so, a number and its double exist in the array, we must return true.
If not, store key/value pairs where one pair has the current element divided by 2 as a key and 
the other pair has the current element multiplied by 2 as a key. Notice that the values we store 
with each key do not matter, since we only check the keys.

If the for loop ends without finding a match, it means that the array does not contain a 
number and its double, we must return false.

Since we created a Hash Table with a size that scales linearly according to the size of our input 
array, it has a linear space complexity of O(n).
This time we only traverse the array once, so it has a linear time complexity of O(n).

The problem with using a Hash Table (object) or Map is that when we insert a key/value pair, 
the key is required but its value is not.
When we need a Hash Table data structure’s properties to solve the problem, but we only need 
keys instead of key/value pairs it makes sense to use a Set data collection.
NOTE: Keep in mind that a JavaScript built in Set only stores unique values.

Similar to an object and a Map, we can assume that we can retrieve a value from a Set with a 
constant time complexity of O(1).
We created a Set with a size that scales linearly according to the size of our input array, 
it has a linear space complexity of O(n).
Just like our previous solution we only traverse the array once, so it has a linear time 
complexity of O(n).


 */

let checkIfExist = function(arr) {
    let set = new Set();

    for(let i = 0; i < arr.length; i++) {
        if(set.has(arr[i])){
            return true;
        } else {
            set.add(arr[i] * 2);
            set.add(arr[i] / 2);
        }
    }

    return false;
}