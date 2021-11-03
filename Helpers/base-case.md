The base case tells a recursive function when to stop. Otherwise it would keep calling itself forever!

For example, we could add all numbers 1 to n recursively like this:

function sum1ToN(n) {
    return n + sum1ToN(n-1);
}

If we input 3 as our n, this function will take 3, then add 2, then add 1, then add 0, then add -1, then add -2, etc forever (or until the program crashes).

We want to stop adding when n gets to 1. We'd say that our "base case" is n <= 1, and our code might look like:

function sum1ToN(n) {

    // base case:
    if (n <= 1) return 1;

    return n + sum1ToN(n-1);
}

Whenever writing a recursive function, be careful not to forget the base case!
