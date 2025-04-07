// Q9) Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    const words = paragraph.split(" ");
    return words.filter(word => word !== "").length;
  }
  
  // Example usage:
  let para = "This is a simple paragraph with some words.";
  console.log(countWords(para)); // Output: 8
  