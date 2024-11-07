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

  showMessage();
  console.log(message);

  /*
	
			Write what you think will happen IN THIS COMMENT BLOCK.
			Then explain why the code behaved as it did.
	
		*/

  /*
	
			Answer Explanation:
	
			Inside showMessage, the local variable message shadows the global variable.
	
			Inside the function logs 'Local'.
			Outside the function, it logs the global message which is 'Global'.
	
		*/
}
