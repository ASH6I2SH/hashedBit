// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

let str = "JavaScript is super fun!";

str = str.toLowerCase();

const vowelsList = ['a', 'e', 'i', 'o', 'u'];

let vowelCount = 0;
let consonantCount = 0;

for (let char of str) {
  if (char >= 'a' && char <= 'z') {
    if (vowelsList.includes(char)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
}

console.log("Vowels:", vowelCount);
console.log("Consonants:", consonantCount);
