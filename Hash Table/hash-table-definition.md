Hash Table is a data structure which organizes data using hash functions in order to support quick insertion and search.

Other names for hash table are: 
hash, hash map, map, unordered map, dictionary

A hash function takes data (like a string, or a file’s contents) and outputs a hash, a fixed-size string or number.

For example, here’s the MD5 hash (MD5 is a common hash function) for a file simply containing “cake”:

  DF7CE038E2FA96EDF39206F898DF134D

And here’s the hash for the same file after it was edited to be “cakes”:

  0E9091167610558FDAE6F69BD6716771

Notice the hash is completely different, even though the files were similar. Here's the hash for a long film I have on my hard drive:

  664f67364296d08f31aec6fea4e9b83f

The hash is the same length as my other hashes, but this time it represents a much bigger file—461Mb.

We can think of a hash as a "fingerprint." We can trust that a given file will always have the same hash, but we can't go from the hash back to the original file. Sometimes we have to worry about multiple files having the same hash value, which is called a hash collision.

There are two different kinds of hash tables: hash set and hash map.

The hash set is one of the implementations of a set data structure to store no repeated values.

The hash map is one of the implementations of a map data structure to store (key, value) pairs.

It is easy to use a hash table with the help of standard template libraries. Most common languages such as Java, C++ and Python support both hash set and hash map.

By choosing a proper hash function, the hash table can achieve wonderful performance in both insertion and search.

Strengths:
Fast lookups. Lookups take O(1)O(1) time on average.
Flexible keys. Most data types can be used for keys, as long as they're hashable.

	    Average	    Worst Case
space	O(n)	    O(n)
insert	O(1)	    O(n)
lookup	O(1)	    O(n)
delete	O(1)	    O(n)

Weaknesses:
Slow worst-case lookups. Lookups take O(n)O(n) time in the worst case.

Unordered. Keys aren't stored in a special order. If you're looking for the smallest key, the largest key, or all the keys in a range, you'll need to look through every key to find it.

Single-directional lookups. While you can look up the value for a given key in O(1) time, looking up the keys for a given value requires looping through the whole dataset—O(n) time.

Not cache-friendly. Many hash table implementations use linked lists, which don't put data next to each other in memory.

The Principle of Hash Table

The key idea of Hash Table is to use a hash function to map keys to buckets. To be more specific,

1- When we insert a new key, the hash function will decide which bucket the key should be assigned and the key will be stored in the corresponding bucket;

2- When we want to search for a key, the hash table will use the same hash function to find the corresponding bucket and search only in the specific bucket.

An example:

keys    hash function   buckets 
0    --------------------> 0
                           1
1987  -------------------> 2
                           3
24  ---------------------> 4

2   ---------------------> goes to 2 like 1978

In the example, we use y = x % 5 as our hash function. Let's go through the insertion and search strategies using this example:

Insertion: we parse the keys through the hash function to map them into the corresponding bucket.
e.g. 1987 is assigned to bucket 2 while 24 is assigned to bucket 4.
Search: we parse the keys through the same hash function and search only in the specific bucket.
e.g. if we search for 1987, we will use the same hash function to map 1987 to 2. So we search in bucket 2 and we successfully find out 1987 in that bucket.
e.g. if we search for 23, will map 23 to 3 and search in bucket 3. And We find out that 23 is not in bucket 3 which means 23 is not in the hash table.
 
Keys to Design a Hash Table

There are two essential factors that you should pay attention to when you are going to design a hash table.

1. Hash Function
The hash function is the most important component of a hash table which is used to map the key to a specific bucket. In the example in previous article, we use y = x % 5 as a hash function, where x is the key value and y is the index of the assigned bucket.

The hash function will depend on the range of key values and the number of buckets.

It is an open problem to design a hash function. The idea is to try to assign the key to the bucket as uniform as you can. Ideally, a perfect hash function will be a one-one mapping between the key and the bucket. However, in most cases a hash function is not perfect and it is a tradeoff between the amount of buckets and the capacity of a bucket.

2. Collision Resolution
Ideally, if our hash function is a perfect one-one mapping, we will not need to handle collisions. Unfortunately, in most cases, collisions are almost inevitable. For instance, in our previous hash function (y = x % 5), both 1987 and 2 are assigned to bucket 2. That is a collision.

A collision resolution algorithm should solve the following questions:

How to organize the values in the same bucket?
What if too many values are assigned to the same bucket?
How to search a target value in a specific bucket?
These questions are related to the capacity of the bucket and the number of keys which might be mapped into the same bucket according to our hash function.

Let's assume that the bucket, which holds the maximum number of keys, has N keys.

Typically, if N is constant and small, we can simply use an array to store keys in the same bucket. If N is variable or large, we might need to use height-balanced binary search tree instead.




