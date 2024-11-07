function exercise_16() {
  const person = {
    name: "John Doe",
    age: 30,
    occupation: "Engineer",
  };

  /* 
   
    Exercise 16: Using Object.entries to Iterate Over Object Properties
    Problem:

    Given the 'person' object above, use Object.entries and .forEach to iterate 
    over the object's properties and print each key and value.
  
  */
  // CODE IN THE OPEN LINES BELOW
  Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  // CODE IN THE OPEN LINES ABOVE

  /*
    Answer Explanation:

    Object.entries converts the object into an array of key-value pairs.
    Destructuring is used in the callback function for clarity.
  */
}
