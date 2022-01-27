/**
Company's Developers want to do stress test to check the quality of servers' channels. 
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
I am trying out a greedy approach here but I can't prove it so i dont know if this solution 
 is right or wrong. What you basically need to do is first sort the array. Then take 
 (Channels - 1) greatest elements from the array. And from the remaining array take the 
 median if its length > 1.
 
1- Sort the packets array.
2- If we have k channels, put the packets with highest quantity, one per channel in 
k - 1 channels. In this way we sum up the highest numbers and get the maximum possible sum 
of the quantities.
for doing this, iterate over the packets from last to first packet and add up packets to 
one variable. 
3- Put the remaining packets in the last channel. 
Just calculate the median of the remaining packets (the packets with lowest quantity).
4- Add the median to the variable that sum up other packets and we are done.
 */


function getMaximumQuality (packets, channels) {

    if(packets == null || packets.length == 0) {
        return 0;
    }

    if (channels <= 0) {
        throw new Error("You don't have any channel to send packets!");
    }

    let n = packets.length;
    let i = n - 1;
    let maxSum = 0;
    //The channels are more than packets.(every channet must transfer at least one packet)
    if(channels > n) {
        throw new Error('We have at least one chennet without any packet!');
    }

    if(n === 1) {
        return packets[0];
    }

    packets.sort((a,b) => a - b);

    while(i >= n - channels + 1) {
        maxSum += packets[i];
        i--;
    }
    
    const remainingPacketsCount = i + 1;
    //calculate the median of the remaining packets for the last channel
    if(remainingPacketsCount % 2 === 0) { //the number of remaining packets are even
        const median = (packets[parseInt(remainingPacketsCount / 2)] 
        + packets[parseInt(remainingPacketsCount / 2) - 1]) / 2 ;
        maxSum += median;
    } else {
        maxSum += packets[parseInt(remainingPacketsCount / 2)];
    }

    return Math.ceil(maxSum);

}

console.log(getMaximumQuality([1,2,3,4,5], 1));
