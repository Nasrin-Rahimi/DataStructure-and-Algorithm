Amortize is a fancy verb used in finance that refers to paying off the cost of something gradually. 
With dynamic arrays, every expensive append where we have to grow the array "buys" us many cheap 
appends in the future. Conceptually, we can spread the cost of the expensive append over all those 
cheap appends.

Instead of looking at the worst case for an append individually, let's look at the overall cost of 
doing many appends—let's say m appends.

The cost of doing m appends has two parts:

The cost of actually appending all m items.
The cost of any "doubling" we need to do along the way.

The first part is easy—each of our m items costs O(1) time to append. So that's O(m) time for all 
of them.

The second part is trickier. How much do all the doubling operations cost?

Remember: with each "doubling" we double the capacity of our underlying array. So it'll be twice as 
long until the next doubling as it was until the previous doubling.

Say we start off with space for just one item. Our first doubling will involve copying over just one 
item.

We'll need to double again with two items. That'll involve copying over two items.

And we'll need to double again with four items. And again with eight items. And so on.

So, the total cost for copying over items across all of our doubling operations is:

1 + 2 + 4 + 8 + ... + m/2 + m

It's helpful to look at that from right to left:

m + m/2 + m/4 + ... + 4 + 2 + 1

We can see what this comes to when we draw it out. If this is m:

A square with the letter m in the middle.

m/2 is half the size:

The same square from the previous diagram with another rectangle just as tall and half as wide 
attached to the right of it. This rectangle is labeled "m/2".

m/4 is half the size of that:

Another rectangle labeled "m/4" just as wide and half as tall as the "m/2" rectangle is added.
And so on:

Another rectangle labeled "m/8" just as tall and half as wide as the "m/4" rectangle is added, and the pattern continues. The added rectangles (m/2, m/4, m/8, etc) together form a square the same size as the original, m.
We see that the whole right side ends up being another square of size m, making the sum 2m.

So when we do m appends, the appends themselves cost m, and the doubling costs 2m. Put together, 
we've got a cost of 3m, which is O(m). So on average, each individual append is O(1). m appends cost 
us O(m).

Remember: even though the amortized cost of an append is O(1), the worst case cost is still O(n). 
Some appends will take a long time.

Given this, in industry we usually wave our hands and say dynamic arrays have a time cost of O(1) for 
appends, even though strictly speaking that's only true for the average case or the amortized cost.

