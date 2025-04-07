// Q11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]
    
// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.

const result = students.map(student => {
    
    const marks = Object.entries(student)
      .filter(([key]) => key !== 'name')
      .map(([, value]) => value);
  
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const average = total / marks.length;
  
    return {
      name: student.name,
      average: average
    };
  });
  
  console.log(result);
  