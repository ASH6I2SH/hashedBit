// Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array


// Create an array of numbers
const numbers = [10, 20, 30, 40, 50];

// Function to calculate the sum using reduce
function sumArray(arr) {
  return arr.reduce((total, current) => total + current, 0);
}

// Example usage
const totalSum = sumArray(numbers);
console.log(totalSum); // Output: 150
