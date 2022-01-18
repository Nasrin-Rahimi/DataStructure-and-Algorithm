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
    
console.log(isUniqueChars('hello world'))