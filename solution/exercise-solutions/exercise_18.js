function exercise_18() {
  /* 
   
    Exercise 18: Using Default Parameters

    Problem:

    Write a function 'power' that calculates the power of a number. 

    The function should take two parameters: base and exponent, 
    with exponent defaulting to 2 if not provided.

    You can use Math.pow in your function to find the power of a number:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
  
  */
  // CODE IN THE OPEN LINES BELOW
  function power(base, exponent = 2) {
    return Math.pow(base, exponent);
  }

  // Usage:
  console.log(power(5)); // Outputs: 25 (5 squared)
  console.log(power(2, 3)); // Outputs: 8  (2 cubed)
  // CODE IN THE OPEN LINES ABOVE

  /*
    Answer Explanation:

    The exponent parameter defaults to 2.
    Math.pow is used to calculate the power.
  */
}
