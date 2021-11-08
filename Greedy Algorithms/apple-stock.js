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
 */