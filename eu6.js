(function sumsquaredifference006() {
  var max = 100; var x = 0; var y = 0;
  var i = 0; var j = 0;

  (function sumOfSquares() {
    while (i <= max) {
      x += Math.pow(i, 2);
      i++;                      //06 Project Euler No
    }
    return x;
  }());

  (function squareOfSums() {
    while (j <= max) {
      y += j;
      j++;
    }
    y = Math.pow(y, 2);
    return y;
  }());

  console.log(y - x);
  return y - x;
}());