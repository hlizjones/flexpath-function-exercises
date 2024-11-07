function exercise_03() {
  /* 
    
    Exercise 3: Arrow Functions and How They Differ from Traditional Functions

    Problem:
    
    Rewrite the calculateArea function as an arrow function.
  
  */
  // CODE IN THE OPEN LINES BELOW

  const calculateAreaArrow = (radius) => {
    return Math.PI * radius * radius;
  };

  // Simpler version since it a single-expression function:
  const calculateAreaSimplerArrow = (radius) => Math.PI * radius * radius;

  console.log(calculateAreaArrow(5)); // Outputs: 78.53981633974483

  // CODE IN THE OPEN LINES ABOVE
  /*

  Answer Explanation:

    Arrow functions provide a concise syntax.
    Parentheses can be omitted for single parameters.
    The return statement can be omitted for single-expression functions.

  */
}
