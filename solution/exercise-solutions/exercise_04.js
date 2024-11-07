function exercise_04() {
  /* 
   
    Exercise 4: Using Functions to Validate and Transform Data

    Problem:

    Write a function isValidEmail that takes a string and returns true 
    if it is a valid email address, and false otherwise. 

    For simplicity, consider an email valid if it contains 
    exactly one @ symbol and at least one . after the @.
  
  */
  // CODE IN THE OPEN LINES BELOW

  function isValidEmail(email) {
    const atSymbolIndex = email.indexOf("@");
    if (atSymbolIndex === -1) return false;

    const dotIndex = email.indexOf(".", atSymbolIndex);
    if (dotIndex === -1) return false;

    return true;
  }

  // Usage:
  console.log(isValidEmail("test@example.com")); // Outputs: true
  console.log(isValidEmail(".invalid-@email")); // Outputs: false

  // CODE IN THE OPEN LINES ABOVE

  /*

    Answer Explanation:

    The function checks for the presence of @ and . in appropriate positions.
    It ensures basic email structure without using complex regex.

  */
}
