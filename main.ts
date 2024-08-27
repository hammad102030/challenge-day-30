
// Day 30

// *Question 1: Convert Number to Words*

// *Problem:*
// Write a TypeScript function that takes a number between 0 and 99 and returns the number in words. For example, if the input is 45, the output should be "Forty-Five".

// *Hint:*
// - Create arrays for single digits (0-9), teens (10-19), and tens (20, 30, ... 90).
// - Handle different cases separately: numbers less than 10, between 10 and 19, and between 20 and 99.

// *Function Signature:*
// typescript
function number_To_Words(num: number): string {

   let single_Digits = [
    "Zero", "One", "Two", "Three", "Four",
    "Five", "Six", "Seven", "Eight", "Nine"];

   let teens = [
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
     "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

    let tens = [
        "", "", "Twenty", "Thirty", "Forty", 
        "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    
        if(num < 10) {
            return single_Digits[num]

        }else if(num >= 10 && num < 20) {
            return teens[num - 10]

        }else {

            let tens_Part = tens[Math.floor(num / 10)]
            let ones_Part = num % 10

            if (ones_Part === 0) {
                return tens_Part;

            }else {
                return `${tens_Part}-${single_Digits[ones_Part]}`
            }
        }
    };

    console.log(number_To_Words(90));
    console.log(number_To_Words(11));
    console.log(number_To_Words(5));

// ---

// *Question 2: Calculate the Sum of the First n Natural Numbers*

// *Problem:*
// Write a TypeScript function that takes a positive integer n and returns the sum of the first n natural numbers. For example, if n = 5, the output should be 15 (because 1 + 2 + 3 + 4 + 5 = 15).

// *Hint:*
// - Use the formula for the sum of the first n natural numbers: \(\text{Sum} = \frac{n \times (n + 1)}{2}\).
// - Alternatively, implement the sum using a loop that adds each number from 1 to n.

// *Function Signature:*
// typescript
// function sumOfNaturalNumbers(n: number): number {
//   // Your code here
// }

function sum_Of_Natural_Numbers(n: number): number {
    let sum = 0;
    
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    
    return sum;
  }
  
  console.log(sum_Of_Natural_Numbers(5)); // Output: 15
  console.log(sum_Of_Natural_Numbers(10)); // Output: 55