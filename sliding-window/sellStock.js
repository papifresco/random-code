#!/usr/bin/env node
// You are given an array [prices] where prices[i] is the given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and
// choosing a different day in the future to sell stock.

// Return the maximum profit you can achieve from transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let profit = 0;
  let min = prices[0];
  let max = min;
  for (let i = 0; i <= prices.length; i++) {
    if (i != prices.length - 1 && prices[i] <= min) {
      min = prices[i];
      max = min;
    } else if (prices[i] > max) {
      max = prices[i];
    }
    profit = max - min > profit ? max - min : profit;
  }
  return profit;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
