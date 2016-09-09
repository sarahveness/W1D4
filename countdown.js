var countdownGenerator = function (x) {
  var count = x;

  return function() {
    if (count > 0) {
      console.log("T-minus " + count + "...")
    } else if (count === 0) {
      console.log("Blast Off!");
    } else {
      console.log("Rockets already gone, bub!");
    }
    count-= 1;
  };
};

var countdown = countdownGenerator(5);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
