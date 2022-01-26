/**
Given an array A[] of n integers, the task is to find a subsequence of size k whose product 
is maximum among all possible k sized subsequences of the given array.

Constraints 
1 <= n <= 10^5
1 <= k <= n

Examples: 
 
Input : A[] = {1, 2, 0, 3}, 
          k = 2
Output : 6
Explanation : Subsequence containing elements
{2, 3} gives maximum product : 2*3 = 6

Input : A[] = {1, 2, -1, -3, -6, 4}, 
          k = 4
Output : 144
Explanation : Subsequence containing {2, -3, 
-6, 4} gives maximum product : 2*(-3)*(-6)*4 
= 144
 */

/**
Following are different cases that arise in this problem.
 

CASE I: if the maximum element of A is 0 and k is odd Here if we don’t include 0 in 
subsequence then product will be less than 0, Since the product of an odd number of negative 
integers gives a negative integer. Hence 0 must be included in the subsequence. Since 0 is 
present in subsequence, the product of subsequence is 0. Answer = 0.

CASE II: if maximum element of A is negative and k is odd. Here the product will be less 
than 0, 
Since the product of an odd number of negative integers gives a negative integer. So to 
get the maximum product, we take the product of the smallest (absolute value wise) k 
elements. Since absolute value wise : | A[n-1] | > | A[n-2] | … > | A[0] |. Hence we take 
product of A[n-1], A[n-2], A[n-3], …. A[n-k] 
Answer = A[n-1] * A[n-2] * ….. * A[n-k]

CASE III: if maximum element of A is positive and k is odd. Here in subsequence of k size 
if all elements are < 0 then product will be less than 0, Since the product of an odd number 
of negative integers gives a negative integer. Hence, at least one element must be a 
positive integer in the subsequence. To get max product max positive number should be 
present in the subsequence. Now we need to add k-1 more elements to the subsequence. 
Since k is odd, k-1 becomes even. So the problem boils down to case IV. 
Answer = A[n-1] * Answer from CASE IV.

CASE IV: if k is even. Since k is even, we always add a pair in subsequence. So total pairs 
required to be added in subsequence is k/2. So for simplicity, our new k is k/2. Now since 
A is sorted, pair with the maximum product will always be either A[0]*A[1] OR A[n-1]*A[n-2]. 
In case of doubt about the previous statement think about negative numbers.

Now,
    if A[0]*A[1] > A[n-1]*A[n-2],
       second max product pair will be 
       either A[2]*A[3] OR A[n-1]*[n-2].
    else second max product pair will be
         either A[0]*A[1] OR A[n-3]*[n-4]. 
 */

function maxProductSubarrayOfSizeK(nums, k) {
    const n = nums.length;

    nums.sort((a, b) => a - b);

    // variable to store final product of
    // all element of sub-sequence of size k
    let product = 1;
    const kIsOdd = (k % 2 !== 0);
    let i;

    // CASE I
    // If max element is 0 and
    // k is odd then max product will be 0
    if (nums[n - 1] === 0 && kIsOdd) {
        return 0;
    }

    // CASE II
    // If all elements are negative and
    // k is odd then max product will be
    // product of rightmost-subarray of size k
    if (nums[n - 1] < 0 && kIsOdd) {
        for (i = n - 1; i >= n - k; i--) {
            product *= nums[i];
        }
        return product;
    }

    // else 
    // i is current left pointer index
    i = 0;
   
    // j is current right pointer index
    let j = n - 1;

    // CASE III
    // if k is odd and rightmost element in sorted array is positive 
    // then it must come in subsequence
    // Multiplying A[j] with product and correspondingly changing j
    if (kIsOdd) {
        product *= nums[j];
        j--;
        k--;
    }

    // CASE IV
    // Now k is even and we deal with pairs
    // Each time a pair is multiplied to
    // product i.e.. two elements are added to
    // subsequence each time  Effectively k becomes half
    // Hence, k >>= 1 means k /= 2

    // Now finding k corresponding pairs to get maximum possible value of product
    for (let itr = 0; itr < k; itr++) {
               
        // product from left pointers
        let left_product = nums[i] * nums[i + 1];
   
        // product from right pointers
        let right_product = nums[j] * nums[j - 1];
   
        // Taking the max product from two choices
        // Correspondingly changing the pointer's position
        if (left_product > right_product) {
            product *= left_product;
            i += 2;
        }
        else {
            product *= right_product;
            j -= 2;
        }
    }
   
    // Finally return product
    return product;
}

/**
    let A = [ 1, 2, -1, -3, -6, 4 ];
    let n = A.length;
    let k = 4;
    document.write(maxProductSubarrayOfSizeK(A, n, k));

    Output: 144
*/
   