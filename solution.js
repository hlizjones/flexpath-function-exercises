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
  exercise_08();
  // Modify the line of code ABOVE to run a different exercise
}

export function exercise_01() {
  /* 
   
    Exercise 1: Function Declarations and Naming Conventions

    Write a function declaration named calculateArea that takes the radius of a 
    circle as a parameter and returns the area of the circle. 

    The formula for the area of a circle: PI * radius * radius
    
    Use proper naming conventions for functions in JavaScript.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function calculateArea(radius) {
    return Math.PI * radius * radius;
  }

  // Usage:
  console.log(calculateArea(5)); // Outputs: 78.53981633974483

  /*

    Explanation:

    The function calculateArea is declared using the function keyword.
    It follows camelCase naming convention.
    It calculates the area using the formula πr².

  */
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_02() {
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

  // Usage:
  console.log(calculateArea(10)); // Outputs: 314.1592653589793

  /*  

    Explanation:

    The function is assigned to a constant variable calculateArea.
    Function expressions can be used to 
    assign functions to variables or pass them as arguments.

  */
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_03() {
  /* 
    
    Exercise 3: Arrow Functions and How They Differ from Traditional Functions
    
    Problem:

    Rewrite the calculateArea function as an arrow function.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const calculateAreaArrow = (radius) => {
    return Math.PI * radius * radius;
  };

  // Simplified version:
  const calculateAreaSimplerArrow = (radius) => Math.PI * radius * radius;

  // Usage:
  console.log(calculateAreaArrow(5)); // Outputs: 78.53981633974483

  /*

  Explanation:

    Arrow functions provide a concise syntax.
    Parentheses can be omitted for single parameters.
    The return statement can be omitted for single-expression functions.

  */
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_04() {
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

  /*
Explanation:

    The function checks for the presence of @ and . in appropriate positions.
    It ensures basic email structure without using complex regex.
  */
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_05() {
  /* 
   
   Exercise 5: Function Parameters, Including Default Values

    Problem:

    Write a function greet that takes a name and an optional greeting message. 
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

  /*
Explanation:

The greeting parameter has a default value of 'Hello'.
Template literals are used to construct the message.
  */
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_06() {
  /* 
   
   Exercise 6: Understanding Local and Global Scope

    Problem:

    Consider the following code. What will be logged to the console and why?
  
  */
  // CODE IN THE OPEN LINES BELOW
  let message = "Global";

  function showMessage() {
    let message = "Local";
    console.log(message);
  }

  showMessage();
  console.log(message);

  /*
    Local
    Global

  */

  /*
    Explanation:

    Inside showMessage, the local variable message shadows the global variable.
    console.log(message); 
    inside the function logs 'Local'.
    Outside the function, it logs the global message which is 'Global'.
  */
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_07() {
  /* 
   
    Exercise 7: How Function Scope Works and Variable Limitations
    Problem:

    Write a function incrementCounter that declares a variable counter 
    initialized to 0 inside it, increments counter by 1, and logs it to the console. 
    Call incrementCounter twice. 
    What will be logged each time and why can't we access 
    counter outside the function?
  
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

  /*
    Explanation:

    Each call to incrementCounter creates a new counter variable.
    counter is not accessible outside the function due to block scope.
  */
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_08() {
  /* 
   
   Exercise 8: Functions That Return Other Functions

    Problem:

    Write a function makeMultiplier that takes a 'multiplier' number
    and returns a new function that takes a number and 
    returns it multiplied by multiplier.

  
  */
  // CODE IN THE OPEN LINES BELOW
  function makeMultiplier(multiplier) {
    return function (number) {
      return number * multiplier;
    };
  }

  // Usage:
  const double = makeMultiplier(2);
  console.log(double(5)); // Outputs: 10

  const costOfLivingAdjustment = makeMultiplier(1.03);
  console.log(costOfLivingAdjustment(50000));

  /*
    Explanation:

    makeMultiplier is a higher-order function.
    It returns a closure that remembers the 'multiplier' value.
  */
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_09() {
  /* 
   
Exercise 9: Using Higher-Order Functions to Create Dynamic Validation Functions
Problem:

Write a function createValidator that takes a regular expression regex and returns a function that validates a given string against regex. Use this to create a validator for email addresses.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function createValidator(regex) {
    return function (value) {
      return regex.test(value);
    };
  }

  const emailValidator = createValidator(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  // Usage:
  console.log(emailValidator("test@example.com")); // Outputs: true
  console.log(emailValidator("invalid-email")); // Outputs: false

  /*

Explanation:

createValidator returns a function tailored to the provided regex.
The returned function can be reused for multiple validations.
  */
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_10() {
  /* 
   
Exercise 10: Concepts and Use Cases for Recursive Functions
Problem:

Write a recursive function factorial that takes a non-negative integer n and returns its factorial.

Solution:
  
  */
  // CODE IN THE OPEN LINES BELOW
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }

  // Usage:
  console.log(factorial(5)); // Outputs: 120
  /*
Explanation:

The base case handles n equal to 0 or 1.
The recursive case multiplies n by factorial(n - 1).

  */
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_11() {
  /* 
   
   Exercise 11: Avoiding Infinite Loops with Proper Base Cases
Problem:

Modify the factorial function from Exercise 10 to include error handling for negative inputs by throwing an error.


  
  */
  // CODE IN THE OPEN LINES BELOW
  function factorial(n) {
    if (n < 0) throw new Error("Negative numbers are not allowed.");
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }

  // Usage:
  try {
    console.log(factorial(-1)); // Throws error
  } catch (e) {
    console.error(e.message); // Outputs: Negative numbers are not allowed.
  }
  /*

Explanation:

The function now checks for negative inputs and throws an error.
This prevents infinite recursion and ensures correct usage.
  */
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_12() {
  /* 
   
   Exercise 12: Using forEach to Iterate Over Arrays
Problem:

Given an array of fruits ['apple', 'banana', 'cherry'], use forEach to print each fruit to the console.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const fruits = ["apple", "banana", "cherry"];

  fruits.forEach(function (fruit) {
    console.log(fruit);
  });

  // Using arrow function:
  fruits.forEach((fruit) => console.log(fruit));

  /*
Explanation:

forEach executes the provided function once for each array element.
It's a cleaner alternative to traditional loops for iteration.
  */

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_13() {
  /* 
   
Exercise 13: Replacing Traditional Loops with Functional Approaches
Problem:

Replace the following for loop with a functional approach using reduce to calculate the sum of an array of numbers.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const numbers = [1, 2, 3, 4, 5];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum); // Outputs: 15

  // solution
  const sum_with_reducer = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  console.log(sum); // Outputs: 15

  /*
Explanation:

reduce processes each element and accumulates the result.
It provides a functional and concise way to compute sums.
*/

  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_14() {
  /* 
   
Exercise 14: Filtering Arrays with filter and Finding Elements with find
Problem:

Given an array of numbers [10, 15, 20, 25, 30], use filter to create a new array containing only the even numbers.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const numbers = [10, 15, 20, 25, 30];

  const evenNumbers = numbers.filter((number) => number % 2 === 0);

  console.log(evenNumbers); // Outputs: [10, 20, 30]

  /*
Explanation:

filter creates a new array with elements that pass the test.
The test checks if a number is divisible by 2.
*/
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_15() {
  /* 
   
Exercise 15: How JavaScript Handles Primitives and Objects Differently in Memory
Problem:

Explain why modifying an object passed to a function affects the original object, but modifying a primitive value does not. Provide code examples to illustrate this behavior.
  
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
  /*
Explanation:

Primitives are passed by value; a copy is made.
Objects are passed by reference; changes affect the original object.
  */
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_16() {
  /* 
   
Exercise 16: Reference Types and How They Are Passed Around
Problem:

Write code to demonstrate that objects are passed by reference by creating a function that adds a new property to an object passed as an argument.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function addProperty(obj) {
    obj.newProperty = "I am new!";
  }

  const myObj = { existingProperty: "I exist" };

  addProperty(myObj);

  console.log(myObj);
  // Outputs: { existingProperty: 'I exist', newProperty: 'I am new!' }
  /*
Explanation:

The function addProperty modifies the original object.
This demonstrates that objects are mutable and passed by reference.
  */
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_17() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  /* 
   
    Exercise 17: Working with Arrays Using forEach, filter, and find
Problem:

Given an array of user objects:

Use find to locate the user with the name 'Bob'.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const user = users.find((user) => user.name === "Bob");

  console.log(user);
  // Outputs: { id: 2, name: 'Bob' }

  /*

Explanation:

find returns the first element that satisfies the condition.
It stops iterating once the element is found.
*/
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_18() {
  const person = {
    name: "John Doe",
    age: 30,
    occupation: "Engineer",
  };

  /* 
   
Exercise 18: Using Object.entries to Iterate Over Object Properties
Problem:

Given the following object:

Use Object.entries to iterate over the object's properties and print each key and value.
  
  */
  // CODE IN THE OPEN LINES BELOW
  Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  // Outputs:
  // name: John Doe
  // age: 30
  // occupation: Engineer
  /*
Explanation:

Object.entries converts the object into an array of key-value pairs.
Destructuring is used in the callback function for clarity.
  */
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_19() {
  /* 
   
    Exercise 19: Using Functions to Transform Data
Problem:

Write a function capitalizeStrings that takes an array of strings and returns a new array with each string capitalized (first letter uppercase, rest lowercase).
  
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
  /*
  Explanation:

map is used to create a new array with transformed elements.
String methods charAt, toUpperCase, and toLowerCase are used for capitalization.
  */
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_20() {
  /* 
   
    Exercise 20: Using Default Parameters
Problem:

Write a function power that calculates the power of a number. The function should take two parameters: base and exponent, with exponent defaulting to 2 if not provided.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function power(base, exponent = 2) {
    return Math.pow(base, exponent);
  }

  // Usage:
  console.log(power(5)); // Outputs: 25 (5 squared)
  console.log(power(2, 3)); // Outputs: 8  (2 cubed)
  /*
Explanation:

The exponent parameter defaults to 2.
Math.pow is used to calculate the power.
  */
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_21() {
  /* 
   
    Exercise 23
    
		Callback Function: 
		
		Write a function that takes a callback.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  function executeCallback(callback) {
    console.log("Before callback");
    callback();
    console.log("After callback");
  }
  executeCallback(() => console.log("This is the callback"));
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_22() {
  /* 
   
    Exercise 24
    
    Immediate Function: 
		
		Use an IIFE.
  
  */
  // CODE IN THE OPEN LINES BELOW
  (function () {
    console.log("This is an IIFE");
  })();
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_23() {
  /* 
   
    Exercise 25
    
    Memoization: 
		
		Create a simple memoization function.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function memoize(fn) {
    const cache = {};
    return function (arg) {
      if (cache[arg]) {
        return cache[arg];
      } else {
        const result = fn(arg);
        cache[arg] = result;
        return result;
      }
    };
  }
  const squareMemo = memoize((x) => x * x);
  console.log(squareMemo(4)); // 16
  console.log(squareMemo(4)); // Cached 16
  // CODE IN THE OPEN LINES ABOVE
}
