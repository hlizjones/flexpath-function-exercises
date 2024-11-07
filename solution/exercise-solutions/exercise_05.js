function exercise_05() {
  /* 
   
    Exercise 5: Function Parameters, Including Default Values

    Problem:

    Write a function 'greet' that takes a name and an optional greeting message. 
    If no greeting is provided, it should default to 'Hello'. 
    The function should return a greeting message.
    
    Then, log the return of this function to the console
  
  */
  // CODE IN THE OPEN LINES BELOW

  function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
  }

  // Usage:
  console.log(greet("Alice")); // Outputs: Hello, Alice!
  console.log(greet("Bob", "Good morning")); // Outputs: Good morning, Bob!

  // CODE IN THE OPEN LINES ABOVE
  /*
    Answer Explanation:

    The greeting parameter has a default value of 'Hello'.
    Template literals are used to construct the message.
  */
}
