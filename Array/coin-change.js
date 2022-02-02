/** 
Given a value N, if we want to make change for N cents, and we have infinite supply 
of each of S = { S1, S2, .. , Sm} valued coins, how many ways can we make the change? 
The order of coins doesn’t matter.
For example, for N = 4 and S = {1,2,3}, there are four solutions: {1,1,1,1},{1,1,2},{2,2},{1,3}. 
So output should be 4. 
For N = 10 and S = {2, 5, 3, 6}, there are five 
solutions: {2,2,2,2,2}, {2,2,3,3}, {2,2,6}, {2,3,5} and {5,5}. So the output should be 5.
*/

/**  Recursive javascript program for coin change problem.
    
 Returns the count of ways we can
 sum arr[0...m-1] coins to get sum n
*/
function count(coins, len, amount) {
    //base case, if amount less than 0, there isn't solution in this case
    if(amount < 0) {
        return 0
    }

    //base case, one solution
    if(amount == 0) {
        return 1;
    }

    // base case, If there are no coins and amount is greater than 0, there isn't solution here
    if(len <= 0 && amount >= 1){
        return 0;
    }

    // count is sum of solutions (i)including coin[len-1] 
    // and (ii) excluding coin[len-1]
    return count(coins, len - 1, amount) + count(coins, len, amount - coins[len - 1]);
}

function coinChange(coins, amount) {
    return count(coins, coins.length, amount);
}

// Driver program to test above function
const coins = [1, 2, 3];
console.log("for [1, 2, 3] coins count of solutions to make 5 is:", coinChange(coins, 5));

/**
It should be noted that the above function computes the same subproblems again and again. 
See the following recursion tree for S = {1, 2, 3} and n = 5. 
The function C({1}, 3) is called two times. If we draw the complete tree, then we can see 
that there are many subproblems being called more than once.  
*/

var coinChange = function(coins, amount) {
    coins = coins.sort( (a,b) => (a - b));
   
    if (amount === 0) {
        return 0;
    }
    
    if(coins[0] > amount) {
        return -1;
    }
    
    if(coins[coins.length - 1 ] === amount) {
        return 1;
    }
        
    let reminder = amount;
    let coinCount = 0;
   

    for (let i = coins.length - 1; i >= 0; i--) {
        let curCount = parseInt(reminder / coins[i]);
        let curAmount = curCount * coins[i];
       
        if(curCount === 0) {
            continue;
        }
        reminder = reminder - curAmount;

        if(reminder == 0) {
            return coinCount + curCount;
        }

        if(reminder < 0) {
            reminder = reminder + curAmount;
            continue;
        }
        coinCount = coinCount + curCount;
       
    }
    if(reminder == 0) {
        return coinCount;
    }
    if(reminder > 0) {
        return -1;
    }
}


