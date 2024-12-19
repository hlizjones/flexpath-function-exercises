import { fileURLToPath } from "url";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  /*

    To run the code you write for each exercise, change the `exercise_01()` 
    code below to match the EXACT name
    of the exercise, as it is written in the line `function exercise_xx`.
    
     For Example:

     If I want to run exercise_05 below, 
     I would change the code below from "exercise_01()" to
     "exercise_05()", save this file. 
		 
		 Then, when I run this file by running `node exercise.js`
     in the VS Code terminal while inside this folder, your code 
     for exercise_05 will run.

  */

  // Modify the line of code BELOW to run a different exercise
  exercise_19();
  // Modify the line of code ABOVE to run a different exercise
}

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

  function calculateArea (radius) {
    let area = Math.PI * Math.pow(radius, 2);
    return area;
  }

  console.log(calculateArea(2));

  

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_02() {
  /* 
   
    Exercise 2: Function Expressions and Their Uses

    Problem:

    Convert the calculateArea function from Exercise 1 into 
    a function expression and assign it to a variable called calculateArea.

    Run it and log the output
  
  */
  // CODE IN THE OPEN LINES BELOW

  let calculateArea = function (radius) {
    return Math.PI * Math.pow(radius, 2);
  }

  console.log(calculateArea(2));

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_03() {
  /* 
    
    Exercise 3: Arrow Functions and How They Differ from Traditional Functions

    Problem:
    
    Rewrite the calculateArea function as an arrow function.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let calculateArea = (radius) => Math.PI * Math.pow(radius, 2);

  console.log(calculateArea(2));

  // CODE IN THE OPEN LINES ABOVE
}

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
    if (email.split("@").length > 2 || !email.includes("@") || !(email.lastIndexOf(".")>email.indexOf("@"))) {
      return false;
    } else {
      return true;
    }
  } 

  console.log(isValidEmail("hliz.jones@gmail.com"));

  // CODE IN THE OPEN LINES ABOVE
}

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

  function greet (name, message = "Hello") {
    return message + " " + name;
  }

  console.log(greet("Hannah", "Howdy"));
  console.log(greet("Hannah"));


  // CODE IN THE OPEN LINES ABOVE
}

function exercise_06() {
  /* 
   
   Exercise 6: Understanding Local and Global Scope

    Problem:

    Consider the following code. What will be logged to the console and why?

    Write what you think in a code comment. Then run the code.
  
  */
  let message = "Global";

  function showMessage() {
    let message = "Local";
    console.log(message);
  }

  showMessage(); //Local
  console.log(message); //Global

  /*

    Write what you think will happen IN THIS COMMENT BLOCK.
    Then explain why the code behaved as it did.

  */
}

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

  function incrementCounter () {
    let counter = 0;
    counter++;
    console.log(counter);
  }

  incrementCounter();
  console.log(`---------`);
  incrementCounter();
  
 /*We cannot acces counter outside the function because it is confined 
 to the scope of the function. The variable counter only exists within 
 the {} after incrementCounter ().*/


  // CODE IN THE OPEN LINES ABOVE
}

