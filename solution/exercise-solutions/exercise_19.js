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
  (() => {
    process.env.DB_PASSWORD = 12345;
    process.env.APP_LANGUAGE = "en-US";
    process.env.APP_VERSION = "DEVELOPMENT";

    console.log("env vars inside the IIFE");
    console.log("DB Password:", process.env.DB_PASSWORD);
    console.log("App Language:", process.env.APP_LANGUAGE);
    console.log(
      "Version of app build currently running:",
      process.env.APP_VERSION
    );
    console.log("--------------");
  })();

  console.log(
    "But LOOK! I can access these env vars outside the IIFE now that they're set up"
  );
  console.log("DB Password:", process.env.DB_PASSWORD);
  console.log("App Language:", process.env.APP_LANGUAGE);
  console.log(
    "Version of app build currently running:",
    process.env.APP_VERSION
  );
  console.log("--------");
  // CODE IN THE OPEN LINES ABOVE

  /*

    Answer Explanation

    The above example uses an IIFE to set a bunch of environment variables
    for an application. We can then access environment variables in Node.js
    by using process.env.VARIABLE_NAME. 

    Environment variables are a great way to keep track of sensitive shared values
    in an app (like Database passwords) that change depending on what version
    of the app you are running.

    Right now our lessons are focused on the frontend, so we won't see them much.
    
    But, you'll gain a lot more experience with environment variables when you 
    start the Java and SQL lesson modules later in this course.

  */
}
