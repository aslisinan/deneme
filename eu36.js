function reverse(s){
    return s.split("").reverse().join("");
  }
  
  function isPalindromic(s) {
    return s === reverse(s)
  }                                 //36 Project Euler No
  
  var i = 1;
  var ret = 0;
  while(i < 1000000) {
    if (isPalindromic(i.toString())
        && isPalindromic(i.toString(2))) {
      ret += i
    }
    i++;
  }
  
  console.log(ret);