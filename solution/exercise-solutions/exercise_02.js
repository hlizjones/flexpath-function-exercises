function exercise_02() {
  /* 
   
    Exercise 2: Function Expressions and Their Uses

    Problem:

    Convert the calculateArea function from Exercise 1 into 
    a function expression and assign it to a variable called calculateArea.

    Run it and log the output
  
  */
  // CODE IN THE OPEN LINES BELOW

  const calculateArea = function (radius) {
    return Math.PI * radius * radius;
  };

  console.log(calculateArea(10)); // Outputs: 314.1592653589793

  // CODE IN THE OPEN LINES ABOVE
  /*  

    Answer Explanation:

    The function is assigned to a constant variable calculateArea.
    Function expressions can be used to 
    assign functions to variables or pass them as arguments.

  */
}
