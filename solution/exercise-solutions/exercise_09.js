function exercise_09() {
  /* 
   
    Exercise 9: Concepts and Use Cases for Recursive Functions

    Problem:

    Write a recursive function 'factorial' that takes a 
    non-negative integer 'n' and returns its factorial.

    If 'n' is a negative number, log "Bad number input" to the console, and 
    `return` from the function. 
    This will prevent an infinite loop from occuring.

    In the future, we can use error handling techniques to handle these use cases
    in a cleaner manner.

    Info on what a factorial is: https://www.cuemath.com/numbers/factorial/

  */
  // CODE IN THE OPEN LINES BELOW
  function factorial(n) {
    if (n < 0) {
      console.log("Bad number input");
      return;
    }
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }

  // Usage:
  console.log(factorial(5)); // Outputs: 120

  console.log(factorial(-12));
  // CODE IN THE OPEN LINES ABOVE

  /*

    Answer Explanation:

    The base case handles n equal to 0 or 1.
    The recursive case multiplies n by factorial(n - 1).

  */
}
