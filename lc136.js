var singleNumber = function(nums) {
    return nums.reduce(function(pre, cur) {
        return pre ^ cur;
    });

};

var testCase = [1, 1, 4, 5, 6, 4, 5, 3, 2, 2, 3];

console.log(singleNumber(testCase) === 6);                                              // singlenumber136