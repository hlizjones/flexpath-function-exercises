function exercise_10() {
  const fruits = ["apple", "banana", "cherry"];
  /* 
   
   Exercise 10: Using forEach to Iterate Over Arrays
    Problem:

    Given the array `fruits` defined above, use forEach to 
    print each fruit to the console.
  
  */
  // CODE IN THE OPEN LINES BELOW

  fruits.forEach(function (fruit) {
    console.log(fruit);
  });

  // Using arrow function:
  fruits.forEach((fruit) => console.log(fruit));

  // CODE IN THE OPEN LINES ABOVE

  /*

    Answer Explanation:

    forEach executes the provided function once for each array element.
    It's a cleaner alternative to traditional loops for iteration.

  */
}
