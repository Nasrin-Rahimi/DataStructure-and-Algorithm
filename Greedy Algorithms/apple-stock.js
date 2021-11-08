/**
Writing programming interview questions hasn't made me rich yet ... so I might give up and 
start trading Apple stocks all day instead.

First, I wanna know how much money I could have made yesterday if I'd been trading Apple 
stocks all day.

So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, 
where:

The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
The values are the price (in US dollars) of one share of Apple stock at that time.
So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

Write an efficient function that takes stockPrices and returns the best profit I could 
have made from one purchase and one sale of one share of Apple stock yesterday.

For example:

  const stockPrices = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)

No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the 
same time step—at least 1 minute has to pass.
 */

/**
Breakdown
To start, try writing an example value for stockPrices and finding the maximum profit 
"by hand." What's your process for figuring out the maximum profit?

The brute force ↴ approach would be to try every pair of times (treating the earlier 
time as the buy time and the later time as the sell time) and see which one is higher.
 */

function getMaxProfit(stockPrices) {
    let maxProfit = 0;
  
    // Go through every time
    for (let outerTime = 0; outerTime < stockPrices.length; outerTime++) {
  
      // For each time, go through every other time
      for (let innerTime = 0; innerTime < stockPrices.length; innerTime++) {
  
        // For each pair, find the earlier and later times
        const earlierTime = Math.min(outerTime, innerTime);
        const laterTime = Math.max(outerTime, innerTime);
  
        // And use those to find the earlier and later prices
        const earlierPrice = stockPrices[earlierTime];
        const laterPrice = stockPrices[laterTime];
  
        // See what our profit would be if we bought at the
        // min price and sold at the current price
        const potentialProfit = laterPrice - earlierPrice;
  
        // Update maxProfit if we can do better
        maxProfit = Math.max(maxProfit, potentialProfit);
      }
    }
  
    return maxProfit;
}

/**
But that will take O(n^2)time, ↴ since we have two nested loops—for every time, we're 
going through every other time. Also, it's not correct: we won't ever report a 
negative profit! Can we do better?

Well, we’re doing a lot of extra work. We’re looking at every pair twice. We know we have 
to buy before we sell, so in our inner for loop we could just look at every price after 
the price in our outer for loop.

That could look like this:
 */

function getMaxProfit(stockPrices) {
    let maxProfit = 0;
  
    // Go through every price and time
    for (let earlierTime = 0; earlierTime < stockPrices.length; earlierTime++) {
      const earlierPrice = stockPrices[earlierTime];
  
      // And go through all the LATER prices
      for (let laterTime = earlierTime + 1; laterTime < stockPrices.length; laterTime++) {
        const laterPrice = stockPrices[laterTime];
  
        // See what our profit would be if we bought at the
        // min price and sold at the current price
        const potentialProfit = laterPrice - earlierPrice;
  
        // Update maxProfit if we can do better
        maxProfit = Math.max(maxProfit, potentialProfit);
      }
    }
  
    return maxProfit;
}

/**
What’s our runtime now?

Well, our outer for loop goes through all the times and prices, but our inner for loop 
goes through one fewer price each time. So our total number of steps is the 
sum n + (n - 1) + (n - 2) ... + 2 + 1n+(n−1)+(n−2)...+2+1 ↴ , which is still O(n^2)time.

We can do better!
 */

/**
If we're going to do better than O(n^2), we're probably going to do it in either 
O(nlgn) or O(n). O(nlgn) comes up in sorting and searching algorithms where we're 
recursively cutting the array in half. It's not obvious that we can save time by
cutting the array in half here. Let's first see how well we can do by looping through 
the array only once.

Since we're trying to loop through the array once, let's use a greedy ↴ approach, where 
we keep a running maxProfit until we reach the end. We'll start our maxProfit at $0. 
As we're iterating, how do we know if we've found a new maxProfit?

At each iteration, our maxProfit is either:

1- the same as the maxProfit at the last time step, or
2- the max profit we can get by selling at the currentPrice
How do we know when we have case (2)?

The max profit we can get by selling at the currentPrice is simply the difference 
between the currentPrice and the minPrice from earlier in the day. If this difference 
is greater than the current maxProfit, we have a new maxProfit.

So for every price, we’ll need to:

keep track of the lowest price we’ve seen so far
see if we can get a better profit
 */

function getMaxProfit(stockPrices) {
    let minPrice = stockPrices[0];
    let maxProfit = 0;
  
    for (let i = 0; i < stockPrices.length; i++) {
      const currentPrice = stockPrices[i];
  
      // Ensure minPrice is the lowest price we've seen so far
      minPrice = Math.min(minPrice, currentPrice);
  
      // See what our profit would be if we bought at the
      // min price and sold at the current price
      const potentialProfit = currentPrice - minPrice;
  
      // Update maxProfit if we can do better
      maxProfit = Math.max(maxProfit, potentialProfit);
    }
  
    return maxProfit;
}

/**
We’re finding the max profit with one pass and constant space!
 */