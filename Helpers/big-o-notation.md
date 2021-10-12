The idea behind big O notation

Big O notation is the language we use for talking about how long an algorithm takes to run. It's how we compare the efficiency of different approaches to a problem.

It's like math except it's an awesome, not-boring kind of math where you get to wave your hands through the details and just focus on what's basically happening.

With big O notation we express the runtime in terms of—brace yourself—how quickly it grows relative to the input, as the input gets arbitrarily large.

Let's break that down:

How quickly the runtime grows—It's hard to pin down the exact runtime of an algorithm. It depends on the speed of the processor, what else the computer is running, etc. So instead of talking about the runtime directly, we use big O notation to talk about how quickly the runtime grows.

relative to the input—If we were measuring our runtime directly, we could express our speed in seconds. Since we're measuring how quickly our runtime grows, we need to express our speed in terms of...something else. With Big O notation, we use the size of the input, which we call "n." So we can say things like the runtime grows "on the order of the size of the input" (O(n)) or "on the order of the square of the size of the input" (O(n^2))

as the input gets arbitrarily large—Our algorithm may have steps that seem expensive when n is small but are eclipsed eventually by other steps as n gets huge. For big O analysis, we care most about the stuff that grows fastest as the input grows, because everything else is quickly eclipsed as n gets very large. (If you know what an asymptote is, you might see why "big O analysis" is sometimes called "asymptotic analysis.")

Some examples

let printFristItem = function(items) {
    console.log(items[0]);
}

This function runs in O(1) time (or "constant time") relative to its input. The input list could be 1 item or 1,000 items, but this function would still just require one "step."

let pritAllItems = fuction(items) {
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}
 
This function runs in O(n) time (or "linear time"), where n is the number of items in the list. If the list has 10 items, we have to print 10 times. If it has 1,000 items, we have to print 1,000 times.

let printAllPossibleOrderedPairs = function(items){
    for(let i = 0; i < items.length; i++) {
        for(let j = 0; j < items.length; j++) {
            console.log(items[i],items[j]);
        }
    }
}
 
Here we're nesting two loops. If our list has n items, our outer loop runs n times and our inner loop runs n times for each iteration of the outer loop, giving us n^2 total prints. Thus this function runs in O(n^2) time (or "quadratic time"). If the list has 10 items, we have to print 100 times. If it has 1,000 items, we have to print 1,000,000 times.

Drop the constants

 When you're calculating the big O complexity of something, you just throw out the constants. So like:

let printAllItemsTwice = function(items) {
    for(let i = 0; i < items.length; i++) {
        console.log(items[i])
    }

    for(let i = 0; i < items.length; i++) {
        console.log(items[i])
    }
}
  
This is O(2n), which we just call O(n).

let printFirstItemThenFirstHalfThenSayHi100Times = function(items){
   console.log(items[0]);

   let middleIndex = parseInt(items.length / 2);
   let i = 0;

   while(i < middleIndex){
       console.log(items[i]);
       i++;
   }
   
   for(i = 0 ; i < 100; i++) {
       console.log("hi");
   }
   
}

This is O(1 + n/2 + 100), which we just call O(n).

Why can we get away with this? Remember, for big O notation we're looking at what happens as n gets arbitrarily large. As n gets really big, adding 100 or dividing by 2 has a decreasingly significant effect.

Drop the less significant terms

For example:

let printAllNumbersThenAllPairSums = function(numbers){
    console.log("these are the numbers:");
    for(let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
  
    console.log("and these are their sums:");
     for(let i = 0; i < numbers.length; i++) {
         for(let j = 0; j < numbers.length; j++) {
            console.log(numbers[i] + numbers[j]);
         }
     }
}

Here our runtime is O(n + n^2), which we just call O(n^2). Even if it was O(n^2/2 + 100n), it would still be O(n^2).

Similarly:

O(n^3 + 50n^2 + 10000) is O(n^3)

O((n + 30) * (n + 5)) is O(n^2)

Again, we can get away with this because the less significant terms quickly become, well, less significant as n gets big.