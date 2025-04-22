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

const input = [
  {
      student1: {
          subject1: 44,
          subject2: 56,
          subject3: 87,
          subject4: 97,
          subject5: 37
      }
  },
  {
      student2: {
          subject1: 44,
          subject2: 56,
          subject3: 87,
          subject4: 97,
          subject5: 37
      }
  },
  {
      student3: {
          subject1: 44,
          subject2: 56,
          subject3: 87,
          subject4: 97,
          subject5: 37
      }
  }
];

const output = input.map(studentObj => {
  const [studentName, subjects] = Object.entries(studentObj)[0];
  const scores = Object.values(subjects);
  const average = Math.floor(scores.reduce((sum, val) => sum + val, 0) / scores.length);

  return {
      [studentName]: {
          average
      }
  };
});

console.log(output);
