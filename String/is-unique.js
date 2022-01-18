/**
Implement an algorithm to determine if all characters in a string are uique.
What if you cann't use additional data structure?

 */ 

/**
first question to ask:
if the string is an ASCII string or a Unicode string. (helpers > ASCII-vs-Unicode)

We'll assume for simplicity the character set is ASCII. If not we would need to increase
thestoragesize.

 */

/**
Approch 1: Brute-Force
Iterate over all characters in the string and for each character, iterate over all other 
character and in each iteration, check if the character in outer loop is equal the char in 
inner loop, return false or return true at the end of iteration. 

 */

function isUniqueChars1(str) {
    const len = str.length;
    for (let i = 0; i < len; i++ ) {
        for(let j  = 0 ; j < len; j++){
           if(i !== j && str[i] === str[j]){
               return false;
            }
        }
    }
    return true;
}
    

//console.log(isUniqueChars('heworld'))

/**
The time complexity : O(n^2)
 */

/**
Approch 2:

One solution is to create an array of booleans, where the flag at index i indicates whether
character i in the alphabet is contained in the string. The second time you see the 
character i, you can immediately return false.

We can also return false if the string length exceeds the number of unique characters 
in the alphabet. After all, you can't form a string of 280 unique characters out of a 128 
character alphabet.

It is also okay to assume 256 characters. This would be the case in extended ASCII. You 
should clarify your assumptions with your interviewer.

 */

function isUniqueChars(str) {
    if(str.length > 128) {
       return false;
    }
    
    let charSet = new Array(128).fill(false);
   
    for(let i = 0; i < str.length; i++) {
        const val = str.charAt(i);
        if(charSet[val]) {
            return false;
        }
        charSet[val] = true;
    }

    return true;
}
    
 console.log(isUniqueChars('abcdefghijklmnopqrstuvwxy'))

/**
The time complexity for this code is O(n), where n is the length of the string. The space 
complexity is O(1). We can say the time complexity is O(1), since the for loop will never
 iterate more than 128 characters.

If we don't assume the char set is fixed, we could express the complexity as O(c) space and 
O(min(c,n)) or O(c) time, where c is the size of the character set.

 */

/**
We can also use set in js and iterate over the string characters and in each iteration,
check if set has the character, then return false and if it doesn't have, add the character 
to set. 

Add the end of the iteration we can say all characters are unique and return true.

 */

function isUniqueChars(str) {
    if(str.length > 128) {
       return false;
    }
   
    let set = new Set();
   
    for(let i = 0; i < str.length; i++) {
        const val = str.charAt(i);
        if(set.has(val)) {
            return false;
        }
        set.add(val)
    }
  
    return true;
}

//console.log(isUniqueChars('he wor ld'))

/**
If we can't  use additional data structure, we can do:

1- compare every character of the string to every other character of the string (approach 1) 
This will take O(n^2) time and O(1) space.

2- If we are allowed to modify the string, we could sort the string inn O(nlogn) time and 
then linearly check the string for neighboring characters that are identical.

 */
