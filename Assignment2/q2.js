// 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculate(n1, n2, op) {
  switch (op) {
    case "+":
      return n1 + n2;
      break;

    case "-":
      return n1 - n2;
      break;

    case "*":
      return n1 * n2;
      break;

    case "/":
      return n2 !== 0 ? n1 / n2 : "Error: Division by 0";
      break;

    default:
      return "Not a valid operator";
      break;
  }
}

console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '-')); // 5
console.log(calculate(10, 5, '*')); // 50
console.log(calculate(10, 5, '/')); // 2
console.log(calculate(10, 0, '/')); // Error: Division by zero
console.log(calculate(10, 5, '%')); // Error: Invalid operator


