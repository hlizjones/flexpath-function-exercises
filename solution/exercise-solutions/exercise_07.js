function exercise_07() {
  /* 
   
    Exercise 7: How Function Scope Works and Variable Limitations

    Problem:

    Write a function 'incrementCounter' that declares a variable 'counter' 
    initialized to 0 inside it, increments 'counter' by 1, and logs it to the console. 
    
    Call incrementCounter twice. 
    
    What will be logged each time and why can't we access 
    counter outside the function? Provide your answer in a code comment below
    the function.
  
  */
  // CODE IN THE OPEN LINES BELOW

  function incrementCounter() {
    let counter = 0;
    counter += 1;
    console.log(counter);
  }

  incrementCounter(); // Outputs: 1
  incrementCounter(); // Outputs: 1

  console.log(counter); // ReferenceError: counter is not defined

  // CODE IN THE OPEN LINES ABOVE
  /*
    Answer Explanation:

    Each call to incrementCounter creates a new counter variable.
    'counter' is not accessible outside the function due to block scope.
  */
}
