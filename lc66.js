var plusOne = function(digits) {
    var i = digits.length - 1;
    while (i >= 0) {
        if (++digits[i] < 10) {
            return digits;
        }
        digits[i--] = 0;
    }
    digits.unshift(1);
    return digits;                                                                       //66 Plus One
};

// Test cases
console.log(plusOne([8]).toString() === '9'); // true
console.log(plusOne([1, 0]).toString() === '1,1'); // true
console.log(plusOne([1, 2, 3]).toString() === '1,2,4'); // true