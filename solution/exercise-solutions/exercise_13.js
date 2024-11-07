function exercise_13() {
  /* 
   
    Exercise 13: How JavaScript Handles Primitives and 
                 Objects Differently in Memory


    Problem:

    Explain why modifying an object passed to a function affects 
    the original object, but modifying a primitive value does not. 

    Provide code examples to illustrate this behavior.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function modifyPrimitive(primitive) {
    primitive += 1;
    console.log("Inside function:", primitive);
  }

  function modifyObject(obj) {
    obj.value += 1;
    console.log("Inside function:", obj.value);
  }

  let num = 5;
  modifyPrimitive(num);
  console.log("Outside function:", num); // Outputs: 5

  let obj = { value: 5 };
  modifyObject(obj);
  console.log("Outside function:", obj.value); // Outputs: 6
  // CODE IN THE OPEN LINES ABOVE

  /*
    Answer Explanation:

    Primitives are passed by value; 
      A copy of the value is made when it is passed to the function.
    Objects are passed by reference; A copy is NOT made when passed. 
      Instead a reference to that object's place in memory is made.
      Therefore, any changes made to the passed object in the function 
      affect the original object.
  */
}
