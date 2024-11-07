function exercise_17() {
  /* 
   
    Exercise 17: Using Functions to Transform Data

    Problem:

    Write a function 'capitalizeStrings' that takes an array of strings and 
    returns a new array with each string in title case
    (first letter uppercase, rest lowercase).
      
  */
  // CODE IN THE OPEN LINES BELOW
  function capitalizeStrings(strings) {
    return strings.map(
      (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    );
  }

  // Usage:
  const lowerCaseStrings = ["apple", "banana", "cherry"];

  const capitalizedStrings = capitalizeStrings(lowerCaseStrings);

  console.log(capitalizedStrings);
  // Outputs: ['Apple', 'Banana', 'Cherry']
  // CODE IN THE OPEN LINES ABOVE

  /*
      Answer Explanation:

      'map' is used to create a new array with transformed elements.
      String methods charAt, toUpperCase, and toLowerCase are used 
      for capitalization.
  */
}
