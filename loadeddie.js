
var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var count = -1;

  return function() {
    count+= 1;
    return list[count];
  }
})();
// ^^ iife the two brackets beside each other, as above. means you're running the function, otherwise you're returning the function object (in this case
// list[count] which will just return "function", but not what's inside

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6


