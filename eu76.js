var findSums = function(num) {
    var numWays = 0;
    
    var recurse = function(currTotal, start) {
    for (var i = start; i>0; i--) {
        currTotal = currTotal + i;
        if (currTotal === num) {
            numWays++;
            currTotal = currTotal - i;
        } else if (currTotal < num) {
            recurse(currTotal, i); 
            currTotal = currTotal - i;
        } else {
            currTotal = currTotal - i;
        }
    } 
    }
    
    recurse(0, num-1);
    return numWays;
}

console.log(findSums(100));