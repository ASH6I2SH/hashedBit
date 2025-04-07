// 4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProducts(n1, n2) {
    let str1 = n1.toString();
    let str2 = n2.toString();

    // Make both strings the same length by padding with leading zeros
    while (str1.length < str2.length) str1 = "0" + str1;
    while (str2.length < str1.length) str2 = "0" + str2;

    let sum = 0;

    for (let i = 0; i < str1.length; i++) {
        sum += parseInt(str1[i]) * parseInt(str2[i]);
    }

    return sum;
}

console.log(sumOfProducts(6, 34));    // (6*4) + (0*3) = 24
console.log(sumOfProducts(23, 456));  // (0*4) + (2*5) + (3*6) = 28
console.log(sumOfProducts(123, 321)); // (1*3) + (2*2) + (3*1) = 10
console.log(sumOfProducts(9, 8));     // (9*8) = 72