function exercise_08() {
  /* 
   
    Exercise 8: Functions That Return Other Functions

    Problem:

    Write a function 'makeMultiplier' that takes a 'multiplier' number
    and returns a new function that takes a number and 
    returns that number multiplied by 'multiplier'.

  */
  // CODE IN THE OPEN LINES BELOW

  function makeMultiplier (multiplier) {
    return function (num) {
      return num * multiplier
    }
  }

  console.log(makeMultiplier(2)(4));
  console.log(makeMultiplier(3)(3));

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_09() {
  /* 
   
    Exercise 9: Concepts and Use Cases for Recursive Functions

    Problem:

    Write a recursive function 'factorial' that takes a 
    non-negative integer 'n' and returns its factorial.

    If 'n' is a negative number, log "Bad number input" to the console, and 
    `return` from the function. 
    This will prevent an infinite loop from occuring.

    In the future, we can use error handling techniques to handle these use cases
    in a cleaner manner.

    Info on what a factorial is: https://www.cuemath.com/numbers/factorial/

  */
  // CODE IN THE OPEN LINES BELOW

  // My first attempt

  function factorial (n) {
    if (n < 0) {
      console.log("Bad number input");
      return;
    } let result = n
    for (let i = 1; i<n; i++) {
      result = result*(n-i)
    }
    return result;
  }

  console.log(factorial(4));

  // My second attempt after looking at the solution and realizing my first attempt is not recursive

  function factorial1 (n) {
    if (n < 0) {
      console.log("Bad number input");
      return;
    } if (n === 0)
      return 1;
      return n * factorial1(n-1);
    }
  
  console.log(factorial1(5));

  // Write a recursive function that prints a countdown from a given number to 1. When the number is 1, it should print "Liftoff!"

  function countdown (n) {
    if (n === 0)
      return console.log("Liftoff");
    countdown(n - 1);
    return console.log(n);
  }

  countdown(10);

// Write a recursive function that spells my name.

function spellName (name, n) {
  if (n === name.length)
    return console.log(name);
    console.log (name[n]);
    return spellName(name, n+1);
}
spellName ("Hannah", 0);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_10() {
  const fruits = ["apple", "banana", "cherry"];
  /* 
   
   Exercise 10: Using forEach to Iterate Over Arrays
    Problem:

    Given the array `fruits` defined above, use forEach to 
    print each fruit to the console.
  
  */
  // CODE IN THE OPEN LINES BELOW

  fruits.forEach (e => {
    console.log(e)
  });

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_11() {
  /* 
   
    Exercise 11: Replacing Traditional Loops with Functional Approaches

    Problem:

    Replace the following for loop with a functional approach using 
    the reduce() method to calculate the sum of an array of numbers.
  */
  // REPLACE the code below

  const numbers = [1, 2, 3, 4, 5];

  let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  console.log(sum);

  // REPLACE the code above
}

function exercise_12() {
  const numbers = [10, 15, 20, 25, 30];
  /* 
   
    Exercise 12: Filtering Arrays with `filter`
    Problem:

    Given the array of numbers above, use the filter() method to 
    create a new array containing only the even numbers.

    Log this new array to the console
  
  */
  // CODE IN THE OPEN LINES BELOW

  let newArr = numbers.filter(e => {
    if (e % 2 === 0) {
      return e;
    }
  });

  console.log(newArr);

  // CODE IN THE OPEN LINES ABOVE
}

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

  /* Modifying an object passed to a functions affects the orignal object
  because objects are passed by reference. This means that the object is 
  referencing where it is stored in memory. Primitive values, on the other
  hand, are passed by value. So when a primitive value is passed to a function,
 a copy is made. This ensures the original primitive value remains the same. */

 // Code illustrating passed by reference.

 let obj1 = {name: "Hannah", age: 26};
 let obj2 = obj1;

function changeAge (obj) {
  ++obj.age;
}

changeAge(obj2);

console.log(`Object 2:`, obj2);
console.log(`Object 1:`, obj1);

// Code illustrating passed by value

function capitalizeStrings (str) {
  return str.toUpperCase();
}

let nam1 = "Hannah"
capitalizeStrings(nam1)

let nam2 = capitalizeStrings(nam1);

console.log(`Original Name: ${nam1}`);
console.log(`New Name Created: ${nam2}`);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_14() {
  /* 
   
    Exercise 14: Reference Types and How They Are Passed Around

    Problem:

    Write code to demonstrate that objects are passed by reference by creating 
    a function that adds a new property to an object passed as an argument.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let book = {name: "Throne of Glass", author: "SJM", yearPublished: 2012 }

  function addProperty (obj, property, value) {
   return obj[property] = value;
  }

  addProperty(book, "rating", 5);
  console.log(book);

  // CODE IN THE OPEN LINES ABOVE
}

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

  let name = "Bob"
  let user = users.find(e => {
     if (e.name === name) { 
      return e;
  } 
})

console.log(user)

console.log(`-----------------`);

let nameValue = "Bob"
let userFound = users.find(e => e.name === nameValue);
if (userFound) {
  console.log(userFound);
} else {
  console.log(`No results`);
}

console.log(`-----------------`);

function findUser (name, arr, property) {
  let user = arr.find(e => e[property] === name);
if (user) {
  console.log(user);
  return user;
} else {
  console.log(`No results`);
  return null;
}
}

findUser("Bob", users, "name");

  // CODE IN THE OPEN LINES ABOVE
}

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

  Object.entries(person).forEach(e => {
    console.log(e[0],":", e[1]);
  });



  // CODE IN THE OPEN LINES ABOVE
}

function exercise_17() {
  /* 
   
    Exercise 17: Using Functions to Transform Data

    Problem:

    Write a function 'capitalizeStrings' that takes an array of strings and 
    returns a new array with each string in title case
    (first letter uppercase, rest lowercase).
      
  */
  // CODE IN THE OPEN LINES BELOW

  // First attempt
function capitalizeStrings (arr) {
  let newArray = [];
for (let i = 0; i < arr.length; i++) {
 newArray.push(arr[i] = (arr[i]).replace(((arr[i])[0]), ((arr[i])[0].toUpperCase())));
}
return newArray;
}

let names = ["hannah", "holly", "shane", "sheila"];

console.log(capitalizeStrings(names));

// With map() method

function capitalization (arr) {
  return arr.map(function (name) {
    return name.replace(name[0], name[0].toUpperCase());
  });
}

console.log(capitalization(names));

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_18() {
  /* 
   
    Exercise 18: Using Default Parameters

    Problem:

    Write a function 'power' that calculates the power of a number. 

    The function should take two parameters: base and exponent, 
    with exponent defaulting to 2 if not provided.

    You can use Math.pow in your function to find the power of a number:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
  
  */
  // CODE IN THE OPEN LINES BELOW

  function power (base, exponent = 2) {
    return Math.pow(base, exponent);
  }

  console.log(power(2,2));
  console.log(power(2));

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_19() {
  /* 
   
    Exercise 19
    
    Immediate Function: 

    Write an IIFE(Immediately Invoked Function Expression) that 
    that logs information to the console. 
		
    Here's a page with more details on IIFEs:
		https://developer.mozilla.org/en-US/docs/Glossary/IIFE
  
  */
  // CODE IN THE OPEN LINES BELOW

  (function () {
console.log("My name is Hannah.")
 })();

  // CODE IN THE OPEN LINES ABOVE
}
