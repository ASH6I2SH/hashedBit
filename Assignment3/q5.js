// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctfn(sentence, wrong, correct) {
    let pattern = new RegExp(wrong, 'g');
    return sentence.replace(pattern, correct);
  }
  
  // Example usage:
  let sentence = "I have a pen and a aplle. That aplle is red.";
  let fixed = correctfn(sentence, "aplle", "apple");
  
  console.log(fixed); 
  