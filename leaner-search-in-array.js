/*
Check every element in the Array. We continue checking elements until we find the element
 we're looking for, or we reach the end of the Array. This technique for finding an 
 element by checking through all elements one by one is known as the linear search 
 algorithm. In the worst case, a linear search ends up checking the entire Array. 
 Therefore, the time complexity for a linear search is O(N).

 edge cases in Leaner Search:
  - the element you're searching for might not even exist in the Array. 
  - the input Array doesn't contain any elements at all.
  - the array is null.
*/

let leanerSearch = function (array, element) {
    if(array === null || array.length === 0) {
        return false;
    }

    for(let i = 0; i < array.length; i++) {
        if(array[i] === element) {
            return true;
        }
    }

    return false;
}