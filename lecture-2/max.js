let a = 5;
let b = 3;
console.log(a + b);

let numbers = [1, 2, 4, 5, 6, 100];

// 1. adcanced
// console.log(Math.max(...number))

//2. old but gold

let max = Number.MIN_VALUE;

numbers.forEach((currentNumber) => {
  if (max < currentNumber) {
    max = currentNumber;
  }
});

console.log(max);
