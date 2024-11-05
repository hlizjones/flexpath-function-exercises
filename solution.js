import { fileURLToPath } from "url";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  // To run the code you write for each exercise, change the text below to match the name
  // of the exercise.
  // For Example:
  // If I want to run exercise_05 below, I would change the text from "exercise_01" to
  // "exercise_05", save this file, and then when I run this file with `node exercise.js`
  // the code for exercise_05 will run
  exercise_01();
}

export function exercise_01() {
  /* 
   
    Exercise 1
    
    // 1. Function Declaration: 
		
		Create a function named `greet` that logs "Hello, World!" to the console.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function greet() {
    console.log("Hello, World!");
  }
  greet();
  // Enter your code in the empty lines ABOVE
}

export function exercise_02() {
  /* 
   
    Exercise 2
    
    Function Expression: 
		
		Define a function named `add` that takes two numbers and returns their sum.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const add = function (a, b) {
    return a + b;
  };
  console.log(add(5, 3)); // 8
  // Enter your code in the empty lines ABOVE
}

export function exercise_03() {
  /* 
   
    Exercise 3
    
    Arrow Function: 
		
		Write an arrow function named `multiply` that takes two numbers and returns their product.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const multiply = (a, b) => a * b;
  console.log(multiply(4, 2)); // 8
  // Enter your code in the empty lines ABOVE
}

export function exercise_04() {
  /* 
   
    Exercise 4
    
    Function with Parameters: 
		
		Create a function named `subtract` that takes two parameters and returns the difference.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function subtract(a, b) {
    return a - b;
  }
  console.log(subtract(10, 5)); // 5
  // Enter your code in the empty lines ABOVE
}

export function exercise_05() {
  /* 
   
    Exercise 5
    
    Function with Return Value: 
		
		Write a function named `divide` that returns the division of two numbers.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function divide(a, b) {
    return a / b;
  }
  console.log(divide(20, 4)); // 5
  // Enter your code in the empty lines ABOVE
}

export function exercise_06() {
  /* 
   
    Exercise 6
    
    Default Parameters: 
		
		Create a function named `greetUser` with a default parameter value "Guest".
  
  */
  // CODE IN THE OPEN LINES BELOW
  function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  greetUser(); // Hello, Guest!
  greetUser("Alice"); // Hello, Alice!
  // Enter your code in the empty lines ABOVE
}

export function exercise_07() {
  /* 
   
    Exercise 7
    
    Scope: 
		
		Demonstrate function scope by declaring a variable inside a function and trying to access it outside.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function scopeTest() {
    let localVar = "I'm local";
    console.log(localVar); // Works
  }
  scopeTest();
  console.log(localVar); // Error: localVar is not defined
  // Enter your code in the empty lines ABOVE
}

export function exercise_08() {
  /* 
   
    Exercise 8
    
    Global vs Local Scope: Define a global and a local variable with the same name.

  
  */
  // CODE IN THE OPEN LINES BELOW
  let name = "Global Name";
  function showName() {
    let name = "Local Name";
    console.log(name); // Local Name
  }
  showName();
  console.log(name); // Global Name
  // Enter your code in the empty lines ABOVE
}

