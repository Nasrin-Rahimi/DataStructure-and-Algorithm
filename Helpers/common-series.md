The sum of integers 1..n is ≈ (n^2)/2, which is O(n^2)

Series like this actually come up quite a bit:

1 + 2 + 3 + ... + (n-1) + n

Or, equivalently, the other way around:

n + (n-1) + ... + 3 + 2 + 1

And sometimes the last nn is omitted, but as we'll see it doesn't affect the big O:

(n-1) + (n-2) + ... + 3 + 2 + 1

