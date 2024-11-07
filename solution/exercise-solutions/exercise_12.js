function exercise_12() {
  const numbers = [10, 15, 20, 25, 30];
  /* 
   
    Exercise 12: Filtering Arrays with `filter`
    Problem:

    Given the array of numbers above, use the filter() method to 
    create a new array containing only the even numbers.

    Log this new array to the console
  
  */
  // CODE IN THE OPEN LINES BELOW

  const evenNumbers = numbers.filter((number) => number % 2 === 0);

  console.log(evenNumbers); // Outputs: [10, 20, 30]
  // CODE IN THE OPEN LINES ABOVE

  /*

      Answer Explanation:

      'filter' creates a new array with elements that evaluate to 'true' when 
      passed through the provided condition (number % 2 === 0).
      The test checks if a number is divisible by 2.

  */
}
