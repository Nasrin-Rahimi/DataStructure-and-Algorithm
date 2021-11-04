/**
You've built an inflight entertainment system with on-demand movie streaming.

Users on longer flights like to start a second movie right when their first one ends, 
but they complain that the plane usually lands before they can see the ending. So you're 
building a feature for choosing two movies whose total runtimes will equal the exact 
flight length.

Write a function that takes an integer flightLength (in minutes) and an array of integers 
movieLengths (in minutes) and returns a boolean indicating whether there are two numbers 
in movieLengths whose sum equals flightLength.

When building your function:

1- Assume your users will watch exactly two movies
2- Don't make your users watch the same movie twice
3- Optimize for runtime over memory
 */

/**
Breakdown
How would we solve this by hand? We know our two movie lengths need to sum to flightLength. 
So for a given firstMovieLength, we need a secondMovieLength that equals 
flightLength - firstMovieLength.

To do this by hand we might go through movieLengths from beginning to end, treating 
each item as firstMovieLength, and for each of those check if there's a secondMovieLength 
equal to flightLength - firstMovieLength.

How would we implement this in code? We could nest two loops (the outer choosing 
firstMovieLength, the inner choosing secondMovieLength). That’d give us a runtime of 
O(n^2). We can do better.
 */