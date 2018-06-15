function changePossibilities(total, coins, currentCoin){
    if (total == 0){ //base case, we reached one combination so return it
        return 1
    }

    if (total < 0){ //we overshot the total so it is not a combination 
        return 0
    }

    let combinations = 0 //initialize variable to hold number of combos

    for (let coin = currentCoin; coin < coins.length; coin++){
      //loop through coins array while keeping track of currentCoin to avoid duplicate combos
        combinations += changePossibilities(total - coins[coin], coins, coin) //recursively go through each coin and add the return (either 1 or 0) to combinations
    } 
    return combinations 
}

/* Test cases*/
console.log(changePossibilities(4, [1, 2, 3], 0))