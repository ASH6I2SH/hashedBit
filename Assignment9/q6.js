// Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.


// Creating the object
const person = {
    name: "Ashish",
    age: 21,
    occupation: "Developer"
  };
  
  // Function to log a greeting
  function greetPerson(p) {
    console.log(`Hello, my name is ${p.name}, I'm ${p.age} years old and I work as a ${p.occupation}.`);
  }
  
  // Example usage
  greetPerson(person);
  // Output: Hello, my name is Ashish, I'm 21 years old and I work as a Developer.
  