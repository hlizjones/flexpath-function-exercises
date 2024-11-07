function exercise_15() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  /* 
   
    Exercise 15: Working with Arrays using 'find'

    Problem:

    Given the array of user objects above, use the find() method to 
    locate the user with the name 'Bob'.

    Print this user object to the console
  
  */
  // CODE IN THE OPEN LINES BELOW
  const user = users.find((user) => user.name === "Bob");

  console.log(user);
  // Outputs: { id: 2, name: 'Bob' }

  // CODE IN THE OPEN LINES ABOVE
  /*

    Answer Explanation:

    'find' returns the first element that satisfies the condition.
    It stops iterating once the element is found.

  */
}
