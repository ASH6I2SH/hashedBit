// Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Function that returns a new array with each number squared
function squareNumbers(arr) {
  return arr.map(num => num * num);
}

// Example usage
const squared = squareNumbers(numbers);
console.log(squared); // Output: [1, 4, 9, 16, 25]