export function exercise_09() {
  /* 
   
    Exercise 9
    
    Recursion: 
		
		Write a recursive function named `countdown` that logs numbers from a given number down to 1.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function countdown(num) {
    if (num <= 0) return;
    console.log(num);
    countdown(num - 1);
  }
  countdown(5);
  // Enter your code in the empty lines ABOVE
}

export function exercise_10() {
  /* 
   
    Exercise 10
    
     Higher-Order Function: 
		 
		 Create a function named `operate` that takes two numbers and a function.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function operate(a, b, func) {
    return func(a, b);
  }
  const add = function (a, b) {
    return a + b;
  };
  console.log(operate(3, 4, add)); // 7
  // Enter your code in the empty lines ABOVE
}

export function exercise_11() {
  /* 
   
    Exercise 11
    
    Function Returning Function: 
		
		Write a function named `createMultiplier`.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function createMultiplier(multiplier) {
    return function (num) {
      return num * multiplier;
    };
  }
  const double = createMultiplier(2);
  console.log(double(5)); // 10
  // Enter your code in the empty lines ABOVE
}

export function exercise_12() {
  /* 
   
    Exercise 12
    
    Validator Function: 
		
		Create a function named `isValidString`.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function isValidString(str) {
    return typeof str === "string" && str.trim() !== "";
  }
  console.log(isValidString("Hello")); // true
  // Enter your code in the empty lines ABOVE
}

export function exercise_13() {
  /* 
   
    Exercise 13
    
    Boolean Transformer: 
		
		Write a function named `isTruthy`.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function isTruthy(input) {
    return Boolean(input);
  }
  console.log(isTruthy("Yes")); // true
  // Enter your code in the empty lines ABOVE
}

export function exercise_14() {
  /* 
   
    Exercise 14
    
    Array Iteration with forEach: 
		
		Use `forEach` to iterate over an array.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const arr = [1, 2, 3, 4, 5];
  arr.forEach((num) => console.log(num));
  // Enter your code in the empty lines ABOVE
}

export function exercise_15() {
  /* 
   
    Exercise 15
    
    Array Filtering: 
		
		Use `filter` to create a new array.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const filteredArr = arr.filter((num) => num > 2);
  console.log(filteredArr); // [3, 4, 5]
  // Enter your code in the empty lines ABOVE
}

export function exercise_16() {
  /* 
   
    Exercise 16
    
    Finding an Item: 
		
		Use `find` to locate a specific item in an array.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const people = [{ name: "John" }, { name: "Jane" }];
  const person = people.find((p) => p.name === "Jane");
  console.log(person); // { name: "Jane" }
  // Enter your code in the empty lines ABOVE
}

export function exercise_17() {
  /* 
   
    Exercise 17
    
    Using includes: 
		
		Copy the array from exercise_14 and paste it below
		Check if an array includes a specific value.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const arr = [1, 2, 3, 4, 5];
  console.log(arr.includes(3)); // true
  // Enter your code in the empty lines ABOVE
}

export function exercise_18() {
  /* 
   
    Exercise 18
    
    Switch Case in Function: 
		
		Write a function with a `switch` statement.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function getGreeting(hour) {
    switch (true) {
      case hour < 12:
        return "Good Morning";
      case hour < 18:
        return "Good Afternoon";
      default:
        return "Good Evening";
    }
  }
  console.log(getGreeting(15)); // Good Afternoon
  // Enter your code in the empty lines ABOVE
}

export function exercise_19() {
  /* 
   
    Exercise 19
    
    Nested Functions: 
		
		Create a function named `outerFunction`.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function outerFunction() {
    function innerFunction() {
      console.log("I'm the inner function");
    }
    innerFunction();
  }
  outerFunction();
  // Enter your code in the empty lines ABOVE
}

export function exercise_20() {
  /* 
   
    Exercise 20
    
    Anonymous Function: 
		
		Use an anonymous function in an example.
  
  */
  // CODE IN THE OPEN LINES BELOW
  setTimeout(function () {
    console.log("This is an anonymous function");
  }, 1000);
  // Enter your code in the empty lines ABOVE
}

export function exercise_21() {
  /* 
   
    Exercise 21
    
    Arrow Function and this: 
		
		Show how `this` behaves differently.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const obj = {
    name: "John",
    regularFunction: function () {
      console.log(this.name); // John
    },
    arrowFunction: () => {
      console.log(this.name); // undefined or global `this`
    },
  };
  obj.regularFunction();
  obj.arrowFunction();
  // Enter your code in the empty lines ABOVE
}

export function exercise_22() {
  /* 
   
    Exercise 22
    
    Function Composition: 
		
		Combine two functions.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const square = (x) => x * x;
  const doubleThenSquare = (x) => square(double(x));
  console.log(doubleThenSquare(3)); // 36
  // Enter your code in the empty lines ABOVE
}

export function exercise_23() {
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
  // Enter your code in the empty lines ABOVE
}

export function exercise_24() {
  /* 
   
    Exercise 24
    
    Immediate Function: 
		
		Use an IIFE.
  
  */
  // CODE IN THE OPEN LINES BELOW
  (function () {
    console.log("This is an IIFE");
  })();
  // Enter your code in the empty lines ABOVE
}

export function exercise_25() {
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
  // Enter your code in the empty lines ABOVE
}
