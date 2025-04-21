// Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers

function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const oddNumbers = filterOddNumbers(numbers);
  
  console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]
  