function exercise_11() {
  /* 
   
Exercise 11: Replacing Traditional Loops with Functional Approaches

Problem:

Replace the following for loop with a functional approach using 
the reduce() method to calculate the sum of an array of numbers.
  */
  // REPLACE the code below
  const numbers = [1, 2, 3, 4, 5];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum); // Outputs: 15

  // solution
  const sum_with_reducer = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  console.log(sum_with_reducer); // Outputs: 15

  // REPLACE the code above
  /*

    Answer Explanation:

    `reduce` processes each element and accumulates the result.
    It provides a functional and concise way to compute sums.

  */
}
