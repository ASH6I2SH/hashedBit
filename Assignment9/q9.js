// Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.

function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  }
  
  // Example usage:
  const objA = { name: "Ashish", age: 21 };
  const objB = { occupation: "Developer", country: "India" };
  
  const merged = mergeObjects(objA, objB);
  console.log(merged);
  // Output: { name: "Ashish", age: 21, occupation: "Developer", country: "India" }
  