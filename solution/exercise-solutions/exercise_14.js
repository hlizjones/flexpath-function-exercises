function exercise_14() {
  /* 
   
    Exercise 14: Reference Types and How They Are Passed Around

    Problem:

    Write code to demonstrate that objects are passed by reference by creating 
    a function that adds a new property to an object passed as an argument.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function addProperty(obj) {
    obj.newProperty = "I am new!";
  }

  const myObj = { existingProperty: "I exist" };

  console.log(myObj);

  addProperty(myObj);

  console.log(myObj);

  // Real world example

  function flagRentAsLate(obj) {
    obj["late"] = true;
  }

  const rentObj = {
    monthlyPayment: 1200,
    monthDue: "November",
    dayDue: 1,
    paid: false,
  };
  flagRentAsLate(rentObj);

  console.log(rentObj);

  // CODE IN THE OPEN LINES ABOVE

  /*
  
    Answer Explanation:

    The function addProperty modifies the original object.
    This demonstrates that objects are mutable and passed by reference.

  */
}
