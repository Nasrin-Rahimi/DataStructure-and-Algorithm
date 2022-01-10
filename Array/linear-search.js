function linearSearch(array, element) {
    // Check for edge cases. Is the array null or empty?
    // If it is, then we return false because the element we're
    // searching for couldn't possibly be in it.
    if(array === null|| array.length === 0) {
        return false;
    }

    // Carry out the linear search by checking each element,
    // starting from the first one.
    for (let i = 0; i < array.length; i++) {
         // We found the element at index i.
        // So we return true to say it exists.
        if(array[i] === element) {
            return true;
        }
    }

     // We didn't find the element in the array.
    return false;
}

//Time complexity: O(n)

/**
 * There is another way of searching an Array. If the elements in the Array are in sorted 
 * order, then we can use binary search. Binary search is where we repeatedly look at the 
 * middle element in the Array, and determine whether the element we're looking for must be
 * to the left, or to the right. Each time we do this, we're able to halve the number of 
 * elements we still need to search, making binary search a lot faster than linear search!

The downside of binary search though is that it only works if the data is sorted. If we 
only need to perform a single search, then it's faster to just do a linear search, as it 
takes longer to sort than to linear search. If we're going to be performing a lot of 
searches, it is often worth sorting the data first so that we can use binary search for 
the repeated searches.
 *  */