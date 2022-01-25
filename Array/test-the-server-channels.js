/**
Amazon Developers want to do stress test to check the quality of servers' channels. 
They must ensure the following

1- Each of the packets must be sent via a single channel
2- Each of the channels must transfer at least one packet.

The quality of the transfer for a channel is defined by the median of the sizes of all 
the data packets sent through that channel. Median of an array is the middle element if 
the array is sorted in ascending order.

Find the maximum possible sum of the quantities of all the channels. If the answer is 
floating point value, round it to the next higher integer.

Eaxmple:- packets = [1,2,3,4,5] and channels = 2
One maximal solution is to transfer packets [1,2,3,4] through channel 1 and packet [5] 
through channel 2. The quality of transfer for channel 1 is (2+3)/2=2.5 and that of 
channel 2 is 5. Their sum is 2.5+5 =7.5 which is round up to 8.

Eaxmple:- packets = [2,2,1,5,3], channel = 2
One solution is to transfer packets [5] through one channel and packet [2,2,1,3] through 
other channel. the sum of quantity is 5+(2+2)/2=7

Eaxmple:- packets = [89,48,14], channel = 3
There are 3 channels for each 3 packets. Each channel carries one, so the overall sum of 
quantity is 89+48+14=151

Eaxmple:- packets = [1], channel = 1
There is onle one channel and only one packet so output is 1
Function takes integer array and integer channel as input parameters and return long.
Please help out with solution.
 */

/**
Solution 1: 
1- Sort the item.
2- Add the item in one variable up till channel -1
    a. Add the item from last and remove from the list
3- Then just calculate the standard median of the remaining array.
4- Add the median and you are done.
 */