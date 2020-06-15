var minCostClimbingStairs = function (cost) {

  let dp = [cost[0], cost[1]];

  for (let i = 2, len = cost.length; i <= len; i++) {
    dp[i] = i === len ? Math.min(dp[i-1], dp[i-2]) : Math.min(dp[i-1], dp[i-2]) + cost[i];

  }
  return dp.pop();
};

// let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
let cost = [10, 15, 20]

console.log(minCostClimbingStairs(cost))