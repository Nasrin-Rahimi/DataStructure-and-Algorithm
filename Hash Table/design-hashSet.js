/**
 * Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:

void add(key) Inserts the value key into the HashSet.
bool contains(key) Returns whether the value key exists in the HashSet or not.
void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, 
do nothing.
 
 */

/**
 * Intuition
This is a classical question from textbook, which is intended to test one's knowledge on 
data structure. Therefore, needless to say, it is not desirable to solve the problem with 
any build-in HashSet data structure.

There are two key questions that one should address, in order to implement the HashSet data 
structure, namely hash function and collision handling.

hash function: the goal of the hash function is to assign an address to store a given value. 
deally, each unique value should have a unique hash value.

collision handling: since the nature of a hash function is to map a value from a space A 
into a corresponding value in a smaller space B, it could happen that multiple values from 
space A might be mapped to the same value in space B. This is what we call collision. Therefore, it is indispensable for us to have a strategy to handle the collision.

Overall, there are several strategies to resolve the collisions:

Separate Chaining: for values with the same hash key, we keep them in a bucket, and each 
bucket is independent of each other.

Open Addressing: whenever there is a collision, we keep on probing on the main space with 
certain strategy until a free slot is found.

2-Choice Hashing: we use two hash functions rather than one, and we pick the generated 
address with fewer collision.

In this article, we focus on the strategy of separate chaining. Here is how it works overall.

Essentially, the primary storage underneath a HashSet is a continuous memory as Array. 
Each element in this array corresponds to a bucket that stores the actual values.

Given a value, first we generate a key for the value via the hash function. The generated 
key serves as the index to locate the bucket.

Once the bucket is located, we then perform the desired operations on the bucket, such as 
add, remove and contains.
 */