// Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.

// Creating the array
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

// Function to return the second fruit
function getSecondFruit() {
  return fruits[1]; // Arrays are 0-indexed, so index 1 is the second item
}

// Example usage
console.log(getSecondFruit()); // Output: Banana
