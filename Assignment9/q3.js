// Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.

function modifyArray(arr) {
    arr.push("New Element"); // Add to end
    arr.pop();               // Remove last element
    return arr;              // Return the modified array
  }
  
  // Example usage:
  const myArray = [1, 2, 3];
  console.log(modifyArray(myArray)); // Output: [1, 2, 3]
  