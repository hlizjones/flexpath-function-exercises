function exercise_01() {
  /* 
   
    Exercise 1: Function Declarations and Naming Conventions

    Problem:

    Write a function declaration named calculateArea that takes the radius of a 
    circle as a parameter and returns the area of the circle. 

    The formula for the area of a circle: PI * radius * radius
    
    Use proper naming conventions for functions in JavaScript.
  
  */
  // CODE IN THE OPEN LINES BELOW

  function calculateArea(radius) {
    return Math.PI * radius * radius;
  }

  console.log(calculateArea(5)); // Outputs: 78.53981633974483

  // CODE IN THE OPEN LINES ABOVE
  /*

    Answer Explanation:

    The function calculateArea is declared using the function keyword.
    It follows camelCase naming convention.
    It calculates the area using the formula πr².

  */
}
