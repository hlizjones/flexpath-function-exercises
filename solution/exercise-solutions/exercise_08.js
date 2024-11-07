function exercise_08() {
  /* 
   
    Exercise 8: Functions That Return Other Functions

    Problem:

    Write a function 'makeMultiplier' that takes a 'multiplier' number
    and returns a new function that takes a number and 
    returns that number multiplied by 'multiplier'.

  
  */
  // CODE IN THE OPEN LINES BELOW

  function makeMultiplier(multiplier) {
    return function (number) {
      return number * multiplier;
    };
  }

  // Usage:
  const double = makeMultiplier(2);
  console.log(double(5)); // Outputs: 10

  // Real world example
  const costOfLivingAdjustment = makeMultiplier(1.03);
  console.log(costOfLivingAdjustment(50000));

  // CODE IN THE OPEN LINES ABOVE

  /*
  
    Answer Explanation:

    makeMultiplier is a higher-order function.
    It returns a closure that remembers the 'multiplier' value.

  */
}
