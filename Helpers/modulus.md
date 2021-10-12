The modulus operation (also called modulo or mod) finds the remainder after dividing one integer by another. It's usually written as %.

For example, 7 \ 5 is 1 with a remainder of 2. So 7 % 5 is 2.

It's commonly used to force a number into a certain range. For example, any number, when modded by 3 gives us an integer in the range 0..2:

>>> 0 % 3
0
>>> 1 % 3
1
>>> 2 % 3
2
>>> 3 % 3
0
>>> 4 % 3
1
>>> 5 % 3
2
>>> 6 % 3
0
>>> 7 % 3
1