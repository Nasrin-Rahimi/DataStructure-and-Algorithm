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

function isUniqueChars(str) {
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
    

    console.log(isUniqueChars('heworld'))

/**
The time complexity : O(n^2)
 */