/**
Given two strings, write a method to decide if one is a permutation of the other.
 */

/**
 * First we should confirm some details with interviewer. We should understand if the 
 * permutation comparisonn is case sensitive. That is: is Bat a permutiation of tab?
 * and we should ask if space is significant. So, 'bat  'is different form 'tab'?
 * 
 * Observe first that strings of different lengths cann't be permutation of each other.
 * Hint 1: Describe what it means for two strings to be permutation of each other. Now
 * look at that definnition you provided. Can you check the strings against that definition?
 * 
 * Hint 2: There is one solution with O(nlogn) time. Another solution uses some space, but
 * is O(n) time.
 * 
 * Hint 3: Could a hash table useful.
 * 
 * Hint 4: Two strings that are permutations should have the same characters, but in differnt
 * orders. Can you make the orders the same?
 */

/**
Solution 1: Sort the strings.
If two strings are permutations, then we know they have the same characters, but inn different
orders. Therefore, sorting the strings will put the characters from two permutations in the 
same order. We just need to compare the sorted version of the strings.
 */

function checkPermutation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    str1 = sortString(str1);
    str2 = sortString(str2);

    for(let i = 0; i < str1.length; i++) {
        if(str1[i] !== str2[i]) {
            return false;
        }
    }

    return true;
}

function sortString(str) {
    return str.split('').sort().join('');
}

console.log(checkPermutation('helwoj', 'helowj'));

/**
 * The algorithm is clean, simple and easy to understand, but if efficeincy is very important
 * we can implement it in a differnt way.
Time Complexity: O(nlogn)
space Complexity: O(1)
 */

/**
 * Solution 2: Check if the two strings have identical character count.
 * We can use the defintion of permutation. (two words with the same character count)
 * We create an array that operate some what like a hash table, mapping each character to 
 * it's frequency. We increment through the first string, then decrement through the seconnd 
 * string. If strings are permutation then the array will be all zeroes at the end.
 * 
 * We can terminate early, if a value ever turns negative. If we don't terminate early, then 
 * the array must be all zeroes. This is because the strings are in the same length and 
 * we incremented the same number of times we decremented. The array can't have any positive
 * values if it doesn't have any negative values.
 */

function checkPermutation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    
    let letters = new Array(128).fill(0); //Asumption ASCII

    for(let i = 0; i < str1.length; i++) {
        letters[str1.charAt(i)]++;
    }

    for(let i = 0; i < str2.length; i++) {
        letters[str2.charAt(i)]--;
        if(letters[str2.charAt(i)] < 0) {
            return false;
        }
    }
    
    //letters has no negative values, therefore no positive values either.
    return true;
}

//In interview you should check with interviewer about the size of the character set.
//We assumed that the character set was ASCII.