// Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?

function scopeExample() {
    if (true) {
      var a = "I am var";
      let b = "I am let";
      const c = "I am const";
  
      console.log("Inside block:");
      console.log(a); // I am var
      console.log(b); // I am let
      console.log(c); // I am const
    }
  
    console.log("Outside block:");
    console.log(a); // I am var
    // console.log(b); //  Error: b is not defined
    // console.log(c); //  Error: c is not defined
  }
  
  scopeExample();
  