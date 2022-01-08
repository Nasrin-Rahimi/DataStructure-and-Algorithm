/** 
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the 
remaining elements to the right.

Note that elements beyond the length of the original array are not written. 
Do the above modifications to the input array in place and do not return anything.

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]

Input: arr = [1,2,3]
Output: [1,2,3]
*/

/**
 * 
Approch 1 : using extra space
 */

let duplicateZeros = function(arr) {
    let n = arr.length;
	let res = new Array(n).fill(0);
	let i = 0, j = 0;

	while(j < n) {
		if(arr[i] == 0) {
            j = j + 2;
        } else {
            res[j] = arr[i];
            j++;
        }
        i++;
    }

   for(let i = 0; i < n; i++) {
       arr[i] = res[i];
   }
   //arr = res.map(el => el) it's not working!
}

/**
 Time Complexity: O(n) + O(n) = O(n)
 Space Complexity: O(n) for res array
 */

/**
 * 
 Approch 2: Bruce Force
 */

let duplicateZeros = function(arr) {
    let len = arr.length;
    let i = 0;

    while(i < len - 1){
        if(arr[i] == 0){
            for (let j = len - 2; j >= i; j--){
                arr[j+1] = arr[j];
            }
            i = i + 2;
        }
        else {
            i++;
        }
    }

    return arr;
}  // Time complexity = O(N^2)

/**Approach 3: Two pass, O(1) space
 * If we know the number of elements which would be discarded from the end of the array, 
 * we can copy the rest. How do we find out how many elements would be discarded in the 
 * end? The number would be equal to the number of extra zeros which would be added to 
 * the array. The extra zero would create space for itself by pushing out an element from 
 * the end of the array.

Once we know how many elements from the original array would be part of the final array, 
we can just start copying from the end. Copying from the end ensures we don't lose any 
element since, the last few extraneous elements can be overwritten.

Algorithm

1- Find the number of zeros which would be duplicated. Let's call it possible_dups. We do need 
to make sure we are not counting the zeros which would be trimmed off. Since, the discarded 
zeros won't be part of the final array. The count of possible_dups would give us the number 
of elements to be trimmed off the original array. Hence at any point, length_ - possible_dups 
is the number of elements which would be included in the final array.

2- Handle the edge case for a zero present on the boundary of the leftover elements.

Let's talk about the edge case of this problem. We need to be extra careful when we are 
duplicating the zeros in the leftover array. This care should be taken for the zero 
which is lying on the boundary. Since, this zero might be counted as with possible 
duplicates, or may be just got included in the left over when there was no space left 
to accommodate its duplicate. If it is part of the possible_dups we would want to duplicate 
it otherwise we don't.

An example of the edge case is - [8,4,5,0,0,0,0,7]. In this array there is space to 
accommodate the duplicates of first and second occurrences of zero. But we don't have 
enough space for the duplicate of the third occurrence of zero. Hence when we are copying 
we need to make sure for the third occurrence we don't copy twice. Result = [8,4,5,0,0,0,0,0]

3- Iterate the array from the end and copy a non-zero element once and zero element twice. 
When we say we discard the extraneous elements, it simply means we start from the left of 
the extraneous elements and start overwriting them with new values, eventually right 
shifting the left over elements and creating space for all the duplicated elements in 
the array.

*/

let duplicateZeros = function(arr) {
    let n = arr.length - 1;
    let possibleDups = 0;
    
    // Find the number of zeros to be duplicated
    // Stopping when i points beyond the last element in the original array
    // which would be part of the modified array
    for(let i = 0; i <= n - possibleDups; i++) {
         // Count the zeros
        if(arr[i] === 0) {
             // Edge case: This zero can't be duplicated. We have no more space,
             // as i is pointing to the last element which could be included  
            if(i === n - possibleDups){
                 // For this zero we just copy it without duplication.
                arr[n] = 0;
                n -= 1;
                break;
            }
            possibleDups++;
        }
    }
    
    let last = n - possibleDups;
     // Start backwards from the last element which would be part of new array.
    for (let i = last; i >= 0; i--) {
        if(arr[i] === 0) {
            arr[i + possibleDups] = 0;
            possibleDups--;
            arr[i + possibleDups] = 0;
        } else {
            arr[i + possibleDups] = arr[i];
        }
    }
}

/**
 * Complexity Analysis

Time Complexity:O(N), where N is the number of elements in the array. We do two passes 
through the array, one to find the number of possible_dups and the other to copy the 
elements. In the worst case we might be iterating the entire array, when there are 
less or no zeros in the array.

Space Complexity: O(1). We do not use any extra space.
 */